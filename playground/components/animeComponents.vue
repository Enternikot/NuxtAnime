<template>
  <div>
    <VAnimate
      is="div"
      :animate="{
        x: 300,
        rotate: 120,
      }"
      class="box"
    />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.box {
  height: 32px;
  width: 32px;
  background-color: blue;
  margin: 6px;
}
</style>
