<template>
  <component :is="props.is" ref="el">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import type { JSAnimation, AnimationParams } from "animejs";
import { animate } from "animejs";
import { onMounted, ref, useTemplateRef } from "vue";

const props = withDefaults(
  defineProps<{
    is?: string;
    animateParams?: AnimationParams;
  }>(),
  {
    is: "div",
    animateParams: {},
  },
);
const anim = ref<JSAnimation>();
const el = useTemplateRef<HTMLElement>("el");

anim.value?.play();

onMounted(() => {
  anim.value = animate(el.value!, { ...props.animateParams });
});
</script>

<style></style>
