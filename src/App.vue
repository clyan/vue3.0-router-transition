<template>
  <router-view v-slot="{ Component }">
    <transition :name="direction" :css="!!direction">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>
<script lang="ts">
import { useDirection } from "@/hooks/useDirection";
export default {
  name: "App",
  setup() {
    const direction = useDirection();
    return {
      direction,
    };
  },
};
</script>
<style>
body,
html {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
}

#app {
  width: 100%;
  height: 100%;
  position: relative;
}

* {
  padding: 0;
  margin: 0;
}

.page-out-enter-active,
.page-out-leave-active,
.page-in-enter-active,
.page-in-leave-active {
  will-change: transform;
  transition: transform 0.25s ease-out;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  backface-visibility: hidden;
  perspective: 1000;
  background-color: #f4f4f4;
}

.page-out-enter-from {
  transform: translateX(-30%);
}

.page-out-leave-active {
  transform: translateX(100%);
  z-index: 2;
}

.page-in-enter-from {
  transform: translateX(100%);
}

.page-in-leave-active {
  transform: translateX(-30%);
}
</style>
