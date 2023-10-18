<template>
  <div v-if="showModal" class="modal-wrapper" @click.self="store.closeModal">
    <ElementsModal :on-close="store.closeModal">
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
  </div>
</template>

<script setup lang="ts">
const store = useWheelStore();
const showModal = computed(() => store.showModal);
const gainedPoints = computed(() => store.gainedPoints);
</script>

<style lang="scss" scoped>
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 4;

  @include media(500px) {
    padding: 16px;
  }
}
.message {
  white-space: pre-line;
}
</style>
