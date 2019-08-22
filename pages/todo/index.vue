<template>
  <div class="container">
    <h1>Todo</h1>
    <b-list-group>
      <b-list-group-item
        button
        @click="showDetail"
      >
        Cras justo odio
      </b-list-group-item>
    </b-list-group>
    <b-button-group class="mt-3">
      <b-button variant="primary">Add</b-button>
      <b-button>Button 2</b-button>
      <b-button>Button 3</b-button>
    </b-button-group>
    <b-modal ref="modal-detail">
      詳細
    </b-modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

interface Todo {
  title: string,
  isDone: boolean,
  detail: string
}

@Component
export default class Index extends Vue {
  name: string = 'kazuya hama'
  todoList: Todo[] = [
    {
      title: 'いぬにご飯を上げる',
      isDone: false,
      detail: '本当は夕方にもあげたい。'
    }
  ]
  showDetail() {
    console.log('showDetail')
    this.$refs['modal-detail'].show()
  }
}
</script>

<style>
</style>
