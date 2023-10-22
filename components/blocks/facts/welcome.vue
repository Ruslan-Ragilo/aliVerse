<template>
  <div class="wrapper-welcome">
    <img
      class="welcome-image"
      src="~/assets/images/png/facts/facts-logo.png"
      alt="Сила знаний"
      draggable="false"
    />
    <div class="start-button">
      <ElementsPixelButton color="red" size="middle" @click="startGame">
        Погнали!
      </ElementsPixelButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useFactsStore();

onMounted(() => {
  store.checkAvailability();
});

const startGame = () => {
  store.gameScreen = "rules";
};
</script>

<style scoped lang="scss">
.wrapper-welcome {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.welcome-image {
  max-width: 100%;
}

.start-button {
  position: absolute;
  bottom: 15%;
}
</style>
