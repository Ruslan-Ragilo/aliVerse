<template>
  <BlocksFortuneModal />
  <div class="wheel-wrapper">
    <img class="glow" src="~assets/images/png/fortune/glow.png" alt="" />
    <img
      class="sign"
      src="~assets/images/png/fortune/sign.png"
      alt=""
      draggable="false"
    />
    <img
      ref="wheel"
      class="wheel"
      :style="{ transform: `rotate(${currentRotation}deg)` }"
      :class="{ spin: isSpinning }"
      src="~assets/images/png/fortune/wheel.png"
      alt="Fortune wheel"
      draggable="false"
    />
    <!-- <button
      class="play-button"
      :disabled="!isAvailable || isSpinning || !isActive"
      @click="handleSpin"
    ></button> -->
  </div>
</template>

<script setup lang="ts">
const { onMount } = defineProps<{
  onMount: (el: HTMLImageElement | undefined) => void;
}>();

/* const isActive = ref(
  isToday(
    "November 08 2023 07:59:59 GMT+03:00",
    "November 19 2023 23:59:59 GMT+03:00",
  ),
); */

const wheel = ref<HTMLImageElement>();
const store = useWheelStore();
// const isAvailable = computed(() => store.isAvailable);
const isSpinning = computed(() => store.isSpinning);
const currentRotation = computed(() => store.currentRotation);

onMounted(() => {
  onMount(wheel.value);
});

/* const handleSpin = () => {
  store.handleSpin(wheel.value);
}; */
</script>

<style lang="scss" scoped>
.wheel-wrapper {
  position: relative;
}
.wheel {
  width: 712px;
  height: 712px;

  @include media(1000px) {
    width: 537px;
    height: 537px;
  }

  @include media(600px) {
    width: 340px;
    height: 340px;
  }
}
.message {
  white-space: pre-line;
}
.glow {
  position: absolute;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @include media(1000px) {
    width: 950px;
    height: 950px;
  }

  @include media(600px) {
    width: 600px;
    height: 600px;
  }
}
.sign {
  position: absolute;
  right: 100px;
  top: -200px;

  @include media(1000px) {
    height: 400px;
    right: 50px;
    top: -200px;
  }

  @include media(600px) {
    height: 250px;
    top: -130px;
    right: 34px;
  }
}
.spin {
  animation-name: spin;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
.play-button {
  width: 121px;
  height: 77px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  background-color: transparent;
  background-image: url("~/assets/images/png/fortune/play-button.png");
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;

  @include media(1000px) {
    width: 92px;
    height: 58px;
  }

  @include media(600px) {
    width: 58px;
    height: 37px;
  }
}
.play-button:active:not(:disabled) {
  top: calc(50% + 10px);
  background-image: url("~/assets/images/png/fortune/play-button-active.png");
  background-size: contain;
}
.play-button:disabled {
  cursor: default;
  filter: grayscale(100%) brightness(1.5);
}
</style>
