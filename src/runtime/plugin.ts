import { defineNuxtPlugin } from "#app";
import { computed, onMounted, provide, ref } from "vue";
import { animate } from "animejs";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("animate", animate);
  nuxtApp.vueApp.directive("animate", {
    mounted(el, binding) {
      const params = computed(() => {
        console.log(binding.value);
        return binding.value;
      });
      const anim = ref();
      anim.value = animate(el, binding.value);
    },
  });
  const animatePlay = (e) => {
    console.log(e);
  };
});
