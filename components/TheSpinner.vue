<template>
  <div
    class="spinner justify-content-center text-primary"
    v-show="isLoading"
  >
    <b-spinner label="Loading..."></b-spinner>
  </div>
</template>
<script lang="ts">
import { Vue } from 'vue-property-decorator'
import { rootStore } from '@/store'
export default class Spinner extends Vue {
  isLoading = rootStore.isLoading
}
</script>
<style lang="scss">
.spinner {
  display: flex;
  position: absolute;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,.6);
  display: flex;
  justify-content: center;
  align-items: center;

  .spinner-border {
    width: 4rem;
    height: 4rem;
  }

}

</style>
