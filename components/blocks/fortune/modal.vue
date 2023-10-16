<template>
  <ElementsModal v-if="showModal" :on-close="store.closeModal">
    <template #message
      ><div class="message">
        {{
          gainedPoints > 0
            ? "Поздравляем\nты выиграл"
            : "Ничего, повезет в следующий раз"
        }}
      </div></template
    >
    <template #points>{{
      gainedPoints > 0 ? "+" + gainedPoints : "0"
    }}</template>
    <template #buttonText>{{
      gainedPoints > 0 ? "Ура,спасибо!" : "Ок"
    }}</template>
  </ElementsModal>
</template>

<script setup lang="ts">
const store = useWheelStore();
const showModal = computed(() => store.showModal);
const gainedPoints = computed(() => store.gainedPoints);
</script>

<style lang="scss" scoped>
.message {
  white-space: pre-line;
}
</style>
