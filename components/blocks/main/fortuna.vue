<template>
  <div class="letter-container">
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
        </ElementsMessageIcon>
      </div>
      <div class="planets-wrapper">
        <BlocksFortuneComets />
        <BlocksFortuneWheel />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  padding-top: 20.1vw;
  padding-right: 15px;
  display: flex;
  justify-content: space-between;
  gap: 30px;

  @include media(1000px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 200px;
  }
}
.planets-wrapper {
  position: relative;
}
.letter {
  max-width: 600px;
  width: 100%;
}

.alien-wrapper {
  p {
    @include media(744px) {
      text-align: right;
    }
  }
}
</style>
