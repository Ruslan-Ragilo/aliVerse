<script setup>
const urlImage = ref("svg/iconProfile/defaultAvatar.svg");
const indexImage = ref(null);
const isValidFrom = ref(false);
const isShow = ref(false);

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
  <div class="wrapperRegistration">
    <img
      @click="isShow = false"
      :class="['close', { show: isShow }]"
      src="@/assets/images/svg/close.svg"
      alt=""
    />
    <div :class="['wrapperImage', { active: isShow }]">
      <img
        v-for="(item, index) of 20"
        :key="item"
        :src="getImageUrl(`svg/iconProfile/${item}.svg`)"
        :alt="item"
        :class="{ active: indexImage !== index && indexImage !== null }"
        @click="setActiveImage(index, `svg/iconProfile/${item}.svg`)"
      />
    </div>
    <div :class="['wrapperProfile', { none: isShow }]">
      <ElementsCartProfile
        :data-form="dataForm"
        :url-img="urlImage"
        @handle-is-valid="handleIsValid"
        @handle-is-show="handleIsShowAvatars"
      />

      <ElementsButtonRegistrationDisabled v-if="!isValidFrom" class="btnReg" />
      <ElementsButtonRegistration v-else class="btn btnReg" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.btnReg {
  margin-top: 40px;
  width: 100%;
}

.wrapperProfile {
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;

  @include media(1210px) {
    &.none {
      display: none;
    }
  }
}
.wrapperRegistration {
  padding: 0 20px 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  height: 98vh;

  .close {
    display: none;
    cursor: pointer;
    width: 20%;
    max-width: 100px;
    @include media(1210px) {
      position: absolute;
      top: -10px;
      right: -10px;

      &.show {
        display: block;
      }
    }
  }

  @include media(1210px) {
    justify-content: center;
    padding: 0 20px;
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

    @include media(1210px) {
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

      @include media(1210px) {
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
