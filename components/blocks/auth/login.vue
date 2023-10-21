<script setup>
const store = useAuth();
const inputPinData = ref([
  { name: 1, value: "" },
  { name: 2, value: "" },
  { name: 3, value: "" },
  { name: 4, value: "" },
]);

const emailValue = ref("");

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

const handleLogin = async () => {
  const pass = inputPinData.value.map((el) => el?.value).join("");
  const email = emailValue.value;
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (pass?.length === 4 && regex.test(email)) {
    await store.login(email, pass);
    if (store.isLoginSuccess) {
      navigateTo("/");
    }
  }
};
</script>
<template>
  <div class="content">
    <img class="logo" src="~/assets/images/svg/logo.svg" alt="logo" />
    <ElementsText class="text" align="center" themes="secondary" size="s">
      Рады снова приветствовать тебя в нашей вселенной, <br />Заполняй данные и
      погнали!
    </ElementsText>
    <form @submit.prevent="handleLogin">
      <input
        v-model="emailValue"
        pattern="/^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/"
        type="email"
        class="email"
        placeholder="ТВОЙ E-MAIL"
      />
      <div class="wrapper">
        <input
          v-for="(item, index) of inputPinData"
          :key="index"
          v-model="item.value"
          :name="item.name"
          :class="['input-pin', { active: isActive && item.name === 1 }]"
          placeholder="0"
          :disabled="index !== 0"
          maxlength="1"
          @keydown.delete="handlePin($event, index)"
          @input="handlePin($event, index)"
        />
      </div>
      <ElementsPixelButton type="submit" size="middle" color="red"
        >войти</ElementsPixelButton
      >
    </form>
    <div class="wrapperAurhLink">
      <NuxtLink to="/auth/registration">
        <ElementsText transform="upper" themes="secondary"
          >зарегистрироваться</ElementsText
        >
      </NuxtLink>
      <NuxtLink to="/auth/forgotPin"
        ><ElementsText transform="upper" class="lostPin"
          >забыл pin код</ElementsText
        ></NuxtLink
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapperAurhLink {
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: center;
}

a {
  margin-top: 20px;
  text-decoration: none;
  @include media(710px) {
    margin-top: 0;
  }
}
.lostPin {
  color: #676079;
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
.wrapper {
  display: flex;
  gap: 20px;

  .input-pin {
    width: 60px;
    caret-color: transparent;
    -moz-appearance: textfield;
    padding: 18px 8.9px;
  }

  .input-pin::-webkit-outer-spin-button,
  .input-pin::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .sub-text {
    text-transform: uppercase;
    color: #cca09f;
  }
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
    width: 30%;
  }
}
.text {
  max-width: 735px;
  margin-top: 50px;
  @include media(710px) {
    font-size: 14px;
  }
}
</style>
