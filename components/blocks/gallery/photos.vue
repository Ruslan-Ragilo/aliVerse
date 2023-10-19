<template>
  <div class="wrapper-photos">
    <img
      v-for="(photoSrc, index) in photos"
      :key="photoSrc"
      class="photo"
      :src="photoSrc"
      alt="photo"
      draggable="false"
      @click="handleClick(index)"
    />
  </div>
  <BlocksGallerySlider
    :photos="photos"
    :clicked-photo-index="clickedPhotoIndex"
    :on-swiper-close="onSwiperClose"
  />
</template>

<script setup lang="ts">
import photo1 from "~/assets/images/png/gallery/609.png";
import photo2 from "~/assets/images/png/gallery/608.png";
import photo3 from "~/assets/images/png/gallery/610.png";
import photo4 from "~/assets/images/png/gallery/589.png";
import photo5 from "~/assets/images/png/gallery/591.png";
import photo6 from "~/assets/images/png/gallery/592.png";
import photo7 from "~/assets/images/png/gallery/593.png";
import photo8 from "~/assets/images/png/gallery/594.png";
import photo9 from "~/assets/images/png/gallery/595.png";
import photo10 from "~/assets/images/png/gallery/596.png";
import photo11 from "~/assets/images/png/gallery/597.png";
import photo12 from "~/assets/images/png/gallery/598.png";
import photo13 from "~/assets/images/png/gallery/599.png";
import photo14 from "~/assets/images/png/gallery/600.png";
import photo15 from "~/assets/images/png/gallery/601.png";
import photo16 from "~/assets/images/png/gallery/602.png";
import photo17 from "~/assets/images/png/gallery/603.png";
import photo18 from "~/assets/images/png/gallery/604.png";
import photo19 from "~/assets/images/png/gallery/605.png";
import photo20 from "~/assets/images/png/gallery/606.png";
import photo21 from "~/assets/images/png/gallery/607.png";

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  photo18,
  photo19,
  photo20,
  photo21,
];

const clickedPhotoIndex = ref<number | null>(null);

const handleClick = (index: number) => {
  clickedPhotoIndex.value = index;
};

const onSwiperClose = () => {
  clickedPhotoIndex.value = null;
};
</script>

<style scoped lang="scss">
.wrapper-photos {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  padding: 75px;

  @include media(1100px) {
    padding: 30px;
  }

  @include media(1000px) {
    gap: 16px;
  }
}

.photo {
  width: 410px;
  cursor: pointer;

  @include media(1100px) {
    width: 330px;
  }
}
</style>
