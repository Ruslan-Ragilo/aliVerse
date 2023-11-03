<template>
  <img
    class="absolute planetGradient"
    src="@/assets/images/png/gradientPlanet.png"
    alt=""
  />
  <img
    class="absolute craft"
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
  <div
    v-if="isWednesday"
    class="wrapper-frog absolute"
    @click="handleModalOpen"
  >
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
  <BlocksFrogModal />
</template>

<script setup lang="ts">
const store = useFrogStore();

// TODO удалить код ниже и раскомментировать следующий!
const isWednesday = ref(true);

/* const isWednesday = ref(
  isToday(
    new Date("November 08 2023 07:59:59 GMT+03:00"),
    new Date("November 08 2023 23:59:59 GMT+03:00"),
  ) ||
    isToday(
      new Date("November 15 2023 07:59:59 GMT+03:00"),
      new Date("November 15 2023 23:59:59 GMT+03:00"),
    ),
); */

const handleModalOpen = () => {
  store.openModal();
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  padding-top: 15vw;

  @include media(1200px) {
    margin-top: 100px;
  }

  @include media(500px) {
    margin-top: 30%;
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

  @include media(500px) {
    top: 120px;
    right: 20vw;
    left: auto;
  }
}

.earth {
  top: 32vw;
  left: 16%;
  width: 80px;

  @include media(1200px) {
    width: 8vw;
    left: 11%;
  }

  @include media(500px) {
    top: 350px;
  }
}

.greenBall {
  right: 17%;
  top: 48vw;

  @include media(1200px) {
    width: 8vw;
    right: 50px;
    top: 60vw;
  }

  @include media(500px) {
    right: 20px;
    top: 95vw;
  }
}

.craft {
  top: 42vw;
  left: 15%;

  @include media(1200px) {
    width: 15vw;
    top: 90vw;
    left: 15%;
  }

  @include media(500px) {
    width: 12vw;
    top: 150vw;
    left: 4%;
  }
}

.blueComet {
  top: 20vw;
  left: 18%;

  @include media(1200px) {
    width: 10vw;
  }

  @include media(500px) {
    top: 137vw;
    left: 24%;
    transform: rotate(155deg);
  }
}

.cloud {
  left: 0;
  top: 18vw;

  @include media(1200px) {
    width: 20vw;
    top: 19vw;
  }

  @include media(500px) {
    width: 35vw;
    top: 110vw;
  }
}

.wrapper-frog {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  right: 0;
  top: 10vw;
  z-index: 2;
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
