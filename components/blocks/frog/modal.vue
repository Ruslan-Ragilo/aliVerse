<template>
  <div :class="['foggin', { active: store.isModalOpen }]"></div>
  <div v-if="isModalOpen" class="wrapper-modal">
    <ElementsPixelBorder />
    <div class="modal">
      <ElementsCloseButton @click="handleClose" />
      <BlocksFrogBackground />
      <BlocksFrogWelcome v-if="gameScreen === 'welcome'" />
      <BlocksFrogGame v-if="gameScreen === 'game'" />
      <BlocksFrogFinish v-if="gameScreen === 'finish'" />
      <BlocksFrogModalButtons />
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useFrogStore();
const isModalOpen = computed(() => store.isModalOpen);
const gameScreen = computed(() => store.gameScreen);

const handleClose = () => {
  store.closeModal();
};
</script>

<style scoped lang="scss">
.foggin.active {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 12;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
}
.wrapper-modal {
  height: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 15;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
}
.modal {
  position: relative;
  width: calc(100% - 48px);
  height: calc(100% - 48px);
  // padding: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  background-image: url("~/assets/images/png/shadows/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  @include media(800px) {
    width: 100%;
    height: 100%;
  }
}
.modal::-webkit-scrollbar {
  display: none;
}
</style>
