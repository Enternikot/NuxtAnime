<template>
  <div>
    <h1 ref="box">Stagger</h1>
    <div v-for="i of 10" :key="i" ref="boxes" class="box" />
  </div>
</template>

<script lang="ts" setup>
import { stagger } from "animejs";

const boxes = ref();
const anim = useAnimate(boxes, {
  x: 320,
  rotate: -180,
  ease: "inOutQuint",
  loop: true,
  alternate: true,
  delay: stagger(65, {
    from: "center",
  }),
});
</script>

<style scoepd>
.box {
  height: 30px;
  width: 30px;
  background-color: red;
}
</style>
