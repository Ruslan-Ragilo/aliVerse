<template>
  <div v-if="isModalOpen" class="wrapper-modal">
    <div class="modal" :style="modalStyle">
      <button class="close-button" @click="handleClose"></button>
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
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
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
.close-button {
  position: absolute;
  top: 41px;
  right: 41px;
  margin-left: auto;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #fff;
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.2));
  cursor: pointer;
  z-index: 3;

  @include media(1100px) {
    top: -60px;
    right: 0;
  }

  @include media(450px) {
    top: 16px;
    right: 16px;
  }
}

.close-button::before,
.close-button::after {
  content: "";
  display: block;
  width: 20px;
  height: 2px;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #333333;
}

.close-button::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.close-button::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}
</style>
