<template>
  <div>
    <h1>Directive</h1>
    <div ref="box" v-animate="{ x: xVal }" class="box" />
    <pre>xVal: {{ xVal }}</pre>
  </div>
</template>

<script lang="ts" setup>
const xVal = ref(30);
const box = useTemplateRef("box");
</script>

<style scoped>
.box {
  height: 32px;
  width: 32px;
  background-color: orange;
  margin: 6px;
}
</style>
