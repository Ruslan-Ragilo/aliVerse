<template>
  <div class="wrapper-finish">
    <ElementsModal :on-close="store.closeModal">
      <template #message>
        <div>{{ coins > 0 ? "Поздравляем" : "Ничего, повезет" }}</div>
        <div>{{ coins > 0 ? "ты заработал" : "в следующий раз" }}</div>
      </template>
      <template #points>{{ coins }}</template>
      <template #buttonText>{{ coins > 0 ? "Ура,спасибо!" : "Ок" }}</template>
    </ElementsModal>
  </div>
</template>

<script setup lang="ts">
const store = useShadowsStore();
const coins = ref(store.getCoins());
</script>

<style scoped lang="scss">
.wrapper-finish {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
</style>
