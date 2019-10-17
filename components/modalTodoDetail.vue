<template>
  <b-modal
    ref="modal"
  >
    id: {{ todo.id }},<br>
    isDone: {{ todo.isDone }}<br>
    title: {{ todo.title }}<br>
    detail: {{ todo.detail }}

    <template v-slot:modal-header>
      <h5>TODO detail</h5>
    </template>

    <template v-slot:modal-footer="{ cancel }">
      <div class="w-100">
        <p class="float-left">Modal Footer Content</p>
        <div class="float-right">
          <b-button
            variant="secondary"
            size="sm"
            @click="cancel()"
          >
            Close
          </b-button>
          <b-button
            variant="danger"
            size="sm"
            @click="handleOk(todo.id)"
          >
            Delete
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
      this.modal.show()
    })
  }

  handleOk(id: number) {
    todoStore.deleteTodoByID({ id })
    this.$refs.modal.hide()
  }
}
</script>
<style lang="scss">

</style>
