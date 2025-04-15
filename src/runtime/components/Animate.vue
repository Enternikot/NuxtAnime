<template>
  <component :is="props.is" ref="el">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { animate, JSAnimation, type AnimationParams } from "animejs";
import { getCurrentInstance, onMounted, ref, useTemplateRef } from "vue";

const props = withDefaults(
  defineProps<{
    is?: string;
    animate?: AnimationParams;
  }>(),
  {
    is: "div",
  },
);
const anim = ref<JSAnimation>();
const el = useTemplateRef<HTMLElement>("el");

const emits = defineEmits(["play", "pause"]);

anim.value?.play();

onMounted(() => {
  anim.value = animate(el.value!, { ...props.animate });
});
</script>

<style></style>
