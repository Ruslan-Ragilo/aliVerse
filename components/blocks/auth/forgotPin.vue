<script setup>
const router = useRouter();
</script>
<template>
  <div class="content">
    <img class="logo" src="~/assets/images/svg/logo.svg" alt="logo" />
    <ElementsText class="text" align="center" themes="secondary" size="s">
      Забыл pin код? не проблема! введи свой email, и мы отправим новый pin на
      твою почту
    </ElementsText>
    <form action="">
      <input type="email" class="email" placeholder="ТВОЙ E-MAIL" />
    </form>
    <ElementsPixelButton class-text="btn-registraion" size="large" color="red"
      >Отправить pin код</ElementsPixelButton
    >
    <ElementsText
      class="back"
      transform="upper"
      themes="secondary"
      @click="router.back()"
      >вернуться назад</ElementsText
    >
  </div>
</template>
.wrapper { display: flex; gap: 20px; .input-pin { width: 60px; caret-color:
transparent; -moz-appearance: textfield; padding: 18px 8.9px; }
.input-pin::-webkit-outer-spin-button, .input-pin::-webkit-inner-spin-button {
-webkit-appearance: none; } .sub-text { text-transform: uppercase; color:
#cca09f; } }

<style scoped lang="scss">
.back {
  margin-top: 30px;
  cursor: pointer;
}
form {
  margin-bottom: 40px;
}
input {
  border: 4px solid $red-primary;
  text-align: center;
  font-size: 20px;
  font-family: $font-family-main;
  height: 60px;
  background: $white;
  outline: none;
  color: #710f0d;
  &.active::placeholder {
    color: $red-primary;
  }
}
.btnInto {
  max-width: 430px;
}
.content {
  max-height: 700px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @include media(710px) {
    justify-content: center;
    gap: 20px;
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
  max-width: 480px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  @include media(710px) {
    font-size: 14px;
  }
}
</style>
