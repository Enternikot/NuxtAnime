<template>
  <div>
    <AnimateDemo />
    <TimelineDemo />
    <DirectiveDemo />
    <AnimeComponents />
    <div ref="demo"></div>
  </div>
</template>

<script lang="ts" setup>
const { $animate } = useNuxtApp();

const refDemo = useTemplateRef("demo");
onMounted(async () => {
  console.log(await $animate(refDemo.value, { x: 10 }));
});
</script>
