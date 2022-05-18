<template>
  <div class="setting">
    <button @click="$router.push({ name: 'About' })">关于我们</button>
    <button @click="$router.go(-1)">返回</button>
    <div v-for="i in 9">
      {{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i
      }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i
      }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}
    </div>
    <div v-for="i in 9">
      {{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i
      }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i
      }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}{{ i }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Setting",
  components: {},
};
</script>
<style scoped>
.setting {
  width: 100%;
  min-height: 100vh;
  background: yellow;
}
</style>
