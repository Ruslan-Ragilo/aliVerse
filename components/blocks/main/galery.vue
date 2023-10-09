<template>
  <div class="wrapper-galery wrapper-main">
    <img ref="img" class="bg" src="@/assets/images/png/bgGalery.png" alt="" />
    <div class="content">
      <div class="wrapper-alien">
        <ElementsText
          class="heading-title"
          size="heading"
          transform="upper"
          themes="secondary"
          >Фотоальбом</ElementsText
        >
        <ElementsMessageIcon class="alien-galery alien-wrapper">
          <ElementsText transform="upper"
            >Даже не верится, что с прихода AliExpress в Россию прошло уже 13
            лет… Сколько событий произошло за эти годы: запуск ____, открытие
            склада в Чехове, масштабные рекламные кампании, Ныряем в океан
            ностальгии! Открывай фотоальбом, вспоминай самые яркие события и не
            сдерживай эмоций — мы никому не расскажем об этих
            слезах</ElementsText
          >
        </ElementsMessageIcon>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper-galery {
  // position: relative;
  margin-top: -200px;

  @include media(1200px) {
    margin-top: -130px;
  }
}
.bg {
  position: absolute;
  left: 0px;
  z-index: -3;
  width: 50vw;
  @include media(1200px) {
    width: 752px;
  }
  @include media(744px) {
    width: 100%;
  }
}

.content {
  display: flex;
  justify-content: flex-end;
  padding-top: 20vw;

  .wrapper-alien {
    @include media(1200px) {
      margin-top: 36pc;
    }
    @include media(744px) {
      margin-top: 80vw;
    }
  }
}
</style>
