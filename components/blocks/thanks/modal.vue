<template>
  <div v-if="isModalOpen" class="wrapper-modal">
    <div class="modal" :style="modalStyle">
      <ElementsCloseButton class="thanks-close-button" @click="handleClose" />
      <div class="modal-content">
        <div class="modal-header" :class="background ? `light` : ``">
          <ElementsText size="xxxl" transform="upper">Спасибка</ElementsText>
          <BlocksThanksSelectBg :on-bg-change="handleBgChange" />
        </div>
        <BlocksThanksForm :background="background" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { onModalClose } = defineProps<{
  isModalOpen: boolean;
  onModalClose: () => void;
}>();

const background = ref<string | null>(null);

const handleClose = () => {
  onModalClose();
  background.value = null;
};

const handleBgChange = (value: string) => {
  background.value = value;
};

const modalStyle = computed(() => {
  return background.value
    ? {
        backgroundImage: `url(${getImageUrl(
          `png/thanks/${background.value}-full.png`,
        )})`,
      }
    : "none";
});
</script>

<style scoped lang="scss">
.wrapper-modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 12;
}

.modal {
  position: relative;
  max-width: 1000px;
  width: 75%;
  padding: 41px;
  display: flex;
  background-color: #fff;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.2s ease-in;

  @include media(1100px) {
    width: 100%;
    height: auto;
    margin: 30px;
  }

  @include media(450px) {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 80px 20px;
  }

  @include media(400px) {
    padding: 50px 20px;
  }
}

.modal-content {
  width: 660px;
  padding: 33px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  backdrop-filter: blur(150px);

  @include media(450px) {
    width: 100%;
    padding: 24px;
    justify-content: center;
    gap: 10px;
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;

  @include media(768px) {
    flex-direction: column;
    gap: 24px;
  }
}

.light p {
  color: #fff;
}
.thanks-close-button {
  @include media(1100px) {
    top: -60px;
    right: 0;
  }

  @include media(450px) {
    top: 16px;
    right: 16px;
  }
}
</style>
