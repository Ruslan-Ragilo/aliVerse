<script setup>
const authStore = useAuth();
const urlImage = ref("svg/iconProfile/defaultAvatar.svg");
const indexImage = ref(null);
const isValidFrom = ref(false);
const isShow = ref(false);
const isReadyData = false;

// TODO добавить ссылку в пользовательское соглашение

const setActiveImage = (index, urlImg) => {
  indexImage.value = index;
  setUrlImage(urlImg);
};

const handleIsValid = (value) => {
  isValidFrom.value = value;
};

const handleIsShowAvatars = (value) => {
  isShow.value = value;
};

const setUrlImage = (url) => {
  urlImage.value = url;
};

const isAgreementChecked = ref(false);

const handleAgreementChange = (e) => {
  isAgreementChecked.value = e.target.checked;
};

onMounted(() => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer 4AhgSH4BNNUpvBIc");

  // const formdata = new FormData();
  // formdata.append("event_id", "3");
  // formdata.append("score", "1234");
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    // body: formdata,
    redirect: "follow",
  };

  fetch("https://api.aliverse.ru/user/event-limit/3", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
});
</script>

<template>
  <div
    :class="[
      'wrapperRegistration',
      { wrapperSecond: authStore.getRegisterSuccess },
    ]"
  >
    <img
      v-if="!authStore.getRegisterSuccess"
      :class="['close', { show: isShow }]"
      src="@/assets/images/svg/close.svg"
      alt=""
      @click="isShow = false"
    />
    <ElementsPixelButton
      v-if="!authStore.getRegisterSuccess"
      :class="['btnSave', { active: isShow }]"
      class-text="btn-registraion"
      size="large"
      color="red"
      :disabled="urlImage === 'svg/iconProfile/defaultAvatar.svg'"
      @click="isShow = false"
    >
      сохранить
    </ElementsPixelButton>
    <div
      v-if="!authStore.getRegisterSuccess"
      :class="['wrapperImage', { active: isShow }]"
    >
      <img
        v-for="(item, index) of 20"
        :key="item"
        :src="getImageUrl(`svg/iconProfile/${item}.svg`)"
        :alt="item"
        :class="{ active: indexImage !== index && indexImage !== null }"
        @click="setActiveImage(index, `svg/iconProfile/${item}.svg`)"
      />
    </div>

    <div
      :class="[
        'wrapperProfile',
        { none: isShow && !authStore.getRegisterSuccess },
        { wrapperRProfileSecond: authStore },
      ]"
    >
      <ElementsCartProfile
        :data-form="dataForm"
        :url-img="urlImage"
        @handle-is-valid="handleIsValid"
        @handle-is-show="handleIsShowAvatars"
      />
      <div v-if="!authStore.getRegisterSuccess" class="agreement">
        <div class="wrapper-сheckbox">
          <label class="container-checkbox">
            <input
              id="agreement"
              type="checkbox"
              name="location"
              @input="handleAgreementChange"
            />
            <span class="checkmark"></span>
          </label>
        </div>
        <label for="agreement">
          <ElementsText
            class="agreement-link-wrapper"
            size="xs"
            themes="secondary"
            transform="upper"
          >
            Принять
            <a class="agreement-link" href="#" target="_blank">
              пользовательское соглашение
            </a>
          </ElementsText>
        </label>
      </div>
      <NuxtLink
        v-if="!authStore.getRegisterSuccess"
        class="btnReg"
        to="/auth/registration"
      >
        <ElementsPixelButton
          class-text="btn-registraion"
          :disabled="!isValidFrom || !isAgreementChecked"
          size="large"
          color="red"
          :is-main-page="true"
          :is-ready-data="isReadyData"
          @click="authStore.setIsReadyData(true)"
        >
          зарегистрироваться
        </ElementsPixelButton>
      </NuxtLink>
      <ElementsText
        v-if="authStore.getRegisterSuccess"
        themes="secondary"
        class="textAfterReg"
      >
        Поздравляем, теперь у тебя есть космические права!<br />
        Пристёгивай ремень, педаль в пол и погнали! Нас ждёт увлекательное
        путешествие
      </ElementsText>
    </div>
  </div>
</template>

<style scoped lang="scss">
.btnSave {
  display: none;
  @include media(1266px) {
    &.active {
      display: block;
    }
  }
}

.textAfterReg {
  color: #fff;
  margin-top: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  max-width: 700px;
  min-height: 94px;

  @include media(400px) {
    margin-top: 30px;
    font-size: 12px;
  }
}
.btnReg {
  margin-top: 30px;
  display: flex;
  justify-content: center;

  @include media(400px) {
    margin-top: 10px;
  }
}

.wrapperProfile {
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  &.wrapperRProfileSecond {
    max-width: 100%;
    width: auto;
  }
  @include media(1266px) {
    &.none {
      display: none;
    }
  }
}
.wrapperRegistration {
  // padding: 0 20px 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  height: 98vh;

  &.wrapperSecond {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .close {
    display: none;
    cursor: pointer;
    width: 20%;
    max-width: 100px;
    @include media(1266px) {
      position: absolute;
      top: -10px;
      right: -10px;

      &.show {
        display: block;
      }
    }
  }

  @include media(1266px) {
    justify-content: center;
  }

  @include media(1200px) {
    flex-direction: column-reverse;
    gap: 40px;
  }

  .wrapperImage {
    display: flex;
    flex-wrap: wrap;
    gap: 11px;
    max-width: 600px;
    position: relative;

    @include media(1266px) {
      display: none;
      grid-template-columns: repeat(4, 1fr);
      gap: 5px;

      &.active {
        display: grid;
      }
    }

    img {
      width: 140px;
      height: 140px;
      cursor: pointer;
      opacity: 1;

      @include media(1266px) {
        width: 100%;
        height: auto;
      }

      &.active {
        opacity: 0.5;
      }
    }
  }
}
.agreement {
  margin-top: 40px;
  display: flex;
  gap: 40px;
  padding: 0 20px;

  @include media(400px) {
    margin-top: 30px;
  }
}
.agreement-link-wrapper {
  @include media(450px) {
    font-size: 12px;
  }
}
.agreement-link {
  color: #fff;
}
.wrapper-checkbox {
  width: 22px;
  height: 22px;
}

.container-checkbox {
  display: block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  visibility: hidden;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  background: url("@/assets/images/svg/borderCheckbox.png");
  background-size: contain;
}

/* Create the checkmark/indicator (hidden when not checked) */

/* Show the checkmark when checked */
.container-checkbox input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container-checkbox .checkmark:after {
  content: "";
  width: 100%;
  height: 100%;
  background: url("@/assets/images/svg/checkmark.png") no-repeat;
  background-size: cover;
}
</style>
