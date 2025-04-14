<template>
  <div class="outer" ref="boxOuter">
    <h1>TimeLine</h1>
    <div class="box" ref="box-1"></div>
    <div class="box" ref="box-2"></div>
    <div class="box" ref="box-3"></div>
    <button @click="playAnimTimeLine">Play Animation</button>
    <button @click="ResetAnimTimeLine">Reset Animation</button>
    <br />
  </div>
</template>

<script setup lang="ts">
import { useAnimateTimeline } from "nuxtAnime/useAnimate";

const box1 = useTemplateRef("box-1");
const box2 = useTemplateRef("box-2");
const box3 = useTemplateRef("box-3");
const timeline = await useAnimateTimeline(
  {
    autoplay: false,
  },
  [
    {
      target: await box1,
      params: {
        x: 100,
        rotate: 360,
      },
    },
    {
      target: await box2,
      params: {
        x: 100,
        rotate: 360,
      },
    },
    {
      target: await box3,
      params: {
        x: 100,
        rotate: 360,
      },
    },
  ],
);

const playAnimTimeLine = () => timeline.value?.play();
const ResetAnimTimeLine = () => timeline.value?.reset();
</script>

<style scoped>
.box {
  height: 32px;
  width: 32px;
  background-color: green;
  margin: 6px;
}
</style>
