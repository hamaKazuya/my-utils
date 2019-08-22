<template>
  <div class="container">
    <h1>Todo</h1>
    <b-list-group>
      <b-list-group-item
        button
        :id="todo.id"
        :key="todo.id"
        @click="showDetail"
        v-for="todo in todoList"
      >
        {{ todo.title }}
      </b-list-group-item>
    </b-list-group>
    <b-button-group class="mt-3">
      <b-button variant="primary">Add</b-button>
      <b-button>Button 2</b-button>
      <b-button>Button 3</b-button>
    </b-button-group>
    <modal-todo-detail
      refs="modal-detail"
      :todo="todoList[0]"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import modalTodoDetail from '@/components/modalTodoDetail.vue'
import { Todo } from '@/interface/todo'

@Component({
  components: {
    modalTodoDetail
  }
})
export default class Index extends Vue {
  name: string = 'kazuya hama'
  todoList: Todo[] = [
    {
      id: 1,
      title: 'いぬにご飯をあげる',
      isDone: false,
      detail: '本当は夕方にもあげたい。'
    },
    {
      id: 2,
      title: 'スーパーでマヨを買う',
      isDone: false,
      detail: 'かならずキューピー出ないといけない。カロリーオフもだめだ'
    }
  ]
  showDetail() {
    console.log('showDetail', this)
    this.$refs['modal-detail'].show()
  }
}
</script>

<style>
</style>
