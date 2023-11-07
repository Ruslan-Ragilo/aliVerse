<script setup lang="ts">
export interface Product {
  id: number;
  name: string;
  image?: string;
  price: number;
  ali_price: number;
  promocode?: string;
  in_stock: number;
  day_limit?: number;
  location: number;
  sold: number;
}

export interface CartItem {
  cart_form_id: number;
  date: string;
  id: number;
  price: number | null;
  product: {
    id: number;
    name: string;
    image: string | null;
    price: number;
    ali_price: number;
  };
  product_id: number;
  quantity: number | null;
  user_id: number;
}

const props = defineProps<{ product: Product }>();

const userStore = useUserData();
const productStore = useProductStore();

const isButtonDisabled = computed(() => {
  const cartLength = userStore.cartItems ? userStore.cartItems.length : 0;

  return (
    Number(userStore.userData.balanceUser) <=
      Number(props?.product?.ali_price) ||
    userStore.cartItems?.length >= 3 ||
    Number(userStore.userData.totalProducts) <= cartLength
  );
});

// TODO удалить код ниже и раскомментировать следующий!
/* const isProductAvailable = ref(true); */

const isProductAvailable = ref(
  isToday(
    new Date("November 20 2023 07:59:59 GMT+03:00"),
    new Date("November 24 2023 23:59:59 GMT+03:00"),
  ),
);
</script>
<template>
  <div class="wrapper-slide">
    <div v-if="!isProductAvailable" class="hint">
      <ElementsText themes="secondary" transform="upper" align="center">
        Недоступно до 20 ноября
      </ElementsText>
    </div>
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
        <ElementsText
          transform="upper"
          size="s"
          class="text-slide"
          :class="{ smaller: props.product.id === 33 }"
        >
          {{ props?.product?.name }}
        </ElementsText>
      </div>
      <div>
        <ElementsText themes="mustard" size="s" transform="upper">
          {{ props?.product?.ali_price }}
        </ElementsText>
        <button
          class="add-to-cart"
          :disabled="isButtonDisabled || !isProductAvailable"
          @click="productStore.openModal(props.product.name)"
        >
          <img
            title="Добавить в корзину"
            src="@/assets/images/png/bag-red.png"
            alt="Добавить в корзину"
          />
        </button>
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
  height: 470px;
  max-height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  .addButton {
    cursor: pointer;
  }

  .slide-header {
    background: url("@/assets/images/swiper/bubble.png") no-repeat;
    background-size: cover;
    width: 288px;
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
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .slide-footer {
    width: 100%;
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
  }
}

.product-image {
  max-width: 250px;
  max-height: 250px;
  z-index: 2;
}
.smaller {
  font-size: 16px;
  -webkit-line-clamp: 3 !important;
  padding-right: 25px;
}
.hint {
  width: 140px;
  height: 63px;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  background-color: #ff2722;
  border: 4px solid #fff;
  z-index: 3;

  p {
    font-size: 12px;
  }
}
</style>
