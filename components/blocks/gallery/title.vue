<template>
  <div class="wrapper-title">
    <div class="wrapper-alien">
      <ElementsAlienWithRays />
    </div>
    <div class="title">
      <ElementsText
        class="heading-title"
        size="heading"
        transform="upper"
        themes="secondary"
      >
        Фотоальбом
      </ElementsText>
      <BlocksGalleryButton class-name="upper-button" />
    </div>
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

  @include media(1400px) {
    padding-right: 100px;
  }

  @include media(1200px) {
    padding-right: 30px;
  }

  @include media(1000px) {
    padding-right: 0;

    p {
      font-size: 36px;
    }
  }

  @include media(900px) {
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

  @include media(900px) {
    width: 200%;
    top: -40vw;
    left: -50%;
  }
}
.title {
  display: flex;
  flex-direction: column;
  align-items: center;

  @include media(500px) {
    transform: translateY(45px);
  }
}
</style>
