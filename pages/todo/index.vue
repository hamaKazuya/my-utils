<template>
  <div class="container">
    <h1>Todo</h1>
    <b-list-group>
      <b-list-group-item
        class="cnt-todo-list"
        :key="todo.id"
        v-for="todo in todoList"
      >
        {{ todo.id }},
        <b-form-checkbox
          v-model="todo.isDone"
        >
          {{ todo.title }}
        </b-form-checkbox>
        <b-button
          size="sm"
          @click="showDetail(todo.id)"
        >
          showDetail
        </b-button>
      </b-list-group-item>
    </b-list-group>
    <b-button-group class="mt-3">
      <b-button
        variant="primary"
        @click="addTodo"
      >
        Add
      </b-button>
      <b-button>Button 2</b-button>
      <b-button>Button 3</b-button>
    </b-button-group>
    <modal-todo-detail
      ref="modal"
    />
    <modal-add-todo
      ref="modalAdd"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Ref } from 'vue-property-decorator'
import modalTodoDetail from '@/components/modalTodoDetail.vue'
import modalAddTodo from '@/components/modalAddTodo.vue'
import { todoStore } from '@/store'
import { TodoState, TodoObj } from '@/types/todo'

@Component({
  components: {
    modalTodoDetail,
    modalAddTodo
  }
})
export default class Index extends Vue {
  //!を使用しているけどどうやら初期値を指定しないといけないらしい
  @Ref() modal!: modalTodoDetail
  @Ref() modalAdd!: modalAddTodo

  name: string = 'kazuya hama'

  async created() {
    const path = '/api/v1/member'
    // TODO TSのinterfaceのエラーっぽい何か
    const res = await this.$axios.get(path)
    console.log(res)
  }

  // TODO 返り値の型を指定したいけどTodoStateではないらしい。なんでだ
  get todoList(): any {
    console.log(todoStore.todoList)
    return todoStore.todoList
  }

  getTodoById(id: number) {
    return this.todoList.find((todo: TodoObj) => todo.id === id)
  }
  addTodo(id: number) {
    this.modalAdd.$emit('add')
  }
  showDetail(id: number) {
    this.modal.$emit('show', this.getTodoById(id))
  }
}
</script>

<style>
.cnt-todo-list {
  display: flex;
}
</style>
