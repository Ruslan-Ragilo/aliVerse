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
const isButtonDisabled = computed(() => {
  return (
    Number(userStore.userData.balanceUser) <=
      Number(props?.product?.ali_price) || userStore.cartItems?.length >= 2
  );
});
</script>
<template>
  <div class="wrapper-slide">
    <div class="slide-header">
      <img
        class="product-image"
        :src="
          props.product?.image ??
          getImageUrl(`png/merch/${props.product?.id}.png`)
        "
        alt=""
      />
    </div>
    <div class="slide-footer">
      <div>
        <ElementsText transform="upper" size="s" class="text-slide">
          {{ props?.product?.name }}
        </ElementsText>
        <button
          class="add-to-cart"
          :disabled="isButtonDisabled"
          @click="userStore.addToCart(props.product?.id)"
        >
          <img
            title="Добавить в корзину"
            src="@/assets/images/png/bag-red.png"
            alt="Добавить в корзину"
          />
        </button>
      </div>
      <div>
        <ElementsText transform="upper" size="xxs" class="text-slide color">
          Только {{ locationsMap[`${props.product?.location}`] }}
        </ElementsText>

        <ElementsText class="price-points">
          {{ props?.product?.ali_price }}
        </ElementsText>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.add-to-cart {
  all: unset;
  cursor: pointer;
  &:disabled {
    cursor: default;
    filter: grayscale(100%) brightness(1.5);
  }
}
.wrapper-slide {
  width: 300px !important;
  height: 475px;
  max-height: fit-content;
  display: flex;
  flex-direction: column;

  .addButton {
    cursor: pointer;
  }

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
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .slide-footer {
    flex-grow: 1;
    padding: 20px 30px;
    background-color: $white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div:first-child {
      margin-bottom: 14px;
    }

    & div {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 15px;
    }
    .bottom {
      display: flex;
    }

    .color {
      color: #ff2722;
    }

    .price-points {
      color: #ffd776;
      text-shadow: 1px 1px #ff2722;
    }
  }
}

.product-image {
  max-width: 180px;
  max-height: 180px;
}
</style>
