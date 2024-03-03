<template>
  <div class="wrapper-welcome">
    <img
      class="welcome-image"
      src="~/assets/images/png/shadows/title.png"
      alt="Тайны галактики"
      draggable="false"
    />
    <div class="start-button">
      <ElementsPixelButton color="red" size="middle" @click="startGame">
        Стартуем!
      </ElementsPixelButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useShadowsStore();

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
  transform: translateY(-7vh);

  @include media(500px) {
    transform: translateY(-15vh);
  }
}

.start-button {
  position: absolute;
  bottom: 15%;
}
</style>
