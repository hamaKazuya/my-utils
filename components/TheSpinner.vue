<template>
  <div class="spinner d-flex justify-content-center text-primary">
    <b-spinner label="Loading..."></b-spinner>
  </div>
</template>
<script lang="ts">
import { Vue } from 'vue-property-decorator'
export default class Spinner extends Vue {}
</script>
<style lang="scss">
.spinner {
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
