<template>
  <div class="letter-container">
    <img class="planet" src="@/assets/images/svg/fortuna.svg" alt="" />
    <div class="wrapper-main content">
      <div>
        <ElementsText
          class="heading"
          size="heading"
          transform="upper"
          themes="secondary"
          >Планета
          <br />
          фортунус</ElementsText
        >
        <ElementsMessageIcon class="letter">
          <ElementsText transform="upper"
            >Так-так, кто это нарушает скоростной режим? Тормози! Лучше
            проверим, насколько ты везунчик — мы на планете «Фортунус»! У тебя
            есть 1 попытка в день, чтобы испытать судьбу — крути колесо и
            получай подарки</ElementsText
          >
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
}

.planet {
  position: absolute;
  right: 0;
  width: 50vw;
}
</style>
