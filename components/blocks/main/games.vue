<template>
  <div class="wrapper-main wrapper">
    <div class="games" :class="{ grayscale: !isAvailable }">
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
          <ElementsText v-if="isAvailable" transform="upper">
            Готов разбогатеть? Заходи в любую из мини-игр, зарабатывай Ali Coins
            и копи на свой приз! Каждый день у тебя будет
            <span class="red">только 1 попытка</span>, чтобы сыграть в мини-игру
            — не теряй времени, летс гоу!
          </ElementsText>
          <ElementsText v-if="!isAvailable" transform="upper" align="center">
            Планета устала и ушла спать.<br />До новых встреч!
          </ElementsText>
        </ElementsMessageIcon>
      </div>
      <BlocksShadowsModal />
      <BlocksFactsModal />
      <BlocksFallModal />
    </div>
  </div>
</template>

<script setup lang="ts">
const isAvailable = ref(
  await isToday("11/08/2023 07:59:59", "11/19/2023 23:59:59"),
);

const screenSize = ref<"large" | "small">("large");

const updateScreenSize = () => {
  const windowWidth = window.innerWidth;
  screenSize.value = windowWidth > 1150 ? "large" : "small";
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
.games {
  position: relative;
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
  padding-bottom: 200px;

  @include media(1200px) {
    padding-bottom: 45vw;
  }
}

.grayscale > *:not(.message) {
  filter: grayscale(1);
}
.message {
  max-width: 610px;
  width: 75%;
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
    transform: translate(-50%, 0);
  }
}
div.alien {
  gap: 0;
}
.sign {
  position: absolute;
  top: -240px;
  left: 50px;

  @include media(1200px) {
    height: 300px;
    top: -200px;
    left: 20px;
  }

  @include media(600px) {
    height: 230px;
    top: -170px;
    left: 20px;
  }

  @include media(450px) {
    height: 230px;
    top: -100px;
    left: 20px;
  }
}
.red {
  color: #ff2722;
}
</style>
