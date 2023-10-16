<template>
  <div class="wheel-wrapper">
    <img class="sign" src="~assets/images/png/fortune/sign.png" alt="" />
    <img
      class="wheel"
      :style="{ transform: `rotate(${currentRotation}deg)` }"
      :class="{ spin: isSpinning }"
      src="~assets/images/png/fortune/wheel.png"
      alt="Fortune wheel"
    />

    <button class="play-button" @click="handleSpin"></button>
  </div>
</template>

<script setup lang="ts">
const isSpinning = ref(false);
const currentRotation = ref(0);
const gainedPoints = ref(0);

const handleSpin = () => {
  isSpinning.value = true;
  const spinningTime = Math.random() * (5000 - 1000) + 1000;

  // TODO добавить взаимодествие с беком

  setTimeout(() => {
    isSpinning.value = false;
    const wheel = document.querySelector(".wheel");
    const style = window.getComputedStyle(wheel!);
    const matrix = new DOMMatrix(style.transform);
    const currentAngle =
      (Math.atan2(matrix.b, matrix.a) * (180 / Math.PI)) % 360;
    currentRotation.value = currentAngle;

    const points = (Math.round((360 - currentRotation.value) / 36) % 10) * 50;
    gainedPoints.value = points;
  }, spinningTime);
};
</script>

<style lang="scss" scoped>
.wheel-wrapper {
  position: relative;
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

.play-button:active {
  top: calc(50% + 10px);
  background-image: url("~/assets/images/png/fortune/play-button-active.png");
}
</style>
