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
      this.todo = todo
      debugger
      this.modal.show()
    })
  }
}
</script>
<style lang="scss">

</style>
