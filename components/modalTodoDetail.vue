<template>
  <b-modal
    ref="modal"
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

    <template v-slot:modal-footer="{ cancel }">
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
            @click="cancel()"
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
import { Component, Ref, Vue } from 'vue-property-decorator'
import { todoStore } from '@/store'
import { TodoObj } from '@/types/todo'
import _ from 'lodash'

@Component
export default class Modal extends Vue {
  // FIXME 本当に!を入れないといけないのか。anyを指定するのは多分間違ってる
  @Ref() modal!: any
  // FIXME interfaceを指定している場合
  // 初期値をinterfaceに合わせないといけない？面倒だし行が増えるし
  todo: TodoObj = {
    id: 0,
    title: '',
    isDone: true,
    detail: ''
  }

  created() {
    // FIXME on以外方法ないのかな
    this.$on('show', (todo: TodoObj) => {
      this.todo = _.cloneDeep(todo)
      this.modal.show()
    })
  }

  updateTodoById() {
    this.todo.isDone = this.todo.isDone
    todoStore.updateTodoByID(this.todo)
    this.modal.hide()
    // TODO 更新成功しましたPUを出す
    // this.modalSuccess.show()
  }

  handleOk(id: number) {
    todoStore.deleteTodoByID(id)
    this.modal.hide()
  }
}
</script>
<style lang="scss">

</style>
