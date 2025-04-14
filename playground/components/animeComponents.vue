<template>
  <div>
    <Animate
      is="div"
      :animate="{
        x: 300,
        rotate: 120,
      }"
      class="box"
      @play=""
    >
    </Animate>
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
