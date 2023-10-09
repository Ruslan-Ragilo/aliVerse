<script setup>
const urlImage = ref("svg/iconProfile/defaultAvatar.svg");
const indexImage = ref(null);

const setActiveImage = (index, urlImg) => {
  indexImage.value = index;
  setUrlImage(urlImg);
};

const setUrlImage = (url) => {
  urlImage.value = url;
};
</script>

<template>
  <div class="wrapperRegistration">
    <div class="wrapperImage">
      <img
        v-for="(item, index) of 20"
        :key="item"
        :src="getImageUrl(`svg/iconProfile/${item}.svg`)"
        :alt="item"
        :class="{ active: indexImage !== index && indexImage !== null }"
        @click="setActiveImage(index, `svg/iconProfile/${item}.svg`)"
      />
    </div>
    <div>
      <ElementsCartProfile :urlImg="urlImage" />
      <ElementsButtons text="зарегистрироваться" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapperRegistration {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  height: 98vh;

  @include media(1200px) {
    flex-direction: column-reverse;
    gap: 40px;
  }

  .wrapperImage {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    gap: 12px;

    img {
      width: 8vw;
      max-width: 140px;
      cursor: pointer;
      opacity: 1;

      &.active {
        opacity: 0.5;
      }

      @include media(1200px) {
        width: 100%;
      }
    }
  }
}
</style>
