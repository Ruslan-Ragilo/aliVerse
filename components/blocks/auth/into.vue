<template>
  <div class="content">
    <img class="logo" src="~/assets/images/svg/logo.svg" alt="logo" />
    <ElementsText class-name="text" align="center" themes="secondary" size="s">
      Привет! <br />
      Готов отправиться в путешествие <br />
      по вселенной Ali Verse? <br /><br />
      Заполняй анкету регистрации, чтобы получить <br />
      космические права, и <br />
      отправляемся через 3… 2… 1!
    </ElementsText>
    <NuxtLink to="/auth/into/registration">
      <ElementsButtonRegistration class="btn btnInto" />
    </NuxtLink>
    <NuxtLink to="/auth/login"
      ><ElementsText transform="upper" themes="secondary"
        >войти</ElementsText
      ></NuxtLink
    >
  </div>
</template>

<style scoped lang="scss">
.btnInto {
  max-width: 430px;
}
.content {
  max-height: 700px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @include media(710px) {
    justify-content: center;
    gap: 20px;
  }
}
.logo {
  @include media(886px) {
    width: 60%;
  }

  @include media(710px) {
    margin-bottom: 110px;
  }

  @include media(600px) {
    width: 210px;
  }

  .text {
    @include media(710px) {
      font-size: 3vw;
    }
  }
}
</style>
