import {
  animate,
  createTimeline,
  JSAnimation,
  Timeline,
  type AnimationParams,
  type TimelineParams,
} from "animejs";
import { ref } from "vue";
import { onMounted, type ShallowRef } from "vue";

const useAnimate = async (
  target: ShallowRef<HTMLElement | null>,
  params: AnimationParams,
) => {
  const animation = ref<JSAnimation>();
  if (import.meta.client) {
    await onMounted(async () => {
      animation.value = animate(target.value!, params);
    });
    return animation;
  } else {
    return animation;
  }
};

const useAnimateTimeline = async (
  TimelineParams: TimelineParams,
  items: {
    target: ShallowRef<HTMLElement | null>;
    params: AnimationParams;
  }[],
) => {
  const timeline = ref<Timeline>();
  if (import.meta.client) {
    timeline.value = createTimeline(TimelineParams);
    await onMounted(() => {
      items.map((item) => {
        timeline.value?.add(item.target.value!, item.params);
      });
    });
    return timeline;
  } else {
    return timeline;
  }
};

export { useAnimate, useAnimateTimeline };
