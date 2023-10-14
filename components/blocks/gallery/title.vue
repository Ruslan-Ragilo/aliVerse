<template>
  <div class="wrapper-title">
    <div class="wrapper-alien">
      <ElementsAlienWithRays />
    </div>
    <ElementsText
      class="heading-title"
      size="heading"
      transform="upper"
      themes="secondary"
    >
      Фотоальбом
    </ElementsText>
  </div>
</template>

<style scoped lang="scss">
.wrapper-title {
  height: 500px;
  position: relative;
  top: -30%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 170px;

  @include media(1200px) {
    padding-right: 100px;
  }

  @include media(950px) {
    padding-right: 30px;
  }

  @include media(800px) {
    p {
      font-size: 36px;
    }
  }

  @include media(710px) {
    height: 120vw;
    flex-direction: column-reverse;
    justify-content: space-between;
    padding-right: 0;
    padding-bottom: 50px;

    p {
      font-size: 36px;
    }
  }

  @include media(500px) {
    p {
      font-size: 26px;
    }
  }
}

.wrapper-alien {
  position: absolute;
  left: -500px;
  z-index: -1;

  @include media(710px) {
    width: 200%;
    top: -40vw;
    left: -50%;
  }
}
</style>
