import { defineNuxtPlugin } from "#app";
import { ref } from "vue";
import { animate } from "animejs";
import * as anime from "animejs";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("anime", anime);
  nuxtApp.vueApp.directive("animate", {
    mounted(el, binding) {
      const anim = ref();
      anim.value = animate(el, binding.value);
    },
  });
});
