<template>
  <div class="container">
    <h1 class="mt-3">Todo</h1>
    <div class="d-flex justify-content-between">
      <b-button-group class="todo-btns mt-1">
        <b-button
          variant="primary"
          @click="showAddModal"
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
    <template v-if="todoList.length > 0">
      <b-list-group class="mt-3">
        <b-list-group-item
          class="cnt-todo-list list-group-item-action"
          :key="todo.id"
          @click="showDetailModal(todo.id)"
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
    </template>
    <div
      class="alert alert-primary mt-3"
      role="alert"
      v-else
    >
      Todoが存在しません<br>
      Todoがある場合は追加してみましょう
    </div>
    <modal-todo-detail
      :is-visible="isDetailModalVisible"
      :todo="currentTodo"
      @handle-close="hideDetailModal"
    />
    <modal-add-todo
      :is-visible="isAddModalVisible"
      @handle-close="hideAddModal"
    />
  </div>
</template>

<script lang="ts">
import _ from 'lodash'
import { Component, Vue, Emit, Ref } from 'vue-property-decorator'
import modalTodoDetail from '@/components/modalTodoDetail.vue'
import modalAddTodo from '@/components/modalAddTodo.vue'
import { todoStore } from '@/store'
import { Todo, UpdateIsDone } from '@/types/todo'

@Component({
  components: {
    modalTodoDetail,
    modalAddTodo
  }
})
export default class Index extends Vue {
  isDetailModalVisible: boolean = false
  isAddModalVisible: boolean = false
  currentTodo: Todo = {
    id: 0,
    title: '',
    isDone: false,
    detail: ''
  }
  // LifeCycle
  created() {
    todoStore.getTodos()
  }
  // Getters
  get todoList(): Todo[] {
    return todoStore.todoList
  }
  // Methods
  updateIsDone(obj: UpdateIsDone) {
    todoStore.updateIsDone(obj)
  }
  // TODO これtodosと内容同じだからぶっちゃけstoreからid指定で受け取ればいい
  getTodoById(id: number): Todo {
    return this.todoList.find((todo: Todo) => todo.id === id)
  }
  showAddModal(id: number) {
    this.isAddModalVisible = true
  }
  hideAddModal() {
    this.isAddModalVisible = false
  }
  showDetailModal(id: number) {
    this.isDetailModalVisible = true
    this.currentTodo = _.cloneDeep(this.getTodoById(id))
  }
  hideDetailModal() {
    this.isDetailModalVisible = false
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
