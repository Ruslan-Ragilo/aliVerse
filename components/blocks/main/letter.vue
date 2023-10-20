<template>
  <div class="wrapper-main">
    <div class="letter-container">
      <div class="images">
        <img
          class="convert"
          src="@/assets/images/svg/letterConvert.png"
          alt=""
        />
        <img class="eath" src="@/assets/images/svg/letterEath.svg" alt="" />
      </div>
      <div class="content">
        <ElementsText
          class="heading-title"
          size="heading"
          transform="upper"
          themes="secondary"
          >Планета <br />
          спасибка</ElementsText
        >
        <ElementsMessageIcon class="alien-wrapper">
          <ElementsText transform="upper"
            >Как часто ты благодаришь коллег за работу над общим проектом,
            помощь в трудной ситуации, совместную встречу или просто за то, что
            они у тебя есть? <br /><br />
            Сейчас самое время это сделать! Заполняй форму и отправляй спасибку
            любимым коллегам — обещаем, она заставит их
            улыбнуться!</ElementsText
          >
          <ElementsPixelButton
            color="purple"
            :is-main-page="true"
            size="large"
            class="alien-button"
            @click="handleModalOpen"
          >
            Написать спасибку
          </ElementsPixelButton>
        </ElementsMessageIcon>
        <BlocksThanksModal
          :is-modal-open="isModalOpen"
          :on-modal-close="handleModalClose"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isModalOpen = ref(false);

const handleModalOpen = () => {
  isModalOpen.value = true;
};

const handleModalClose = () => {
  isModalOpen.value = false;
};
</script>

<style lang="scss" scoped>
.letter-container {
  @include media(744px) {
    margin-top: 250px;
  }
}
.content {
  padding-top: 22.1vw;

  @include media(1000px) {
    padding-top: 76.1vw;
  }
}

.images {
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column-reverse;
  width: 62vw;

  @include media(1000px) {
    width: 100%;
  }

  .eath {
    position: relative;
    z-index: -11;
    @include media(744px) {
      right: -20vw;
    }
  }

  .convert {
    width: 47vw;
    position: absolute;
    right: 0;
    bottom: 8vw;
    z-index: -1;

    @include media(1000px) {
      width: 75%;
      bottom: 20vw;
    }

    @include media(744px) {
      z-index: -13;
      bottom: 69vw;
      left: -6vw;
      transform: rotate(30deg);
      width: 100%;
    }

    @include media(500px) {
      bottom: 74vw;
    }
  }
}
</style>
