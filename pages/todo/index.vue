<template>
  <div class="container">
    <h1 class="mt-3">Todo</h1>
    <div class="d-flex justify-content-between">
      <b-button-group class="todo-btns mt-1">
        <b-button
          variant="primary"
          @click="addTodo"
        >
          Add
        </b-button>
      </b-button-group>
      <select class="form-control todo-select-btn">
        <option>すべて表示</option>
        <option>Doneのみ</option>
        <option>Done以外のみ</option>
      </select>
    </div>
    <b-list-group class="mt-3">
      <b-list-group-item
        class="cnt-todo-list list-group-item-action"
        :key="todo.id"
        @click="showDetail(todo.id)"
        v-for="todo in todoList"
      >
        <b-form-checkbox
          :checked="todo.isDone === 1"
          @change="updateIsDone({id: todo.id, isDone: !todo.isDone})"
        >
        </b-form-checkbox>
        {{ todo.id }}, {{ todo.title }}
      </b-list-group-item>
    </b-list-group>
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
import { TodoState, TodoObj, UpdateIsDone } from '@/types/todo'

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

  created() {
    todoStore.getTodos()
  }

  // TODO 返り値の型を指定したいけどTodoStateではないらしい。なんでだ
  get todoList(): any {
    console.log(todoStore.todoList)
    return todoStore.todoList
  }

  updateIsDone(obj: UpdateIsDone) {
    todoStore.updateIsDone(obj)
  }

  getTodoById(id: number) {
    // TODO interfaceがgoの構造体の定義に影響されて大文字よくない
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
.todo-btns {
  width: 20%;
}
.todo-select-btn {
  width: 30%;
}
</style>
