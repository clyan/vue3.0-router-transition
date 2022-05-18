<template>
  <div class="mine">
    <div class="tabbar" @click="$router.push({ name: 'Setting' })">点击</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Mine",
  setup() {
    return {};
  },
};
</script>
<style scoped>
.mine {
  min-height: 100vh;
  width: 100%;
  background: green;
}
.tabbar {
  position: fixed;
  bottom: 0;
  height: 100px;
  background-color: aquamarine;
  width: 100%;
  text-align: center;
  line-height: 100px;
}
</style>
