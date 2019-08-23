<template>
    <b-modal ref="modal">
      id: {{ todo.id }},<br>
      isDone: {{ todo.isDone }}<br>
      title: {{ todo.title }}<br>
      detail: {{ todo.detail }}
    </b-modal>
</template>
<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator'
import { Todo } from '@/types/todo/todo'

@Component
export default class Modal extends Vue {
  @Ref() modal!: any // TODO 本当に!を入れないといけないのか。anyを指定するのは多分間違ってる

  // TODO interfaceのせいで初期値をちゃんと入れないといけないようだけど
  // そうではない方法がある気がする
  todo: Todo = {
    id: 0,
    title: '',
    isDone: true,
    detail: ''
  }

  created() {
    this.$on('show', (todo: Todo) => {
      this.todo = todo
      this.modal.show()
    })
  }
}
</script>
<style lang="scss">

</style>
