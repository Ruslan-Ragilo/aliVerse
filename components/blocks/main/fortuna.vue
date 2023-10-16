<template>
  <div class="letter-container">
    <img class="planet" src="@/assets/images/svg/fortuna.svg" alt="" />
    <div class="wrapper-main content">
      <div class="letter">
        <ElementsText
          class="heading-title"
          size="heading"
          transform="upper"
          themes="secondary"
          >Планета
          <br />
          фортунус</ElementsText
        >
        <ElementsMessageIcon class="alien-wrapper">
          <ElementsText transform="upper"
            >Так-так, кто это нарушает скоростной режим? Тормози! Лучше
            проверим, насколько ты везунчик — мы на планете «Фортунус»! У тебя
            есть 1 попытка в день, чтобы испытать судьбу — крути колесо и
            получай подарки</ElementsText
          >
          <ElementsPixelButton
            :is-main-page="true"
            color="red"
            size="large"
            class="alien-button"
            @click="navigateTo('/gallery')"
          >
            крутануть планету
          </ElementsPixelButton>
        </ElementsMessageIcon>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  padding-top: 20.1vw;
  display: flex;
}
.letter {
  max-width: 600px;
  width: 100%;

  @include media(1200px) {
    margin-top: 55vw;
  }
  @include media(744px) {
    margin-top: 83vw;
  }
}

.alien-wrapper {
  p {
    @include media(744px) {
      text-align: right;
    }
  }
}

.planet {
  position: absolute;
  right: 0;
  width: 65vw;
  z-index: -1;

  @include media(1200px) {
    width: 100vw;
  }
}
</style>
