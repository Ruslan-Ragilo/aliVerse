<script setup>
const popupStore = useModalBasked();

const userStore = useUserData();

onMounted(async () => {
  await userStore.getCart();
});
</script>
<template>
  <div
    :class="['overlay', { active: popupStore.getIsOpen }]"
    @click.self="popupStore.setIsOpen(false)"
  >
    <div :class="['wrapper', { active: popupStore.getIsOpen }]">
      <img
        class="close"
        src="@/assets/images/svg/closeModal.svg"
        alt=""
        @click="popupStore.setIsOpen(false)"
      />
      <ElementsText class="headingBasket" transform="upper" size="xxl"
        >корзина</ElementsText
      >
      <ElementsText class="totalCoints" transform="upper" size="s"
        >У тебя: <span>{{ userStore.userData?.balanceUser }} alicoins</span>
      </ElementsText>
      <div class="wrapperItems">
        <BlocksBasketItemBasket
          v-for="item in userStore.cartItems"
          :key="item?.id"
          :cart-item="item"
        />
      </div>
      <div class="btnBy">
        <ElementsPixelButton
          v-if="userStore.cartItems?.length > 0"
          color="red"
          size="middle"
          @click="userStore.makeOrder"
          >Купить</ElementsPixelButton
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: rgba($color: #000000, $alpha: 0.7);
  z-index: 14;
  display: none;

  &.active {
    display: block;
  }

  .btnBy {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
  }

  .wrapper {
    position: relative;
    max-width: 855px;
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 40px 70px;
    padding-bottom: 110px;
    transition: 0.3s;
    left: -100%;

    &.active {
      left: 0;
    }

    @include media(732px) {
      padding: 30px;
    }
    @include media(500px) {
      padding: 15px;
    }

    .wrapperItems {
      height: 80vh;
    }
    .close {
      cursor: pointer;
      position: absolute;
      top: 15px;
      right: 15px;
    }

    .headingBasket {
      @include media(500px) {
        font-size: $font-size-m;
        line-height: $line-height-m;
      }
    }

    .totalCoints {
      margin-top: 10px;
      margin-bottom: 50px;

      span {
        color: #ffd776;
        text-shadow: 1px 1px #ff2722;
      }
      @include media(500px) {
        font-size: $font-size-xxs;
        line-height: $line-height-xxs;
      }
    }
  }
}
</style>
