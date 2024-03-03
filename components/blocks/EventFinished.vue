<script setup lang="ts"></script>

<template>
  <div class="page-wrapper">
    <img
      class="bg"
      src="@/assets/images/png/purple-rays.png"
      alt=""
      draggable="false"
    />
    <img
      class="planet-1"
      src="@/assets/images/png/gradientPlanet.png"
      alt=""
      draggable="false"
    />
    <img
      class="planet-2"
      src="@/assets/images/png/blue-planet.png"
      alt=""
      draggable="false"
    />
    <img
      class="logo"
      src="~/assets/images/svg/logo.svg"
      alt="logo"
      draggable="false"
    />
    <div class="message-wrapper">
      <div class="message">
        <ElementsText size="m" transform="upper" align="center">
          Спасибо, что были с нами!<br />
          До новых встреч
        </ElementsText>
      </div>
      <img
        class="alien"
        src="@/assets/images/svg/alien.svg"
        alt=""
        draggable="false"
      />
      <div class="hearts-wrapper">
        <img
          class="heart-1"
          src="@/assets/images/png/heart.png"
          alt=""
          draggable="false"
        />
        <img
          class="heart-2"
          src="@/assets/images/png/heart.png"
          alt=""
          draggable="false"
        />
        <img
          class="heart-3"
          src="@/assets/images/png/heart.png"
          alt=""
          draggable="false"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
  overflow: hidden;

  @media screen and (max-height: 720px) {
    gap: 30px;
  }
}
.planet-1 {
  position: absolute;
  top: 20%;
  left: -20px;

  @include media(1100px) {
    width: 100px;
  }

  @include media(500px) {
    top: 5%;
    width: 70px;
  }
}
.planet-2 {
  position: absolute;
  top: 10%;
  right: 100px;

  @include media(700px) {
    right: 30px;
  }

  @include media(500px) {
    width: 30px;
  }
}
.bg {
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: -1;

  @include media(700px) {
    width: 140%;
  }
}
.logo {
  @include media(886px) {
    width: 300px;
  }

  @include media(550px) {
    width: 200px;
  }

  @media screen and (max-height: 720px) {
    width: 200px;
  }
}
.message-wrapper {
  position: relative;

  @media screen and (max-height: 720px) {
    transform: scale(0.8);
  }
}
.message {
  margin: 0 10px;
  background-color: #fff;
  border: 7px solid #000;
  padding: 30px 40px;

  @include media(700px) {
    padding: 20px 30px;
  }

  @include media(550px) {
    padding: 10px;
  }

  p {
    @include media(1000px) {
      font-size: 18px;
    }

    @include media(700px) {
      font-size: 14px;
    }
  }
}
.alien {
  width: 400px;
  transform: translate(87%, -30%);

  @include media(1000px) {
    width: 300px;
    transform: translate(84%, -30%);
  }

  @include media(700px) {
    width: 200px;
    transform: translate(100%, -33%);
  }

  @include media(550px) {
    width: 200px;
    transform: translate(26%, -10%);
  }
}
.hearts-wrapper {
  position: relative;
  transform: translate(0, -415px);

  @include media(1000px) {
    transform: translate(9px, -348px) scale(0.8);
  }

  @include media(700px) {
    transform: translate(22px, -248px) scale(0.7);
  }

  @include media(550px) {
    transform: translate(20px, -248px) scale(0.6);
  }
}
.heart-1 {
  position: absolute;
  top: 0px;
  right: -170px;
}
.heart-2 {
  position: absolute;
  transform: rotate(-26deg) scale(0.7);
  top: -70px;
  right: -75px;
}
.heart-3 {
  position: absolute;
  transform: scale(0.55) rotate(10deg);
  top: -100px;
  right: -160px;
}
</style>
