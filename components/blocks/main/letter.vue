<template>
  <div class="wrapper-main">
    <div class="letter-container">
      <div class="images-wrapper">
        <div class="images">
          <img
            class="convert"
            src="@/assets/images/spasibka/спасибка.png"
            alt=""
            draggable="false"
          />
          <img
            class="earth"
            src="@/assets/images/png/letterEarth.png"
            alt=""
            draggable="false"
          />
        </div>
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
  width: 100%;
}
.alien-wrapper {
  max-width: 675px;
}
.content {
  padding-top: 15.1vw;

  @include media(1500px) {
    padding-bottom: 150px;
  }

  @include media(1300px) {
    width: 100%;
  }

  @include media(1100px) {
    padding-top: 10.1vw;
  }

  @include media(1000px) {
    padding-top: 630px;
    padding-bottom: 0;
  }

  @include media(530px) {
    padding-top: 400px;
    padding-bottom: 0;
  }
}
.content > p {
  margin-left: 20px;

  @include media(744px) {
    margin-left: 10px;
  }
}
.images-wrapper {
  position: absolute;
  right: 0;
  width: 100%;
  height: 100%;
  overflow-x: clip;
}
.images {
  position: relative;
}

.earth {
  position: absolute;
  right: 0;
  transform: translateY(-100px);
  z-index: -11;

  @include media(1300px) {
    max-width: 700px;
    transform: translateY(0);
  }

  @include media(740px) {
    right: -20vw;
    transform: translateY(220px);
  }

  @include media(530px) {
    max-width: 505px;
    right: -20vw;
    transform: translateY(0);
  }
}

.convert {
  position: absolute;
  right: 0;
  transform: translateY(450px);
  z-index: -1;

  @include media(1300px) {
    max-width: 580px;
    transform: translateY(370px);
  }

  @include media(740px) {
    z-index: -13;
    transform: rotate(30deg);
  }

  @include media(530px) {
    display: none;
  }
}
</style>
