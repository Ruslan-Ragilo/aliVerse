<script setup>
const progresTotal = ref(Math.round(100 * (11 / 11)));
// TODO Вот тут менять прогресс ракеты (1 из 11 и т.д.)

const isAvailable = ref(
  await isToday("11/11/2023 10:59:59", "11/17/2023 23:59:59"),
);
</script>

<template>
  <div v-if="isAvailable" class="wrapper-main">
    <div class="wrapper">
      <div class="wrapper-progress">
        <img
          src="@/assets/images/svg/progress/progressSmoke.svg"
          alt=""
          class="lineSmoke"
          draggable="false"
        />
        <div class="progress-line">
          <img
            :style="{ left: `${progresTotal}%` }"
            src="@/assets/images/png/progress-craft.png"
            alt=""
            class="craft"
            draggable="false"
          />
          <div
            :style="{ width: `${progresTotal}%` }"
            class="progress-line-fire"
          ></div>
        </div>
        <ElementsText class="target" size="s" themes="secondary"
          >Цель</ElementsText
        >
      </div>
      <ElementsText class="text" align="center" size="l" themes="secondary"
        >Летим к рекордам 11/11 2023
      </ElementsText>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  margin-top: 35px;
  padding: 60px 40px 35px;
  border-radius: 20px;
  background: linear-gradient(90deg, #3b3056 0.01%, #2c204a 99.99%);

  @include media(744px) {
    padding: 30px 20px;
  }
  .target {
    @include media(1200px) {
      font-size: $font-size-xxs;
      line-height: $line-height-xxs;
    }
  }

  .text {
    @include media(1200px) {
      font-size: $font-size-xs;
      line-height: $line-height-xs;
    }
    @include media(744px) {
      font-size: $font-size-xxs;
      line-height: $line-height-xxs;
    }
  }
  .wrapper-progress {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .progress-line {
    background: #2c204a;
    height: 9px;
    width: 90%;
    position: relative;
    margin-right: 100px;

    @include media(1200px) {
      margin-right: 60px;
    }

    .craft {
      position: absolute;
      transform: translatey(-42%);
      z-index: 1;

      @include media(1200px) {
        width: 55px;
        transform: translateY(-40%);
      }
    }

    .progress-line-fire {
      background-image: url("@/assets/images/svg/progress/progressLine.svg");
      position: absolute;
      left: 0;
      height: 10px;
      z-index: 0;
    }
  }

  .text {
    margin-top: 35px;
  }
}
</style>
