<script setup lang="ts">
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";

const modules = [Navigation];
const prev = ref(null);
const next = ref(null);

const isModalOpen = ref(false);
const openMentorIndex = ref<number | null>(null);

const openModal = (index: number) => {
  isModalOpen.value = true;
  openMentorIndex.value = index;
};

const closeModal = () => {
  isModalOpen.value = false;
  openMentorIndex.value = null;
};
</script>

<template>
  <div class="letter-container">
    <div class="planet-wrapper">
      <img
        class="planet"
        src="@/assets/images/png/mentorPlanet.png"
        alt=""
        draggable="false"
      />
    </div>
    <div class="wrapper-main content">
      <div class="alien">
        <ElementsText
          class="heading-title"
          size="heading"
          transform="upper"
          themes="secondary"
          >Планета
          <br />
          менторий</ElementsText
        >
        <ElementsMessageIcon class="alien-wrapper">
          <ElementsText transform="upper">
            Чувствуешь, как твоё тело наполняется вдохновением и мотивацией? Да,
            без этого на планете «Менторий» не обойтись<br /><br />В Ментории мы
            собрали <span class="red">топовые</span> советы от
            <span class="red">топов</span> AliExpress! Ты узнаешь, как
            поддерживать эффективность, соблюдать work-life баланс и даже
            заглянешь внутрь корзины руководителей
          </ElementsText>
        </ElementsMessageIcon>
      </div>
    </div>
    <div class="wrapper-main wrapper-top">
      <Swiper
        class="swiper"
        :modules="modules"
        slides-per-view="auto"
        :space-between="20"
        :navigation="{
          nextEl: next,
          prevEl: prev,
        }"
      >
        <SwiperSlide v-for="(item, index) in 6" :key="item" class="slide">
          <BlocksMentorsMentorCard
            :mentor-index="index"
            :on-click="openModal"
          />
        </SwiperSlide>
        <div class="wrapper-nav">
          <button ref="prev" class="nav prev"></button>
          <button ref="next" class="nav next"></button>
        </div>
      </Swiper>
      <div class="mentors-desktop">
        <BlocksMentorsMentorCard
          v-for="(item, index) in 6"
          :key="item"
          :mentor-index="index"
          :on-click="openModal"
        />
      </div>
    </div>
  </div>
  <BlocksMentorsSlider
    :clicked-photo-index="openMentorIndex"
    :on-swiper-close="closeModal"
  />
</template>

<style lang="scss" scoped>
.mentors-desktop {
  display: flex;
  gap: 18px;

  @include media(1200px) {
    display: none;
  }
}
.content {
  padding-top: 20.1vw;
  display: flex;
  justify-content: flex-end;

  @include media(600px) {
    margin-top: 30.1vw;
  }
}

.alien > p {
  margin-right: 20px;

  @include media(744px) {
    margin-right: 10px;
  }
}
.alien {
  max-width: 675px;
  width: 100%;

  @include media(1200px) {
    margin-top: 35vw;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}

.planet-wrapper {
  position: absolute;
  left: 0;
  width: 70vw;
  z-index: -1;
  overflow-x: clip;

  @include media(1200px) {
    width: 100vw;
  }
}
.planet {
  width: 100%;
  max-width: 1400px;

  @include media(600px) {
    width: 140vw;
    transform: translate(-20vw, -30vw);
  }
}

.wrapper-top {
  gap: 22px;
  margin-top: 80px;
}
.swiper {
  display: none;

  @include media(1200px) {
    display: block;
  }
}
.slide {
  width: 200px;
  padding-bottom: 30px;
}
.wrapper-nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
}
.nav.prev {
  all: unset;
  cursor: pointer;
  width: 100px;
  height: 63px;
  background-image: url("~/assets/images/swiper/prev-red.png");
  background-repeat: no-repeat;
}
.nav.next {
  all: unset;
  cursor: pointer;
  width: 100px;
  height: 63px;
  background-image: url("~/assets/images/swiper/next-red.png");
  background-repeat: no-repeat;
}
.nav.prev:active:not(:disabled) {
  position: relative;
  top: 6px;
  background-image: url("~/assets/images/swiper/prev-red-active.png");
}
.nav.next:active:not(:disabled) {
  position: relative;
  top: 6px;
  background-image: url("~/assets/images/swiper/next-red-active.png");
}
.nav.next:disabled,
.nav.prev:disabled {
  opacity: 0.5;
}
.red {
  color: #ff2722;
}
</style>
