<template>
  <div class="modal">
    <div class="modal-content">
      <ElementsText size="xl" transform="upper" align="center">
        <slot name="message"></slot>
      </ElementsText>
      <ElementsText
        themes="mustard-dark"
        size="heading"
        font-family="Barcade"
        align="center"
      >
        <slot name="points"></slot>
      </ElementsText>
      <ElementsPixelButton color="red" size="middle" @click="onClose">
        <slot name="buttonText"> </slot
      ></ElementsPixelButton>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  onClose: () => void;
}>();
</script>

<style scoped lang="scss">
.modal {
  width: 100%;
  max-width: 800px;
  aspect-ratio: 3/2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: 20px solid #000000;

  @include media(600px) {
    aspect-ratio: 1/1;
    border: 10px solid #000000;
  }
}

.modal-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 30px 60px;

  @include media(1000px) {
    p:nth-of-type(1) {
      font-size: 26px;
    }

    p:nth-of-type(2) {
      font-size: 50px;
    }
  }

  @include media(500px) {
    padding: 30px 20px;

    p:nth-of-type(1) {
      font-size: 20px;
    }

    p:nth-of-type(2) {
      font-size: 32px;
    }
  }
}
</style>
