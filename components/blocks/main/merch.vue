<template>
  <div class="letter-container">
    <img class="planet" src="@/assets/images/png/merch.png" alt="" />
    <div class="wrapper-main content">
      <div class="letter">
        <ElementsText
          class="heading-title"
          size="heading"
          transform="upper"
          themes="secondary"
          >Мерчный
          <br />
          путь</ElementsText
        >
        <ElementsMessageIcon class="alien-wrapper">
          <ElementsText transform="upper"
            >Ого! Ты только что стал свидетелем редкого космического явления —
            перед тобой Мерчный путь! Приглядись, это же долгожданные подарки,
            которые ты сможешь приобрести совсем скоро<br /><br />
            Помни: оформить заказ можно всего <span>1 раз</span>, а забрать с
            собой из Ali Verse можно только <span>три подарка</span>! Ежедневно
            зарабатывай Ali Coins и подходи к выбору мерча с умом</ElementsText
          >
        </ElementsMessageIcon>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: flex-end;
  margin-top: 20vw;
}
.letter {
  max-width: 600px;
  width: 100%;
  span {
    color: $red-secondary;
  }

  @include media(1200px) {
    margin-top: 60vw;
  }
}

.planet {
  position: absolute;
  left: 0;
  max-width: 80vw;
  z-index: -1;
}

.wrapper-top {
  display: grid;
  grid-template-columns: repeat(5, 240px);
  gap: 22px;
  margin-top: 80px;
}
</style>
