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
  position: fixed;
  top: 30px;
  left: 60px;
  width: 60px;
  height: 60px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 4;

  @include media(1200px) {
    width: 46px;
    height: 46px;
  }

  @include media(800px) {
    left: 30px;
  }
}

.cart-icon {
  width: 100%;
  height: 100%;
}
</style>
