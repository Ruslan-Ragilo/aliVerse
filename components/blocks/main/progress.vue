<script setup>
const progresTotal = ref(Math.round(100 * (11 / 11)));
</script>

<template>
  <div class="wrapper-main">
    <div class="wrapper">
      <div class="wrapper-progress">
        <img
          src="@/assets/images/svg/progress/progressSmoke.svg"
          alt=""
          class="lineSmoke"
        />
        <div class="progress-line">
          <img
            :style="{ left: `${progresTotal}%` }"
            src="@/assets/images/svg/progress/craft.svg"
            alt=""
            class="craft"
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
  margin-top: 10px;
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
        transform: translatey(-40%);
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
