<template>
  <div class="corner">
    <div class="corner-item"></div>
    <div class="corner-item"></div>
    <div class="corner-item"></div>
    <div class="corner-item"></div>
    <div class="corner-item"></div>
    <div class="corner-item"></div>
  </div>
</template>

<style scoped lang="scss">
.corner {
  width: 36px;
  height: 36px;
  position: absolute;
  z-index: 5;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.corner-item:nth-of-type(1) {
  grid-area: 1 / 1 / 2 / 2;
  background-color: #303c9d;
}
.corner-item:nth-of-type(2) {
  grid-area: 1 / 2 / 2 / 3;
}
.corner-item:nth-of-type(3) {
  grid-area: 1 / 3 / 2 / 4;
}
.corner-item:nth-of-type(4) {
  grid-area: 2 / 1 / 3 / 2;
}
.corner-item:nth-of-type(5) {
  grid-area: 2 / 2 / 3 / 3;
}
.corner-item:nth-of-type(6) {
  grid-area: 3 / 1 / 4 / 2;
}
.corner-item {
  width: 12px;
  height: 12px;
  background-color: #6070e7;
}
.corner:nth-of-type(1) {
  top: 24px;
  left: 24px;
}
.corner:nth-of-type(2) {
  top: 24px;
  right: 24px;
  transform: rotate(90deg);
}
.corner:nth-of-type(3) {
  bottom: 24px;
  right: 24px;
  transform: rotate(180deg);
}
.corner:nth-of-type(4) {
  bottom: 24px;
  left: 24px;
  transform: rotate(-90deg);
}
</style>
