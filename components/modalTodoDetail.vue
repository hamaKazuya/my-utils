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
import { TodoObj } from '@/types/todo'

@Component
export default class Modal extends Vue {
  @Ref() modal!: any // TODO 本当に!を入れないといけないのか。anyを指定するのは多分間違ってる

  // TODO interfaceのせいで初期値をちゃんと入れないといけないようだけど
  // そうではない方法がある気がする
  todo: TodoObj = {
    id: 0,
    title: '',
    isDone: true,
    detail: ''
  }

  created() {
    // on以外ほうほうないのかな
    this.$on('show', (todo: TodoObj) => {
      this.todo = todo
      debugger
      this.modal.show()
    })
  }
}
</script>
<style lang="scss">

</style>
