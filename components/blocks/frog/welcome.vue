<template>
  <div class="wrapper-welcome">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64px" height="64px">
      <path d="M 11 2 L 11 4 L 21 4 L 21 2 L 11 2 z M 21 4 L 21 6 L 23 6 L 23 4 L 21 4 z M 23 6 L 23 16 L 25 16 L 25 6 L 23 6 z M 23 16 L 21 16 L 21 18 L 23 18 L 23 16 z M 21 18 L 11 18 L 11 20 L 15 20 L 15 23 L 14 23 L 14 30 L 18 30 L 18 23 L 17 23 L 17 20 L 21 20 L 21 18 z M 11 18 L 11 16 L 9 16 L 9 18 L 11 18 z M 9 16 L 9 6 L 7 6 L 7 16 L 9 16 z M 9 6 L 11 6 L 11 4 L 9 4 L 9 6 z" fill="#FFF"/>
    </svg>
    <p>Прилближай картинку, <br />чтобы точно найти жабку</p>
    <div class="start-button">
      <ElementsPixelButton color="red" size="middle" @click="startGame">
        Начать
      </ElementsPixelButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useFrogStore();
const resolution = window.innerWidth;

onMounted(() => {
  store.checkAvailability();
});

const startGame = () => {
  store.gameScreen = "rules";
};
</script>

<style scoped lang="scss">
.wrapper-welcome {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background: #00000085;
}

p {
  color: #fff;
  text-align: center;
  line-height: 25px;
}

.welcome-image {
  max-width: 100%;
}

.start-button {
  /* position: absolute;
  bottom: 15%; */
  margin-top: 30px;
}
svg {
  transform: rotate(-25deg);
  margin: 0 0 20px;
}
</style>
