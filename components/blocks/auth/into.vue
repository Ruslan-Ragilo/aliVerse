<template>
  <div class="content">
    <img class="logo" src="~/assets/images/svg/logo.svg" alt="logo" />
    <ElementsText class="text" align="center" themes="secondary" size="s">
      Привет! <br />
      Готов отправиться в путешествие <br />
      по вселенной Ali Verse? <br /><br />
      Заполняй анкету регистрации, чтобы получить <br />
      космические права, и <br />
      отправляемся через 3… 2… 1!
    </ElementsText>
    <NuxtLink to="/auth/registration">
      <ElementsPixelButton class-text="btn-registraion" size="large" color="red"
        >зарегистрироваться</ElementsPixelButton
      >
    </NuxtLink>
    <NuxtLink class="loginBtn" to="/auth/login"
      ><ElementsText transform="upper" themes="secondary"
        >войти</ElementsText
      ></NuxtLink
    >
  </div>
</template>

<style scoped lang="scss">
.content {
  max-height: 80vh;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @include media(710px) {
    justify-content: center;
    gap: 20px;
    max-height: 100vw;

    @media (max-height: 700px) {
      max-height: 100vw;
    }
  }
}
.logo {
  @include media(886px) {
    width: 30%;
  }

  @media (max-height: 700px) {
    width: 20%;
  }
}
.text {
  flex-grow: 1;
  display: flex;
  align-items: center;
  @include media(710px) {
    font-size: 14px;
  }
}

.loginBtn {
  margin-top: 2vw;
  text-decoration: none;
}
</style>
