<template>
  <button ref="cartRef" class="cart-button" @click="store.setIsOpen(true)">
    <img class="cart-icon" src="~/assets/images/png/bag.png" alt="Cart" />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  isScrollingUp: boolean;
}>();
const store = useModalBasked();

const cartRef = ref();

watch(
  () => props.isScrollingUp,
  () => {
    if (props.isScrollingUp) {
      cartRef.value.style.top = "30px";
    } else {
      cartRef.value.style.top = "-300px";
    }
  },
);
</script>

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
  transition: all 0.3s;

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
