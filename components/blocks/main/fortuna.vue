<template>
  <div class="letter-container">
    <div class="wrapper-main content">
      <div class="letter">
        <ElementsText
          class="heading-title"
          size="heading"
          transform="upper"
          themes="secondary"
          >Планета
          <br />
          фортунус</ElementsText
        >
        <ElementsMessageIcon class="alien-wrapper">
          <ElementsText transform="upper"
            >Так-так, кто это нарушает скоростной режим? Тормози! Лучше
            проверим, насколько ты везунчик — мы на планете «Фортунус»! У тебя
            есть <span class="red-text">1 попытка в день</span>, чтобы испытать
            судьбу — крути колесо и получай подарки</ElementsText
          >
          <ElementsPixelButton
            :is-main-page="true"
            color="red"
            size="large"
            class="spin-button"
            :disabled="!isAvailable || isSpinning"
            @click="handleSpin"
          >
            Крутануть планету
          </ElementsPixelButton>
        </ElementsMessageIcon>
      </div>
      <div class="planets-wrapper">
        <BlocksFortuneComets />
        <BlocksFortuneWheel :on-mount="getWheelElement" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useWheelStore();
const isAvailable = computed(() => store.isAvailable);
const isSpinning = computed(() => store.isSpinning);

const wheelElement = ref<HTMLImageElement | undefined>(undefined);
const getWheelElement = (element: HTMLImageElement | undefined) => {
  wheelElement.value = element;
};

const handleSpin = () => {
  store.handleSpin(wheelElement.value);
};
</script>

<style lang="scss" scoped>
.content {
  padding-top: 20.1vw;
  padding-right: 15px;
  display: flex;
  justify-content: space-between;
  gap: 30px;

  @include media(1000px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 200px;
  }
}
.planets-wrapper {
  position: relative;
}
.letter {
  max-width: 600px;
  width: 100%;
}
.red-text {
  color: red;
}
.spin-button {
  margin-top: 28px;
}
.alien-wrapper {
  p {
    @include media(744px) {
      text-align: right;
    }
  }
}
</style>
