import { defineNuxtPlugin } from "#app";
import { ref } from "vue";
import { animate } from "animejs";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("animate", animate);
  nuxtApp.vueApp.directive("animate", {
    mounted(el, binding) {
      const anim = ref();
      anim.value = animate(el, binding.value);
    },
  });
});
