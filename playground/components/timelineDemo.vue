<template>
  <div ref="boxOuter" class="outer">
    <h1>TimeLine</h1>
    <div ref="box-1" class="box" />
    <div ref="box-2" class="box" />
    <div ref="box-3" class="box" />
    <button @click="playAnimTimeLine">Play Animation</button>
    <button @click="ResetAnimTimeLine">Reset Animation</button>
  </div>
</template>

<script setup lang="ts">

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
