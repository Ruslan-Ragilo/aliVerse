<script setup lang="ts">
import { Product } from "./SwiperSlide.vue";
import $api from "~/http";

const userStore = useUserData();
const productStore = useProductStore();
const isModalOpen = computed(() => productStore.isModalOpen);

const allProducts = ref<Product[]>([]);
const res = await $api("api/product/show-all");
allProducts.value = res?.data?.products ?? [];

const productsArray = computed(() =>
  allProducts.value.filter((el) => el.name === productStore.openProduct),
);

const isSoldToday = ref(false);

const addToCart = () => {
  isSoldToday.value = false;

  if (productStore.selectedLocation) {
    const productToOrder = productsArray.value.find(
      (el) => el.location === productStore.selectedLocation,
    );

    if (productToOrder && productToOrder.day_sold < productToOrder.day_limit) {
      isSoldToday.value = false;
      userStore.addToCart(productToOrder.id);
      productStore.closeModal();
    } else if (
      productToOrder &&
      productToOrder.day_sold >= productToOrder.day_limit
    ) {
      isSoldToday.value = true;
    }
  } else if (
    productsArray.value[0].id === 31 ||
    productsArray.value[0].id === 32 ||
    productsArray.value[0].id === 33
  ) {
    if (productsArray.value[0].day_sold >= productsArray.value[0].day_limit) {
      isSoldToday.value = true;
      productStore.showSoldHint();
    } else {
      isSoldToday.value = false;
      userStore.addToCart(productsArray.value[0].id);
      productStore.closeModal();
    }
  } else {
    isSoldToday.value = false;
    productStore.showSoldHint();
    productStore.showHint();
  }
};
/* 
const getSoldForToday = async () => {
  const { data } = await $api(`product/day-limit/${productsArray.value[0].id}`);
  console.log(productsArray.value[0].id, data);
  return data;
};

const isSoldToday = ref(await getSoldForToday()); */
</script>
<template>
  <div
    v-if="isModalOpen"
    class="wrapper-modal"
    @click.self="productStore.closeModal"
  >
    <div class="modal">
      <ElementsCloseButton
        class="close-button"
        @click="productStore.closeModal"
      />
      <div class="content">
        <img
          class="product-image"
          :src="getImageUrl(`png/merch/${productsArray[0]?.id}.png`)"
          alt=""
        />
        <div class="info">
          <ElementsText transform="upper" size="xxxl" class="product-name">
            {{ productsArray[0]?.name }}
          </ElementsText>
          <div class="price-wrapper">
            <ElementsText themes="light" size="xxs" transform="upper">
              {{ productsArray[0]?.price }}
            </ElementsText>
            <ElementsText
              themes="mustard"
              size="m"
              transform="upper"
              class="product-price"
            >
              {{ productsArray[0]?.ali_price }} Alicoins
            </ElementsText>
          </div>
          <ElementsText transform="upper" size="xs" class="location-text">
            {{ productsArray[0]?.location !== 4 ? "Заберу в:" : "" }}
            <ElementsText v-if="productStore.isHintVisible" class="hint">
              Выбери локацию
            </ElementsText>
            <ElementsText
              v-if="
                productStore.isSoldHintVisible &&
                isSoldToday &&
                productStore.inStock
              "
              class="hint sold"
            >
              Сегодня товар закончился<br />Приходи завтра
            </ElementsText>
            <ElementsText
              v-if="productStore.isSoldHintVisible && !productStore.inStock"
              class="hint sold"
            >
              Товар закончился
            </ElementsText>
          </ElementsText>
          <ElementsLocationSelect :products-array="productsArray" />
          <ElementsPixelButton
            color="red"
            size="middle"
            class="cart-button"
            :disabled="false"
            @click="addToCart"
          >
            В корзину
          </ElementsPixelButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  position: relative;
  background-color: #fff;
  max-width: 1000px;
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @include media(450px) {
    max-width: none;
    width: 100%;
    height: 100%;
  }
}
.close-button {
  @include media(450px) {
    top: 16px;
    right: 16px;
  }

  @media screen and (max-height: 900px) {
    top: 16px;
    right: 16px;
  }
}
.price-wrapper {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 10px;

  p:first-of-type {
    color: #b0b0b0;
    position: relative;
    transform: translateY(-4px);
  }

  p:first-of-type::before {
    content: "";
    display: block;
    height: 1px;
    width: 46px;
    background-color: #b0b0b0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
.content {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
  height: 100%;
  padding: 50px;
  padding-right: 100px;

  @include media(900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @include media(650px) {
    padding: 30px;
  }

  @include media(550px) {
    padding: 20px;
  }

  @include media(450px) {
    padding: 10px;
  }
}
.info {
  display: flex;
  flex-direction: column;
  gap: 16px;

  @include media(900px) {
    align-items: center;
  }
}
.product-image {
  width: 400px;
  height: 400px;
  object-fit: contain;
  padding: 25px;
  border: 3px solid #dfdfdf;
  border-radius: 20px;

  @include media(1000px) {
    width: 300px;
    height: 300px;
    padding: 18px;
  }

  @include media(400px) {
    width: 250px;
    height: 250px;
    padding: 18px;
  }
}
.product-name {
  @include media(1200px) {
    font-size: 32px;
  }

  @include media(900px) {
    font-size: 24px;
  }
}
.product-price {
  margin-bottom: 14px;
}
.location-text {
  display: flex;
  align-items: center;
  gap: 20px;
  height: 30px;
  color: #afafaf;

  @include media(530px) {
    font-size: 14px;
    margin-right: auto;
  }
}
.hint {
  padding: 5px 10px;
  color: #ff2722;
  border: 2px solid #ff2722;
  border-radius: 5px;

  @include media(530px) {
    font-size: 14px;
  }
}
.sold {
  font-size: 12px;
}
.cart-button {
  @include media(900px) {
    margin: 0 auto;
  }
}
</style>
