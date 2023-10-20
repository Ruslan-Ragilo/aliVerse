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
        <ElementsSpinner v-if="!isLoaded" />
        <img
          :style="{ opacity: isLoaded ? 1 : 0 }"
          :src="photo"
          alt=""
          class="photo"
          @load="load"
        />
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
register();

const props = defineProps<{
  clickedPhotoIndex: number | null;
  photos: string[];
  onSwiperClose: () => void;
}>();

const { photos, onSwiperClose } = props;
const clickedPhotoIndex = computed(() => props.clickedPhotoIndex);

const isLoaded = ref(false);
const load = () => {
  isLoaded.value = true;
};

const closeSwiperModal = () => {
  onSwiperClose();
};

const swiperNavigationOptions = {
  prevEl: ".swiper-button-prev",
  nextEl: ".swiper-button-next",
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
  z-index: 2;
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
.photo {
  width: 100%;
  max-width: 70vw;
  max-height: 80vh;
  object-fit: cover;
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
}
.swiper-button-next {
  right: 75px;

  @include media(900px) {
    right: 30px;
  }
}
.swiper-button-prev img,
.swiper-button-next img {
  width: 100%;
  height: 100%;
}
</style>
