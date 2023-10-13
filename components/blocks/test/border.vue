<template>
  <div class="border-wrapper">
    <div class="border"></div>
    <div class="border"></div>
    <div class="border"></div>
    <div class="border"></div>
    <div class="border"></div>
    <div class="border"></div>
    <div class="border"></div>
    <div class="border"></div>
    <div class="border"></div>
    <div class="border"></div>
    <div>
      <ElementsBorderCorner />
      <ElementsBorderCorner />
      <ElementsBorderCorner />
      <ElementsBorderCorner />
    </div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.border-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.border {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.border:nth-of-type(1) {
  width: calc(100% - 96px);
  height: 100%;
  background-color: #303c9d;
}
.border:nth-of-type(2) {
  width: calc(100% - 72px);
  height: calc(100% - 24px);
  background-color: #303c9d;
}
.border:nth-of-type(3) {
  width: calc(100% - 48px);
  height: calc(100% - 48px);
  background-color: #303c9d;
}
.border:nth-of-type(4) {
  width: calc(100% - 24px);
  height: calc(100% - 72px);
  background-color: #303c9d;
}
.border:nth-of-type(5) {
  width: 100%;
  height: calc(100% - 96px);
  background-color: #303c9d;
}
.border:nth-of-type(6) {
  width: calc(100% - 96px);
  height: calc(100% - 24px);
  background-color: #6070e7;
}
.border:nth-of-type(7) {
  width: calc(100% - 96px);
  height: calc(100% - 48px);
  background-color: #6070e7;
}
.border:nth-of-type(8) {
  width: calc(100% - 72px);
  height: calc(100% - 72px);
  background-color: #6070e7;
}
.border:nth-of-type(9) {
  width: calc(100% - 48px);
  height: calc(100% - 96px);
  background-color: #6070e7;
}
.border:nth-of-type(10) {
  width: calc(100% - 24px);
  height: calc(100% - 96px);
  background-color: #6070e7;
}
</style>
