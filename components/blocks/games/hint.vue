<template>
  <div class="hint">
    <ElementsText themes="secondary" size="xs" transform="upper" align="center">
      <slot />
    </ElementsText>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.hint {
  width: 140px;
  height: 70px;
  padding: 10px;
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  background-color: #ff2722;
  border: 4px solid #fff;
}
</style>
