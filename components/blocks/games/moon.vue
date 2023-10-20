<template>
  <div class="moon-wrapper">
    <img
      class="moon"
      src="~/assets/images/png/games/moon.png"
      alt=""
      draggable="false"
    />
    <img
      class="monster-1"
      src="~/assets/images/png/games/monster-1.png"
      alt=""
      draggable="false"
    />
    <img
      class="monster-2"
      src="~/assets/images/png/games/monster-2.png"
      alt=""
      draggable="false"
    />
  </div>

  <img
    class="space-cowboy"
    src="~/assets/images/png/games/space-cowboy.png"
    alt=""
    draggable="false"
  />
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.sign {
  position: absolute;
  top: calc(50% - 330px);
  left: calc(50% - 140px);
  transform: translate(-50%, -50%);
  z-index: 1;

  @include media(1200px) {
    height: 300px;
    top: calc(50% - 580px);
    left: calc(50% - 250px);
    transform: translate(-50%, -50%);
  }
}
.moon-wrapper {
  position: relative;
}
.moon {
  z-index: -1;
  @include media(1200px) {
    max-width: 120vw;
    max-height: 120vw;
  }
}
.monster-1 {
  max-width: 30%;
  max-height: 30%;
  position: absolute;
  bottom: -70px;
  right: 35px;
  z-index: -2;

  @include media(1200px) {
    max-width: 25%;
    max-height: 25%;
    bottom: -20px;
    right: 0;
  }

  @include media(500px) {
    bottom: -10px;
  }
}
.monster-2 {
  max-width: 20%;
  max-height: 20%;
  position: absolute;
  bottom: 270px;
  right: -95px;
  z-index: -2;
}
.space-cowboy {
  position: absolute;
  bottom: 0;
  left: 0;
  max-width: 85vw;

  @include media(1200px) {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
