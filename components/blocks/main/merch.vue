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
  margin-top: 10vw;
}
.letter {
  max-width: 675px;
  position: static;

  span {
    color: $red-secondary;
  }

  @include media(1200px) {
    margin-top: 60vw;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}
.letter > p {
  margin-right: 20px;

  @include media(744px) {
    margin-right: 10px;
  }
}
.planet {
  position: absolute;
  left: 0;
  width: 55vw;
  max-width: 900px;
  transform: translateY(-10vw);
  z-index: -1;

  @include media(1200px) {
    max-width: 80vw;
    width: auto;
    transform: none;
  }
}

.wrapper-top {
  display: grid;
  grid-template-columns: repeat(5, 240px);
  gap: 22px;
  margin-top: 80px;
}
</style>
