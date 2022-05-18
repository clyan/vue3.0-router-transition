<template>
  <div class="about">
    <button @click="$router.go(-1)">返回</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>
.about {
  width: 100%;
  min-height: 100vh;
  background: red;
}
</style>
