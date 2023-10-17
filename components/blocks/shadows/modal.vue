<template>
  <div v-if="isModalOpen" class="wrapper-modal">
    <ElementsPixelBorder />
    <div class="modal">
      <BlocksShadowsBackground />
      <ElementsCloseButton @click="handleClose" />
      <BlocksShadowsWelcome v-if="gameScreen === 'welcome'" />
      <BlocksShadowsRules v-if="gameScreen === 'rules'" />
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useShadowsStore();
const isModalOpen = computed(() => store.isModalOpen);
const gameScreen = computed(() => store.gameScreen);

const handleClose = () => {
  store.closeModal();
  store.resetGame();
};
</script>

<style scoped lang="scss">
.wrapper-modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 13;
}
.modal {
  position: relative;
  width: calc(100% - 48px);
  height: calc(100% - 48px);
  padding: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  background-image: url("~/assets/images/png/shadows/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  overflow-y: scroll;

  @include media(800px) {
    width: 100%;
    height: 100%;
  }
}
.modal::-webkit-scrollbar {
  display: none;
}
.bg-image {
  position: absolute;
  height: 100%;
  aspect-ratio: 3/2;
}
</style>
