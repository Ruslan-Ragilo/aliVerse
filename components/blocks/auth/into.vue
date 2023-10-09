<template>
  <div class="wrapper">
    <div class="content">
      <img class="logo" src="~/assets/images/svg/logo.svg" alt="logo" />
      <ElementsText
        class-name="text"
        align="center"
        themes="secondary"
        size="s"
      >
        Привет! <br />
        Готов отправиться в путешествие <br />
        по вселенной Ali Verse? <br /><br />
        Заполняй анкету регистрации, чтобы получить <br />
        космические права, и <br />
        отправляемся через 3… 2… 1!
      </ElementsText>
      <NuxtLink to="/auth/registration"
        ><ElementsButtonRegedtrtion class="link"
      /></NuxtLink>
    </div>
    <img class="sun absolute" src="~/assets/images/svg/sun.svg" alt="sun" />
    <img
      class="stoneCenter absolute"
      src="~/assets/images/svg/centerStone.svg"
      alt="stones"
    />
    <img
      class="bluePlanet absolute"
      src="~/assets/images/svg/bluePlanet.svg"
      alt="planet"
    />
    <img
      class="stone absolute"
      src="~/assets/images/svg/stone.svg"
      alt="stone"
    />
    <img
      class="yellowPlanet absolute"
      src="~/assets/images/svg/yellowPlanet.svg"
      alt="planet"
    />
    <img
      class="gradientPlanet absolute"
      src="~/assets/images/svg/gradientPlanet.svg"
      alt="planet"
    />
    <img
      class="smalStone absolute"
      src="~/assets/images/svg/smalStone.svg"
      alt="stone"
    />
    <img
      class="bigStone absolute"
      src="~/assets/images/svg/bigStone.svg"
      alt="stone"
    />
    <img
      class="goldComet absolute"
      src="~/assets/images/svg/goldComet.svg"
      alt="comet"
    />
    <img
      class="blueComet absolute"
      src="~/assets/images/svg/blueComet.svg"
      alt="comet"
    />
  </div>
</template>

<style scoped lang="scss">
.link {
  width: 100%;
}
.content {
  max-height: 700px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @include media(710px) {
    justify-content: center;
    gap: 20px;
  }
}
.logo {
  @include media(886px) {
    width: 60%;
  }

  @include media(710px) {
    margin-bottom: 110px;
  }

  @include media(600px) {
    width: 210px;
  }

  .text {
    @include media(710px) {
      font-size: 3vw;
    }
  }
}
.wrapper {
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px;

  .absolute {
    position: absolute;
    z-index: -1;
  }

  .sun {
    left: -30px;
    top: 4.9%;
    // width: 22%;
    height: auto;

    @include media(800px) {
      left: -20%;
    }

    @include media(710px) {
      width: 179px;
      left: -25%;
    }
  }

  .stoneCenter {
    left: 23%;
    top: 5%;
    // width: 8%;

    @include media(600px) {
      display: none;
    }
  }

  .bluePlanet {
    right: 20%;
    top: 10%;
    // width: 3.6%;

    @include media(600px) {
      top: 5%;
      right: 0;
    }
  }

  .stone {
    right: 10%;
    top: 35%;
    // width: 3.5%;
  }

  .yellowPlanet {
    top: 50%;
    // width: 7%;
    right: 15%;

    @include media(1374px) {
      top: 40%;
      right: 0%;
    }

    @include media(710px) {
      width: 60px;
      right: -8%;
    }

    // @media screen and (max-width: 1374px) {
    //   top: 30%;
    //   right: 30%;
    // }
  }

  .gradientPlanet {
    bottom: 15%;
    left: 16%;
    // width: 7%;

    @include media(1374px) {
      left: -40px;
      bottom: 5%;
    }
  }

  .smalStone {
    bottom: 10%;
    right: 17%;
    // width: 4%;
  }

  .bigStone {
    left: 3%;
    bottom: 21%;
    // width: 5%;

    @include media(800px) {
      bottom: -20px;
      left: 10%;
    }
  }

  .goldComet {
    left: 10%;
    top: 50%;
    // width: 5%;

    @include media(938px) {
      left: -40px;
    }
  }

  .blueComet {
    right: 5%;
    bottom: 20%;
    // width: 7%;

    @include media(886px) {
      bottom: 25%;
    }

    @include media(710px) {
      bottom: 5%;
    }
  }
}
</style>
