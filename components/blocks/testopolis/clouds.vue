<template>
  <img
    class="cloud-left"
    src="~/assets/images/png/testopolis/cloud.png"
    alt=""
  />
  <img
    class="cloud-center"
    src="~/assets/images/png/testopolis/cloudCenter.png"
    alt=""
  />
  <img
    class="cloud-bottom"
    src="~/assets/images/png/testopolis/cloudBottom.png"
    alt=""
  />
</template>

<style scoped lang="scss">
.cloud-left {
  position: absolute;
  top: -40px;
  left: -225px;

  @include media(800px) {
    top: 23%;
    left: -200px;
  }
}

.cloud-center {
  position: absolute;
  top: 30%;
  right: 0;

  @include media(1300px) {
    top: unset;
    bottom: 20%;
  }

  @include media(500px) {
    top: unset;
    bottom: 10%;
  }
}

.cloud-bottom {
  position: absolute;
  bottom: 0;
  left: 15%;

  @include media(500px) {
    display: none;
  }
}
</style>
