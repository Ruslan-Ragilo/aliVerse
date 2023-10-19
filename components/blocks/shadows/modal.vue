<template>
  <div v-if="isModalOpen" class="wrapper-modal">
    <ElementsPixelBorder />
    <div class="modal">
      <BlocksShadowsBackground />
      <BlocksShadowsModalButtons />
      <BlocksShadowsWelcome v-if="gameScreen === 'welcome'" />
      <BlocksShadowsRules v-if="gameScreen === 'rules'" />
      <BlocksShadowsGame v-if="gameScreen === 'game'" />
      <BlocksShadowsFinish v-if="gameScreen === 'finish'" />
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useShadowsStore();
const isModalOpen = computed(() => store.isModalOpen);
const gameScreen = computed(() => store.gameScreen);
const gamesRemained = computed(() => store.gamesRemained);

if (gamesRemained.value === 0) {
  store.finishGame();
}
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
</style>
