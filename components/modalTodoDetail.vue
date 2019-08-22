<template>
    <b-modal :ref="refs">
      id: {{ todo.id }},<br>
      isDone: {{ todo.isDone }}<br>
      title: {{ todo.title }}<br>
      detail: {{ todo.detail }}
    </b-modal>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Todo } from '@/interface/todo'

@Component
export default class Modal extends Vue {
  @Prop()
  refs!: string

  @Prop()
  todo!: Todo
}
</script>
<style lang="scss">

</style>
