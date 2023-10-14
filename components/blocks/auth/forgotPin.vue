<script setup>
const router = useRouter();
const inputPinData = ref([
  { name: 1, value: "" },
  { name: 2, value: "" },
  { name: 3, value: "" },
  { name: 4, value: "" },
]);
const handlePin = (e, index) => {
  const valueInput = e.target.value;
  const inspectNumber = valueInput.replace(/[^\d.-]+/g, ""); // replace letters and symbol
  const currentInput = inputPinData.value[index];

  currentInput.value = inspectNumber;

  if (e.code === "Backspace" && index !== 0) {
    if (index === 3) {
      if (currentInput.value.length === 0) {
        e.target.previousSibling.disabled = false;
        e.target.disabled = true;
        e.target.previousSibling.focus();
      }
    } else {
      e.target.previousSibling.disabled = false;
      e.target.disabled = true;
      e.target.previousSibling.focus();
    }
  } else if (currentInput.value.length === 1 && index !== 3) {
    e.target.nextSibling.disabled = false;
    e.target.disabled = true;
    e.target.nextSibling.focus();
  } else {
    return null;
  }
};
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
input {
  border: 4px solid $red-primary;
  text-align: center;
  font-size: 20px;
  font-family: $font-family-main;
  height: 60px;
  background: $white;
  margin-top: 40px;
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
    width: 60%;
  }

  @include media(710px) {
    // margin-bottom: 110px;
  }

  @include media(600px) {
    width: 210px;
  }
}
.text {
  max-width: 480px;
  margin-top: 50px;
  @include media(710px) {
    font-size: 3vw;
  }
}
</style>
