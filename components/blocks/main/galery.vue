<template>
  <div class="wrapper-galery wrapper-main">
    <div class="bg-wrapper">
      <img ref="img" class="bg" src="@/assets/images/png/bgGalery.png" alt="" />
    </div>
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
          <ElementsPixelButton
            :is-main-page="true"
            color="red"
            size="large"
            class="alien-button"
            @click="navigateTo('/gallery')"
          >
            смотреть фото
          </ElementsPixelButton>
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
    margin-top: -100px;
  }
}
.bg-wrapper {
  position: absolute;
  left: 0px;
  z-index: -3;
  width: 60vw;
  overflow-x: clip;

  @include media(1200px) {
    width: 85%;
  }
  @include media(744px) {
    width: 100%;
  }
}
.bg {
  width: 100%;
  height: 100%;
  @include media(744px) {
    width: 600px;
  }
}

.content {
  display: flex;
  justify-content: flex-end;
  padding-top: 30vw;

  .wrapper-alien {
    @include media(1200px) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding-top: 500px;

      p {
        margin-right: 20px;
      }
    }
    @include media(744px) {
    }
  }
}
</style>
