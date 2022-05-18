import { Router } from "vue-router";
import { inject } from "@/utils/aop";

export enum DirectionType {
  // 进入动画
  In = "in",
  // 退出动画
  Out = "out",
  /** 不应用动画，用于处理IOS侧滑冲突 */
  None = "",
}

// 路由动画
export const routeTransition = (router: Router) => {
  /** 默认认为是IOS的侧滑返回，通过监听router方法进行改变 */
  let isIosJump = true;
  let direction = DirectionType.None;

  /** 处理路由跳转动画，push、replace、go(正值｜0)应用In动画，其他情况应用Out动画 */
  router.replace = inject("before", router.replace, () => {
    isIosJump = false;
    direction = DirectionType.In;
  });

  router.push = inject("before", router.push, () => {
    isIosJump = false;
    direction = DirectionType.In;
  });

  router.go = inject("before", router.go, (delta) => {
    isIosJump = false;
    if (delta >= 0) {
      direction = DirectionType.In;
    } else {
      direction = DirectionType.Out;
    }
  });

  router.back = inject("before", router.back, () => {
    isIosJump = false;
    direction = DirectionType.Out;
  });

  router.beforeEach(function (to, from, next) {
    // 如果是IOS侧滑则不应用侧滑动效
    if (isIosJump) {
      direction = DirectionType.None;
    }

    to.meta.direction = direction;

    next();
  });

  router.afterEach(() => {
    isIosJump = true;
  });
};
