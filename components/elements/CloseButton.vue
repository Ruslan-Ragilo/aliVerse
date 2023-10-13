<template>
  <button class="close-button" v-bind="attrs"></button>
</template>

<script setup lang="ts">
const attrs = useAttrs();
</script>

<style scoped lang="scss">
.close-button {
  position: absolute;
  top: 41px;
  right: 41px;
  margin-left: auto;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #fff;
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.2));
  cursor: pointer;
  z-index: 3;
}

.close-button::before,
.close-button::after {
  content: "";
  display: block;
  width: 20px;
  height: 2px;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #333333;
}

.close-button::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.close-button::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}
</style>
