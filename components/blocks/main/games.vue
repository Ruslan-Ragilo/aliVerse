<template>
  <div class="wrapper-main wrapper">
    <BlocksGamesFull v-if="screenSize === 'large'" />
    <BlocksGamesSlider v-if="screenSize === 'small'" />
    <BlocksGamesMoon />
    <div class="message">
      <img
        class="sign"
        src="~/assets/images/png/games/sign.png"
        alt=""
        draggable="false"
      />
      <ElementsMessageIcon class="alien">
        <ElementsText transform="upper">
          Готов разбогатеть? Заходи в любую из мини-игр, зарабатывай Ali Coins и
          копи на свой приз! Каждый день у тебя будет только 1 попытка, чтобы
          сыграть в мини-игру — не теряй времени, летс гоу!
        </ElementsText>
      </ElementsMessageIcon>
    </div>
    <BlocksShadowsModal />
  </div>
</template>

<script setup lang="ts">
const screenSize = ref<"large" | "small">("large");

const updateScreenSize = () => {
  const windowWidth = window.innerWidth;
  screenSize.value = windowWidth > 1200 ? "large" : "small";
};

onMounted(() => {
  updateScreenSize();
  window.addEventListener("resize", updateScreenSize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateScreenSize);
});
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
  padding-bottom: 200px;

  @include media(1200px) {
    padding-bottom: 45vw;
  }

  @include media(500px) {
    gap: 70px;
  }
}
.message {
  max-width: 610px;
  width: 100%;
  padding: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  @include media(1200px) {
    transform: translate(-50%, -30%);
  }

  @include media(600px) {
    padding: 10px;
  }
}
div.alien {
  gap: 0;
}
.sign {
  position: absolute;
  top: -30px;
  left: 50px;

  @include media(1200px) {
    height: 300px;
    top: -40px;
    left: 20px;
  }

  @include media(600px) {
    height: 230px;
    top: 30px;
    left: 20px;
  }
}
</style>
