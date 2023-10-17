<template>
  <div class="result-wrapper">
    <ElementsText themes="mustard-light" size="xxxl">
      Поздравляем!
    </ElementsText>
    <img
      class="result-image"
      :src="getImageUrl(results[finalResult].image)"
      alt=""
    />
    <ElementsText themes="secondary" size="s" transform="upper" align="center">
      Поздравляем, ты -
      <a class="result-link" :href="results[finalResult].link" target="_blank">
        {{ results[finalResult].linkText }} </a
      >{{ results[finalResult].linkDescription }}!
    </ElementsText>
    <ElementsText
      themes="secondary"
      size="xxs"
      transform="upper"
      align="center"
      >{{ results[finalResult].text }}</ElementsText
    >
    <ElementsPixelButton color="red" size="middle" @click="handleModalClose">
      На главную
    </ElementsPixelButton>
  </div>
</template>

<script setup lang="ts">
const store = useTestopolisStore();
const results = computed(() => store.results);
const finalResult = computed(() => store.finalResult || 1);

const handleModalClose = () => {
  store.closeModal();
  store.resetGame();
};
</script>

<style scoped lang="scss">
.result-wrapper {
  max-width: 1300px;
  width: 100%;
  height: 100%;
  padding: 30px 10%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.1fr 0.3fr 0.1fr 1fr 0.2fr;
  grid-row-gap: 20px;
  padding: 10px 34px;
  justify-items: center;
  z-index: 2;

  @media (min-width: 1440px) {
    grid-template-rows: 0.1fr 0.3fr 0.2fr 1fr 0.2fr;

    p:nth-of-type(2) {
      font-size: 22px;
    }

    p:nth-of-type(3) {
      font-size: 18px;
    }
  }

  @include media(900px) {
    padding: 10px 0;
  }

  @include media(600px) {
    padding-top: 70px;
  }

  @include media(500px) {
    gap: 25px;

    p:first-of-type {
      font-size: 36px;
    }
  }
}

.result-image {
  min-width: 216px;
  width: 25%;
  aspect-ratio: 1/1;
  object-fit: cover;
  margin-bottom: 10px;
}

.result-link {
  color: #ffffff;
}
</style>
