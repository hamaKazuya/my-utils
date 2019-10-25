<template>
  <b-modal
    :visible.sync="isVisible"
    title="TODO詳細"
    no-close-on-backdrop
  >
    <b-form>
      <b-form-group id="input-group-4">
        <b-form-checkbox v-model="todo.isDone">isDone</b-form-checkbox>
        <label for="form-id" class="mt-3">ID</label>
        <b-form-input
          v-model="todo.id"
          id="form-id"
          disabled
        ></b-form-input>
        <label for="form-title" class="mt-3">タイトル</label>
        <b-form-input
          v-model="todo.title"
          placeholder="タイトルを入力"
          id="form-title"
        ></b-form-input>
        <label for="form-detail" class="mt-3">詳細</label>
        <b-form-textarea
          v-model="todo.detail"
          id="form-detail"
          placeholder="詳細を記入"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
    </b-form>
    <template v-slot:modal-footer>
      <div class="w-100">
        <div class="float-left">
          <b-button
            variant="danger"
            @click="handleOk(todo.id)"
          >
            Delete
          </b-button>
        </div>
        <div class="float-right">
          <b-button
            variant="secondary"
            @click="handleClose"
          >
            Close
          </b-button>
          <b-button
            variant="primary"
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
