import Vue3Marquee from "vue3-marquee";
import VueCountdown from "@chenfengyuan/vue-countdown";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Marquee, { name: "Vue3Marquee" });
  nuxtApp.vueApp.component(VueCountdown.name, VueCountdown);
});
