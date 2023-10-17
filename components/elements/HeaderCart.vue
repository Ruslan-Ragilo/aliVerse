<script setup>
const store = useModalBasked();
</script>
<template>
  <button class="cart-button" @click="store.setIsOpen(true)">
    <img src="~/assets/images/svg/bag.svg" />
  </button>
</template>

<style scoped lang="scss">
.cart-button {
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  @include media(1200px) {
    width: 46px;
    height: 46px;
  }
  @include media(1200px) {
    width: 46px;
    height: 46px;
  }
}
</style>
