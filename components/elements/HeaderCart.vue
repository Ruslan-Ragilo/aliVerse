<script setup>
const store = useModalBasked();
</script>
<template>
  <button class="cart-button" @click="store.setIsOpen(true)">
    <img class="cart-icon" src="~/assets/images/png/bag.png" alt="Cart" />
  </button>
</template>

<style scoped lang="scss">
.cart-button {
  width: 60px;
  height: 60px;
  border: none;
  background-color: transparent;
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

.cart-icon {
  width: 100%;
  height: 100%;
}
</style>
