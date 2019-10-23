<template>
  <b-modal
    title="Todo作成"
    :visible.sync="isVisible"
    @cancel="onCancel"
    hide-footer
    no-close-on-backdrop
  >
    <b-form
      @submit.stop.prevent="onSubmit"
    >
      <b-row class="mb-3">
        <b-col sm="3">タイトル</b-col>
        <b-col sm="9">
          <ValidationProvider
            rules="required"
            v-slot="{ errors }"
          >
            <b-form-input
              id="title"
              name="id"
              v-model="form.title"
              type="text"
              required
              placeholder="todoタイトル"
            />
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </b-col>
      </b-row>
      <b-row class="mb-3">
        <b-col sm="3">詳細</b-col>
        <b-col sm="9">
          <ValidationProvider
            name="詳細"
            rules="required|min:10"
            v-slot="{ errors }"
          >
            <b-form-textarea
              id="deail"
              v-model="form.detail"
              placeholder="詳細を記入します"
              rows="3"
              max-rows="6"
            />
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </b-col>
      </b-row>
      <div slot="modal-footer" class="w-100">
        <b-button
          type="submit"
          variant="primary"
          class="float-right"
          @click="onSubmit">Submit
        </b-button>
      </div>
    </b-form>
  </b-modal>
</template>
<script lang="ts">
import { Component, Ref, Vue, Prop, Emit } from 'vue-property-decorator'
import _ from 'lodash' // TODO 都度importめんどいしglobalに持たせたい

import { Todo } from '@/types/todo'
import { todoStore } from '@/store'

@Component
export default class Modal extends Vue {
  @Prop({ type: Boolean }) readonly isVisible!: boolean

  defaultForm:Todo = {
    id: 0,
    title: '',
    isDone: false,
    detail: ''
  }

  form:Todo = _.cloneDeep(this.defaultForm)

  resetForm() {
    this.form = _.cloneDeep(this.defaultForm)
  }
  onCancel() {
    this.resetForm()
    this.handleClose()
  }
  onSubmit() {
    todoStore.add(this.form)
    this.handleClose()
    this.resetForm()
  }

  @Emit()
  handleClose() {}

}
</script>
<style lang="scss">

</style>
