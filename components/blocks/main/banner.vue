<template>
  <img
    class="absolute planetGradient"
    src="@/assets/images/png/gradientPlanet.png"
    alt=""
  />
  <img
    class="absolute crafr"
    src="@/assets/images/png/craft.png"
    alt=""
    draggable="false"
  />
  <img
    class="absolute greenBall"
    src="@/assets/images/svg/greenBall.svg"
    alt=""
    draggable="false"
  />
  <img
    class="absolute earth"
    src="@/assets/images/png/earth.png"
    alt=""
    draggable="false"
  />
  <img
    class="absolute blueComet"
    src="@/assets/images/svg/blueComet.svg"
    alt=""
    draggable="false"
  />

  <img
    class="absolute blueComet"
    src="@/assets/images/svg/blueComet.svg"
    alt=""
    draggable="false"
  />
  <img
    class="absolute cloud"
    src="@/assets/images/svg/cloud.svg"
    alt=""
    draggable="false"
  />
  <div class="wrapper-frog absolute">
    <img
      class="fullCloud"
      src="@/assets/images/svg/fullCloud.svg"
      alt=""
      draggable="false"
    />
    <img
      class="frog"
      src="@/assets/images/svg/frog.svg"
      alt=""
      draggable="false"
    />
  </div>

  <div class="container">
    <img
      class="logo"
      src="@/assets/images/svg/logo.svg"
      alt=""
      draggable="false"
    />
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  padding-top: 15vw;

  @include media(500px) {
    padding-top: 30%;
  }
}
.logo {
  width: 35%;

  @include media(420px) {
    width: 50%;
  }
}

.planetGradient {
  top: 3%;
  left: 53%;

  @include media(1200px) {
    width: 8vw;
  }

  // @include media(740px) {
  //   width: 47px;
  // }
}

.earth {
  top: 32vw;
  left: 16%;
  width: 80px;

  @include media(1200px) {
    width: 8vw;
    left: 11%;
  }
}

.greenBall {
  right: 17%;
  top: 48vw;
  @include media(1200px) {
    width: 8vw;
  }
}

.crafr {
  top: 42vw;
  left: 15%;

  @include media(1200px) {
    width: 15vw;
    top: 90vw;
    left: 15%;
  }
}

.blueComet {
  top: 20vw;
  left: 18%;
  @include media(1200px) {
    width: 10vw;
  }
}

.cloud {
  left: 0;
  top: 18vw;

  @include media(1200px) {
    width: 20vw;
    top: 19vw;
  }
}

.wrapper-frog {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  right: 0;
  top: 10vw;

  @include media(1200px) {
    display: none;
  }

  .frog {
    width: 230px;
    position: relative;
    top: 40px;

    @include media(1200px) {
      width: 20vw;
      top: 3vw;
    }
  }
}

.fullCloud {
  @include media(1200px) {
    width: 50vw;
  }
}
</style>
