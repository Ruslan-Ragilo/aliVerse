<template>
  <div class="wrapper-main content" :class="{ grayscale: !isActive }">
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
        <ElementsText v-if="isActive" transform="upper"
          >Так-так, кто это нарушает скоростной режим? Тормози! Лучше проверим,
          насколько ты везунчик — мы на планете «Фортунус»! У тебя есть
          <span class="red-text">1 попытка в день</span>, чтобы испытать судьбу
          — крути колесо и получай подарки</ElementsText
        >
        <ElementsPixelButton
          v-if="isActive"
          :is-main-page="true"
          color="red"
          size="large"
          class="spin-button"
          :disabled="!isAvailable || isSpinning"
          @click="handleSpin"
        >
          Крутануть планету
        </ElementsPixelButton>
        <ElementsText v-if="!isActive" transform="upper" align="center">
          Планета устала и ушла спать.<br />До новых встреч!
        </ElementsText>
      </ElementsMessageIcon>
    </div>
    <div class="planets-wrapper">
      <BlocksFortuneComets />
      <BlocksFortuneWheel :on-mount="getWheelElement" />
    </div>
  </div>
</template>

<script setup lang="ts">
const isActive = ref(
  isToday(
    new Date("November 08 2023 07:59:59 GMT+03:00"),
    new Date("November 19 2023 23:59:59 GMT+03:00"),
  ),
);

const store = useWheelStore();
store.checkAvailability();
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
  max-width: none;
  padding-top: 20.1vw;
  padding-right: 15px;
  padding-bottom: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  gap: 30px;

  @include media(1200px) {
    padding-top: 10.1vw;
    padding-bottom: 40px;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: center;
  }

  @include media(743px) {
    padding-top: 40.1vw;
  }
}

.grayscale > *:not(.letter) {
  filter: grayscale(1);
}

.letter > p {
  margin-left: 20px;

  @include media(744px) {
    margin-left: 10px;
  }
}
.planets-wrapper {
  position: relative;

  @include media(1200px) {
    top: 230px;
    left: 120px;
  }

  @include media(850px) {
    top: 190px;
    left: 120px;
  }

  @include media(743px) {
    top: 40px;
    left: 0;
  }
}
.letter {
  max-width: 675px;
  z-index: 2;

  @include media(1200px) {
    position: relative;
  }

  @include media(850px) {
  }

  @include media(743px) {
    top: 0;
  }
}
.red-text {
  color: #ff2722;
}
.spin-button {
  margin-top: 28px;
}
</style>
