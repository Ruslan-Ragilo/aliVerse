<template>
  <div class="letter-container">
    <img class="planet" src="@/assets/images/png/mentorPlanet.png" alt="" />
    <div class="wrapper-main content">
      <div>
        <ElementsText
          class="heading"
          size="heading"
          transform="upper"
          themes="secondary"
          >Планета
          <br />
          менторий</ElementsText
        >
        <ElementsMessageIcon class="letter">
          <ElementsText transform="upper"
            >Чувствуешь, как твоё тело наполняется вдохновением и мотивацией?
            Да, без этого на планете «Менторий» не обойтись. <br /><br />В
            Ментории мы собрали топовые советы от топов AliExpress! Здесь ты
            узнаешь, как поддерживать эффективность, соблюдать work-life balance
            и даже ___! Листай карточки с инсайтами от наших руководителей и
            заряжайся!</ElementsText
          >
        </ElementsMessageIcon>
      </div>
    </div>
    <div class="wrapper-main wrapper-top">
      <div v-for="item in 3" :key="item" class="wrapper-card">
        <img src="@/assets/images/png/topDir.png" alt="" />
        <div class="tooltip">
          <ElementsText align="center" transform="upper"
            >Александр <br />
            епифанов</ElementsText
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  padding-top: 20.1vw;
  display: flex;
  justify-content: flex-end;
}
.letter {
  max-width: 600px;
  width: 100%;
}

.planet {
  position: absolute;
  left: 0;
  max-width: 80vw;
}

.wrapper-top {
  display: grid;
  grid-template-columns: repeat(5, 240px);
  gap: 22px;
  margin-top: 80px;
}

.wrapper-card {
  border: 5px solid $white;
  background-image: url("~/assets/images/svg/bgMain.svg");
  background-size: cover;
  background-position: center 10%;
  padding-top: 10px;
  position: relative;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
  }

  .tooltip {
    width: 170px;
    height: 62px;
    border: 2px solid #c0a76b;
    position: absolute;
    background-color: #fff;
    bottom: -31px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
