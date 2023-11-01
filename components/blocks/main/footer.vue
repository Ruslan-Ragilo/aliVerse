<template>
  <footer>
    <div class="wrapper-main wrapper-footer">
      <div class="clouds-wrapper">
        <div class="clouds">
          <img
            class="prim"
            src="@/assets/images/png/cloudFooterLeft.png"
            alt=""
            draggable="false"
          />
          <img
            class="second"
            src="@/assets/images/png/cloudFooterRight.png"
            alt=""
            draggable="false"
          />
        </div>
      </div>
      <img class="logo" src="@/assets/images/png/logoFooter.png" alt="" />
      <ElementsText class="rights" size="xs" themes="secondary" align="center">
        © ООО «Алибаба.ком (РУ)». Все права защищены
      </ElementsText>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  padding-top: 150px;
}

.wrapper-footer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  @include media(700px) {
    height: 250px;
  }

  @include media(450px) {
    height: 200px;
  }
}

.clouds-wrapper {
  position: absolute;
  width: 100%;
  height: 300px;
}
.clouds {
  position: relative;
  overflow-x: clip;
  width: 100%;
  height: 100%;
}

.prim {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;

  @include media(1200px) {
    left: -50px;
  }

  @include media(700px) {
    height: 150px;
  }

  @include media(450px) {
    height: 100px;
  }
}

.second {
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;

  @include media(1200px) {
    right: -220px;
    top: -150px;
  }

  @include media(700px) {
    height: 150px;
    right: -150px;
  }

  @include media(450px) {
    height: 100px;
    right: -100px;
  }
}
.logo {
  position: static;
}
</style>
