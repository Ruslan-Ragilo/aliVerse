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
    <div class="reg-button">
      <div v-if="!isAvailable" class="hint">
        <ElementsText
          themes="secondary"
          size="xs"
          transform="upper"
          align="center"
        >
          Ждем тебя с 8 ноября
        </ElementsText>
      </div>
      <NuxtLink to="/auth/registration">
        <ElementsPixelButton
          class-text="btn-registraion"
          :is-main-page="true"
          size="large"
          color="red"
          :disabled="!isAvailable"
        >
          зарегистрироваться
        </ElementsPixelButton>
      </NuxtLink>
    </div>
    <NuxtLink class="loginBtn" to="/auth/login"
      ><ElementsText transform="upper" themes="secondary"
        >войти</ElementsText
      ></NuxtLink
    >
  </div>
</template>

<script setup lang="ts">
const isAvailable = ref(
  await isToday("11/08/2023 07:59:59", "11/24/2023 23:59:59"),
);
</script>

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
    width: 300px;
  }

  @include media(500px) {
    width: 200px;
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
.reg-button {
  position: relative;
  margin-top: 50px;

  @include media(500px) {
    margin-top: 60px;
  }
}
.hint {
  width: 100%;
  position: absolute;
  top: -40px;
  font-size: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  z-index: 1;

  @include media(500px) {
    top: -70px;
    padding: 0 70px;
  }

  p {
    font-size: 20px;
  }
}
</style>
