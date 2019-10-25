<template>
  <b-modal
    title="作成"
    :visible.sync="isVisible"
    no-close-on-backdrop
  >
    <b-form
      @submit.stop.prevent="onSubmit"
    >
      <ValidationProvider
        rules="required"
        v-slot="{ errors }"
      >
        <label for="title">タイトル</label>
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
      <ValidationProvider
        name="詳細"
        rules="required|min:10"
        v-slot="{ errors }"
      >
        <label
          class="mt-3"
          for="deail"
        >詳細</label>
        <b-form-textarea
          id="deail"
          v-model="form.detail"
          placeholder="詳細を記入します"
          rows="3"
          max-rows="6"
        />
        <span class="text-danger">{{ errors[0] }}</span>
      </ValidationProvider>
    </b-form>
    <template v-slot:modal-footer>
      <div class="w-100">
        <div class="float-right">
          <b-button
            variant="secondary"
            @click="handleClose"
          >
            Close
          </b-button>
          <b-button
            variant="primary"
            @click="onSubmit"
          >
            Update
          </b-button>
        </div>
      </div>
    </template>
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
    // TODO
    // handleCloseと同期的にresetしてしまう。decoratorEmitの非同期どうすんの
    this.resetForm()
  }

  @Emit()
  handleClose() {}

}
</script>
<style lang="scss">

</style>
