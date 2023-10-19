<template>
  <BlocksFortuneModal />
  <div class="wheel-wrapper">
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
    <button
      class="play-button"
      :disabled="!isAvailable || isSpinning"
      @click="handleSpin"
    ></button>
  </div>
</template>

<script setup lang="ts">
const { onMount } = defineProps<{
  onMount: (el: HTMLImageElement | undefined) => void;
}>();

const wheel = ref<HTMLImageElement>();
const store = useWheelStore();
const isAvailable = computed(() => store.isAvailable);
const isSpinning = computed(() => store.isSpinning);
const currentRotation = computed(() => store.currentRotation);

onMounted(() => {
  onMount(wheel.value);
});

const handleSpin = () => {
  store.handleSpin(wheel.value);
};
</script>

<style lang="scss" scoped>
.wheel-wrapper {
  position: relative;
}
.message {
  white-space: pre-line;
}
.sign {
  position: absolute;
  right: 100px;
  top: -200px;
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 121px;
  height: 77px;
  border: none;
  background-color: transparent;
  background-image: url("~/assets/images/png/fortune/play-button.png");
  background-repeat: no-repeat;
  cursor: pointer;
}
.play-button:active:not(:disabled) {
  top: calc(50% + 10px);
  background-image: url("~/assets/images/png/fortune/play-button-active.png");
}
.play-button:disabled {
  cursor: default;
  filter: grayscale(100%) brightness(1.5);
}
</style>
