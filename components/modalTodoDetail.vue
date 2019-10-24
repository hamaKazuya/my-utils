<template>
  <b-modal
    :visible.sync="isVisible"
    @click="handleClose"
    no-close-on-backdrop
  >
    id: {{ todo.id }},<br>
    <b-form>
      <b-form-group id="input-group-4">
        <b-form-checkbox v-model="todo.isDone">isDone</b-form-checkbox>
        <b-row class="mb-3">
          <b-col sm="2">
            <label for="form-title">title: </label>
          </b-col>
          <b-col sm="10">
            <b-form-input
              v-model="todo.title"
              id="form-title"
            ></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="2">
            <label for="form-detail">detail: </label>
          </b-col>
          <b-col sm="10">
            <b-form-input
              v-model="todo.detail"
              id="form-detail"
            ></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>
    </b-form>
    <template v-slot:modal-header>
      <h5>TODO詳細</h5>
    </template>

    <template v-slot:modal-footer>
      <div class="w-100">
        <div class="float-left">
          <b-button
            variant="danger"
            size="sm"
            @click="handleOk(todo.id)"
          >
            Delete
          </b-button>
        </div>
        <div class="float-right">
          <b-button
            variant="secondary"
            size="sm"
            @click="handleClose"
          >
            Close
          </b-button>
          <b-button
            variant="primary"
            size="sm"
            @click="updateTodoById()"
          >
            Update
          </b-button>
        </div>
      </div>
    </template>
  </b-modal>
</template>
<script lang="ts">
import { Component, Ref, Vue, Prop, Emit } from 'vue-property-decorator'
import { todoStore } from '@/store'
import { Todo } from '@/types/todo'
import _ from 'lodash'

@Component
export default class Modal extends Vue {
  // NOTE: https://github.com/kaorun343/vue-property-decorator/issues/81
  @Prop({ type: Boolean, default: false }) readonly isVisible!: boolean
  @Prop({ type: Object, default: {} }) readonly todo!: Todo

  created() {
    console.log(this.isVisible)
  }

  updateTodoById() {
    this.todo.isDone = this.todo.isDone
    this.todo.isDone = this.todo.isDone|0 // TODO BE的にはintなのでとりあえずintにする
    todoStore.updateTodoByID(this.todo)
    this.handleClose()
    // TODO 更新成功しましたPUを出す
    // this.modalSuccess.show()
  }

  handleOk(id: number) {
    todoStore.deleteTodoByID(id)
    this.handleClose()
  }

  @Emit()
  handleClose() {
    console.log('handleClose')
  }
}
</script>
<style lang="scss">

</style>
