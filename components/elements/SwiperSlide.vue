<script setup lang="ts">
interface Product {
  id: number;
  name: string;
  image?: string;
  price: number;
  ali_price: number;
  promocode?: string;
  in_stock?: number;
  day_limit?: number;
  location: number;
  sold: number;
}

const props = defineProps<{ product: Product }>();

const userStore = useUserData();
</script>
<template>
  <div class="wrapper-slide">
    <div class="slide-header">
      <img
        :src="props.product?.image ?? getImageUrl('swiper/imageSwiper.png')"
        alt=""
      />
    </div>
    <div class="slide-footer">
      <div>
        <ElementsText transform="upper" size="s" class="text-slide">{{
          props?.product?.name
        }}</ElementsText>
        <img
          title="Добавить в корзину"
          src="@/assets/images/swiper/btnCart.svg"
          alt="Добавить в корзину"
          @click="userStore.addToCart(props.product?.id)"
        />
      </div>
      <div>
        <ElementsText transform="upper" size="xxs" class="text-slide color"
          >Только {{ locationsMap[`${props.product?.location}`] }}</ElementsText
        >

        <ElementsText class="price-points">{{
          props?.product?.ali_price
        }}</ElementsText>
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
