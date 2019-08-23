<template>
  <div class="container">
    <h1>Todo</h1>
    <b-list-group>
      <b-list-group-item
        class="cnt-todo-list"
        :key="todo.id"
        v-for="todo in todoList"
      >
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
      <b-button variant="primary">Add</b-button>
      <b-button>Button 2</b-button>
      <b-button>Button 3</b-button>
    </b-button-group>
    <modal-todo-detail
      ref="modal"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Ref } from 'vue-property-decorator'
import modalTodoDetail from '@/components/modalTodoDetail.vue'
import { Todo } from '@/interface/todo'

@Component({
  components: {
    modalTodoDetail
  }
})
export default class Index extends Vue {
  //!を使用しているけどどうやら初期値を指定しないといけないらしい
  @Ref() modal!: modalTodoDetail

  name: string = 'kazuya hama'
  todoList: Todo[] = [
    {
      id: 0,
      title: 'いぬにご飯をあげる',
      isDone: true,
      detail: '本当は夕方にもあげたい。'
    },
    {
      id: 1,
      title: 'スーパーでマヨを買う',
      isDone: false,
      detail: 'かならずキューピー出ないといけない。カロリーオフもだめだ'
    }
  ]

  getTodoById(id: number) {
    return this.todoList.find(todo => todo.id === id)
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
