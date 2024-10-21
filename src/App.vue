<script setup lang="ts">

</script>

<template>
  <div class="box">
    <router-view />
  </div>
</template>

<style scoped lang="scss">
/* app.vue */
.box {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
}
</style>
