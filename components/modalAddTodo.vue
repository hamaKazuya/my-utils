<template>
  <b-modal
    title="Todo作成"
    ref="modalAdd"
    v-show="isShowModal"
    @cancel="onCancel"
  >
    <b-form
      @submit.stop.prevent="onSubmit"
    >
      <b-row class="mb-3">
        <b-col sm="3">タイトル</b-col>
        <b-col sm="9">
          <b-form-input
            id="title"
            v-model="form.title"
            type="text"
            required
            placeholder="todoタイトル"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="3">詳細</b-col>
        <b-col sm="9">
          <b-form-textarea
            id="deail"
            v-model="form.detail"
            placeholder="詳細を記入します"
            rows="3"
            max-rows="6"
          />
        </b-col>
      </b-row>
      <div slot="modal-footer" class="w-100">
        <p class="float-left">Modal Footer Content</p>
        <b-button type="submit" variant="primary" @click="onSubmit">Submit</b-button>
        <!-- <b-button
          variant="primary"
          size="sm"
          class="float-right"
          @click="show=false"
        >
          Close
        </b-button> -->
      </div>
    </b-form>
  </b-modal>
</template>
<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator'
import { TodoObj } from '@/types/todo'
import { todoStore } from '@/store'

@Component
export default class Modal extends Vue {
  @Ref() modalAdd!: any // TODO 本当に!を入れないといけないのか。anyを指定するのは多分間違ってる
  form :TodoObj = {
    id: todoStore.todoList.length,
    title: '',
    isDone: false,
    detail: ''
  }
  isShowModal :boolean = false

  resetForm() {
    this.form = {
      id: 0,
      title: '',
      isDone: false,
      detail: ''
    }
  }
  onCancel() {
    this.resetForm()
  }
  onSubmit() {
    todoStore.add(this.form)
    this.isShowModal = false
    this.resetForm()
  }
  created() {
    this.$on('add', () => {
      this.modalAdd.show()
    })
  }

}
</script>
<style lang="scss">

</style>
