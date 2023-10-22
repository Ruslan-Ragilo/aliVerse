<script setup>
const authStore = useAuth();
const urlImage = ref("svg/iconProfile/defaultAvatar.svg");
const indexImage = ref(null);
const isValidFrom = ref(false);
const isShow = ref(false);
const isReadyData = false;

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
      <NuxtLink
        v-if="!authStore.getRegisterSuccess"
        class="btnReg"
        to="/auth/registration"
      >
        <ElementsPixelButton
          class-text="btn-registraion"
          :disabled="!isValidFrom"
          size="large"
          color="red"
          :is-ready-data="isReadyData"
          @click="authStore.setIsReadyData(true)"
        >
          зарегистрироваться
        </ElementsPixelButton>
      </NuxtLink>
    </div>
    <ElementsText
      v-if="authStore.getRegisterSuccess"
      themes="secondary"
      class="textAfterReg"
      >asdasdasdassss sssssssssss ssssssssssssssss</ElementsText
    >
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
  margin-top: 50px;
  text-align: center;
}
.btnReg {
  margin-top: 10%;
  display: flex;
  justify-content: center;
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
</style>
