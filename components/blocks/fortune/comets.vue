<template>
  <img
    class="comet comet-1"
    src="~/assets/images/png/fortune/comet-1.png"
    alt=""
    draggable="false"
  />
  <img
    class="comet comet-2"
    src="~/assets/images/png/fortune/comet-2.png"
    alt=""
    draggable="false"
  />
  <img
    class="comet comet-3"
    src="~/assets/images/png/fortune/comet-3.png"
    alt=""
    draggable="false"
  />
  <img
    class="comet comet-4"
    src="~/assets/images/png/fortune/comet-4.png"
    alt=""
    draggable="false"
  />
  <img
    class="comet comet-5"
    src="~/assets/images/png/fortune/comet-5.png"
    alt=""
    draggable="false"
  />
  <img
    class="comet comet-6"
    src="~/assets/images/png/fortune/comet-6.png"
    alt=""
    draggable="false"
  />
  <img
    class="comet comet-7"
    src="~/assets/images/png/fortune/comet-7.png"
    alt=""
    draggable="false"
  />
  <img
    class="comet comet-8"
    src="~/assets/images/png/fortune/comet-8.png"
    alt=""
    draggable="false"
  />
  <img
    class="comet comet-9"
    src="~/assets/images/png/fortune/comet-9.png"
    alt=""
    draggable="false"
  />
</template>

<style scoped lang="scss">
.comet {
  position: absolute;

  @include media(1000px) {
    transform: scale(0.6);
  }

  @include media(600px) {
    transform: scale(0.6);
  }
}

.comet-1 {
  @include media(600px) {
    top: -30px;
    left: -30px;
  }
}

.comet-2 {
  top: -40px;
  right: -20px;

  @include media(600px) {
    top: -70px;
    right: -50px;
  }
}

.comet-3 {
  bottom: 15px;
  right: -15px;

  @include media(600px) {
    bottom: -20px;
    right: -50px;
  }
}

.comet-4 {
  bottom: -190px;
  left: 240px;
}

.comet-5 {
  bottom: -60px;
  right: 0;

  @include media(600px) {
    bottom: -45px;
    right: 10px;
  }
}

.comet-6 {
  bottom: 20px;
  left: 20px;

  @include media(600px) {
    bottom: 20px;
    left: -40px;
  }
}

.comet-7 {
  top: -115px;
  left: -220px;

  @include media(600px) {
    top: -115px;
    left: -220px;
  }
}

.comet-8 {
  bottom: -100px;
  left: -400px;

  @include media(600px) {
    bottom: -100px;
    left: -400px;
  }
}

.comet-9 {
  top: -90px;
  left: 230px;

  @include media(600px) {
    top: -90px;
    left: 230px;
  }
}
</style>
