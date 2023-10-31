<template>
  <div v-if="clickedPhotoIndex !== null" class="swiper-modal">
    <swiper-container
      class="swiper-container"
      :navigation="swiperNavigationOptions"
      :initial-slide="clickedPhotoIndex"
    >
      <swiper-slide
        v-for="photo in photos"
        :key="photo"
        class="swiper-slide"
        @click.self="closeSwiperModal"
      >
        <img
          v-show="!isLoading"
          :src="photo"
          alt="Информация о менторе"
          class="photo"
          @load="setIsLoading(false)"
        />
        <ElementsSpinner v-if="isLoading" />
      </swiper-slide>
    </swiper-container>
    <swiper-button-prev class="swiper-button-prev">
      <img src="~/assets/images/svg/arrowLeft.svg" alt="Previous" />
    </swiper-button-prev>
    <swiper-button-next class="swiper-button-next">
      <img src="~/assets/images/svg/arrowRight.svg" alt="Next" />
    </swiper-button-next>
  </div>
</template>

<script setup lang="ts">
import { register } from "swiper/element/bundle";
import photo1 from "~/assets/images/png/topDir.png";

register();

const props = defineProps<{
  clickedPhotoIndex: number | null;
  onSwiperClose: () => void;
}>();

// TODO добавить карточки менторов в массив
const photos = [photo1, photo1, photo1, photo1, photo1, photo1];
const clickedPhotoIndex = computed(() => props.clickedPhotoIndex);

const closeSwiperModal = () => {
  props.onSwiperClose();
};

const swiperNavigationOptions = {
  prevEl: ".swiper-button-prev",
  nextEl: ".swiper-button-next",
};

const isLoading = ref(true);

const setIsLoading = (value: boolean) => {
  isLoading.value = value;
};
</script>

<style scoped lang="scss">
.swiper-modal {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 13;
}
.swiper-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.swiper-button-prev::after,
.swiper-button-next::after {
  content: none;
}
.swiper-button-prev,
.swiper-button-next {
  height: 50px;
}
.swiper-button-prev {
  left: 75px;

  @include media(900px) {
    left: 30px;
  }

  @include media(500px) {
    left: 10px;
    transform: scale(0.6);
  }
}
.swiper-button-next {
  right: 75px;

  @include media(900px) {
    right: 30px;
  }

  @include media(500px) {
    right: 10px;
    transform: scale(0.6);
  }
}
.swiper-button-prev img,
.swiper-button-next img {
  width: 100%;
  height: 100%;
}
</style>
