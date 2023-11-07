<!-- eslint-disable vue/attribute-hyphenation -->
<script setup>
const isWednesday = ref(
  isToday(
    new Date("November 08 2023 07:59:59 GMT+03:00"),
    new Date("November 08 2023 23:59:59 GMT+03:00"),
  ) ||
    isToday(
      new Date("November 15 2023 07:59:59 GMT+03:00"),
      new Date("November 15 2023 23:59:59 GMT+03:00"),
    ),
);
</script>

<template>
  <div class="wrapper-main">
    <div class="wrapper" :class="{ notWednesday: !isWednesday }">
      <div class="wrapper-text">
        <ElementsText
          class-name="heading-text"
          size="heading"
          themes="secondary"
          >Привет!</ElementsText
        >
        <ElementsText themes="secondary" size="xs" class-name="text">
          А ты знал, что Всемирный день шопинга — распродажа «11.11» — был
          придуман <span class="names">Джеком Ма и Дэниэлом Чжаном</span> в
          далеком 2009 году? А в 2014 году впервые в истории прошла общемировая
          распродажа «11.11» на AliExpress <br /><br />
          Это был настоящий <span class="boom">БУМ</span>! С тех пор не только
          мы, но и весь рынок E-Com и Retail тщательно готовится и проводит
          грандиозную распродажу на своих площадках! Ну что, готов зарядиться и
          отправиться к новым распродажным рекордам?
        </ElementsText>
      </div>
      <div class="wrapper-img">
        <img
          src="@/assets/images/png/helloBlock.png"
          alt=""
          draggable="false"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  padding: 50px;
  border-radius: 20px;
  border: 3px solid #fff;
  background: rgba(23, 16, 42, 0.54);
  width: 100%;
  margin-top: 80px;
  position: relative;
  overflow: hidden;

  @include media(744px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @include media(1200px) {
    padding: 30px;
  }

  @include media(744px) {
    padding: 0;
  }

  .heading-text {
    @include media(1200px) {
      font-size: $font-size-xl;
      line-height: $line-height-xl;
    }
    @include media(744px) {
      font-size: $font-size-l;
      line-height: $line-height-l;
    }
  }

  .wrapper-text {
    @include media(744px) {
      padding: 30px;
      margin-bottom: -123px;
    }
  }

  .wrapper-img {
    position: absolute;
    top: -28%;
    right: -17%;

    @include media(1283px) {
      top: -10vw;
      right: -15vw;
    }

    @include media(1000px) {
      top: -7vw;
      right: 0vw;
      width: 80%;
    }

    @include media(744px) {
      position: relative;
      width: 100%;
      height: 50%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      top: 0;
      max-height: 400px;

      img {
        object-fit: cover;
        object-position: top center;
        width: 100%;
        height: 800px;

        @include media(500px) {
          width: auto;
          height: 800px;
          transform: translateX(-57px);
        }
      }
    }
  }

  .text {
    text-transform: uppercase;
    margin-top: 15px;
    width: 70%;
    @include media(1283px) {
      width: 63%;
      font-size: $font-size-xxs;
      line-height: $line-height-xxs;
    }
    @include media(744px) {
      width: 100%;
    }
    .names {
      color: #ff2722;
    }
    .boom {
      color: #ffd776;
    }
  }
}
.notWednesday {
  @include media(540px) {
    margin-top: 290px;
  }
}
</style>
