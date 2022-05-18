import { computed } from "vue";
import { useRoute } from "vue-router";
import { DirectionType } from "@/router/router-helper";

export const useDirection = () => {
  const route = useRoute();
  const direction = computed(() => {
    // 获取当前页面滑动动效方向， "" 表示不应用动效，处理ios下动效冲突问题
    if (route.meta.direction === DirectionType.None) return DirectionType.None;
    // 与动画名字保持一致
    return (
      "page-" +
      (route.meta.direction === DirectionType.In
        ? DirectionType.In
        : DirectionType.Out)
    );
  });
  return direction;
};
