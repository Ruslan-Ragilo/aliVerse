<template>
  <div class="wrapper-slide">
    <div class="slide-header">
      <img src="@/assets/images/swiper/imageSwiper.png" alt="" />
    </div>
    <div class="slide-footer">
      <div>
        <ElementsText transform="upper" size="s" class="text-slide"
          >коврик для мышки</ElementsText
        >
        <img src="@/assets/images/swiper/btnCart.svg" alt="" />
      </div>
      <div>
        <ElementsText transform="upper" size="xxs" class="text-slide color"
          >только онлайн</ElementsText
        >
        <ElementsText class="price-points">500</ElementsText>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper-slide {
  width: 300px !important;

  .slide-header {
    background: url("@/assets/images/swiper/bubble.png") no-repeat;
    background-size: cover;
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 22px;

    &::before {
      content: "";
      background: url("@/assets/images/swiper/blic.png") no-repeat;
      width: 83%;
      height: 80%;
      position: absolute;
      top: 37px;
      right: 0;
    }
  }
  .text-slide {
    max-width: 145px;
    width: 100%;
  }
  .slide-footer {
    padding: 20px 30px;
    background-color: $white;

    div:first-child {
      margin-bottom: 14px;
    }

    & div {
      display: flex;
      justify-content: space-between;
    }
    .bottom {
      display: flex;
    }

    .color {
      color: #939598;
    }

    .price-points {
      color: #ffd776;
      text-shadow: 1px 1px #ff2722;
    }
  }
}
</style>
