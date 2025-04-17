<template>
  <h1>Animate</h1>
  <div ref="box" class="box" />
  <button @click="playAnim">Play Animation</button>
  <button @click="ResetAnim">Reset Animation</button>
</template>

<script setup lang="ts">


const box = useTemplateRef("box");

const anim = await useAnimate(box, {
  autoplay: false,
  x: 100,
  rotate: 360,
});

const playAnim = () => anim.value?.play();
const ResetAnim = () => anim.value?.reset();
</script>

<style scoped>
.box {
  height: 32px;
  width: 32px;
  background-color: red;
  margin: 6px;
}
</style>
