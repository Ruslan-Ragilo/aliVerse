<template>
  <div class="wrapper-buttons">
    <!-- <button class="button">
      <img
        class="button-image"
        src="~/assets/images/png/shadows/volume.png"
        alt=""
      />
    </button> -->
    <button class="button" @click="handleClose">
      <img
        class="button-image"
        src="~/assets/images/png/shadows/close.png"
        alt=""
      />
    </button>
  </div>
</template>

<script setup lang="ts">
const store = useShadowsStore();

const handleClose = () => {
  store.closeModal();
  store.resetGame();
};
</script>

<style scoped lang="scss">
.wrapper-buttons {
  position: absolute;
  top: 30px;
  right: 45px;
  display: flex;
  gap: 10px;
  z-index: 3;

  @include media(800px) {
    right: 20px;
  }
}
.button {
  border: none;
  background-color: transparent;
  transition: all 0.1s ease-in;
  cursor: pointer;
}
.button:hover {
  transform: scale(1.05);
}
.button:active {
  transform: scale(1);
}

.button-image {
  @include media(800px) {
    width: 50px;
    height: 50px;
  }

  @include media(500px) {
    width: 37px;
    height: 37px;
  }
}
</style>
