<template>
  <div class="wrapper-games-slider">
    <img
      class="portal"
      src="~/assets/images/png/games/portal.png"
      alt=""
      draggable="false"
    />
    <Swiper
      class="swiper"
      :modules="modules"
      slides-per-view="auto"
      :space-between="spaceBetweenSlides"
      :initial-slide="1"
      :navigation="{
        nextEl: next,
        prevEl: prev,
      }"
    >
      <SwiperSlide class="slide">
        <div class="left-game game">
          <BlocksGamesHint v-if="!isFactsAvailable">
            Откроется 16 ноября
          </BlocksGamesHint>
          <img
            class="game-image"
            src="~/assets/images/png/games/facts-game.png"
            alt="Сила знаний"
          />
          <ElementsPixelButton
            color="red"
            size="mini"
            :disabled="!isFactsAvailable"
            @click="openFactsModal"
          >
            Играть
          </ElementsPixelButton>
        </div>
      </SwiperSlide>
      <SwiperSlide class="slide">
        <div class="middle-game game">
          <BlocksGamesHint v-if="!isFallAvailable">
            Откроется 8 ноября
          </BlocksGamesHint>
          <img
            class="game-image"
            src="~/assets/images/png/games/fall-game.png"
            alt="Товаропад"
          />
          <ElementsPixelButton
            color="red"
            size="mini"
            :disabled="!isFallAvailable"
          >
            <a
              href="https://aliexpress-productfall.codenrock.com/"
              target="_blank"
            >
              Играть
            </a>
          </ElementsPixelButton>
        </div>
      </SwiperSlide>
      <SwiperSlide class="slide">
        <div class="right-game game">
          <BlocksGamesHint v-if="!isShadowsAvailable">
            Откроется 12 ноября
          </BlocksGamesHint>
          <img
            class="game-image"
            src="~/assets/images/png/games/shadows-game.png"
            alt="Тайны галактики"
          />
          <ElementsPixelButton
            color="red"
            size="mini"
            :disabled="!isShadowsAvailable"
            @click="openShadowsModal"
          >
            Играть
          </ElementsPixelButton>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  <div class="wrapper-nav">
    <button ref="prev" class="nav prev"></button>
    <button ref="next" class="nav next"></button>
  </div>
</template>

<script setup lang="ts">
import { Navigation } from "swiper/modules";
const modules = [Navigation];
const prev = ref(null);
const next = ref(null);

const factsStore = useFactsStore();
const shadowsStore = useShadowsStore();

const openFactsModal = () => {
  factsStore.openModal();
};

const openShadowsModal = () => {
  shadowsStore.openModal();
};

// TODO удалить код ниже и раскомментировать следующий!
const isFactsAvailable = ref(true);
const isFallAvailable = ref(true);
const isShadowsAvailable = ref(true);

/* const isFactsAvailable = ref(
  isToday(
    new Date("November 16 2023 07:59:59 GMT+03:00"),
    new Date("November 19 2023 23:59:59 GMT+03:00"),
  ),
);
const isFallAvailable = ref(
  isToday(
    new Date("November 08 2023 07:59:59 GMT+03:00"),
    new Date("November 19 2023 23:59:59 GMT+03:00"),
  ),
);
const isShadowsAvailable = ref(
  isToday(
    new Date("November 12 2023 07:59:59 GMT+03:00"),
    new Date("November 19 2023 23:59:59 GMT+03:00"),
  ),
); */

const spaceBetweenSlides = ref(30);

const updateSpaceBetweenSlides = () => {
  const windowWidth = window.innerWidth;
  spaceBetweenSlides.value = windowWidth > 500 ? 30 : 10;
};

onMounted(() => {
  updateSpaceBetweenSlides();
  window.addEventListener("resize", updateSpaceBetweenSlides);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateSpaceBetweenSlides);
});
</script>

<style lang="scss" scoped>
a {
  all: unset;
}
.wrapper-games-slider {
  width: 100%;
}
.game {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  @include media(500px) {
    width: 311px;
  }

  button {
    z-index: 3;
  }
}
.game-image {
  @include media(500px) {
    width: 311px;
  }
}

.portal {
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  @include media(600px) {
    top: 150px;
    height: 530px;
  }

  @include media(500px) {
    top: 100px;
    height: 530px;
  }
}
.swiper {
  width: 366px;
  overflow: visible;

  @include media(500px) {
    width: 311px;
  }
}
.wrapper-nav {
  position: relative;
  top: -70px;
  display: flex;
  gap: 20px;
  z-index: 3;
}
.slide:not(.swiper-slide-active) {
  opacity: 0.5;
  pointer-events: none;
}
.nav.prev,
.nav.next {
  width: 100px;
  height: 63px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}
.nav.prev {
  background-image: url("~/assets/images/swiper/prev.png");
  background-repeat: no-repeat;
}
.nav.next {
  background-image: url("~/assets/images/swiper/next.png");
  background-repeat: no-repeat;
}
.nav.prev:active:not(:disabled) {
  position: relative;
  top: 6px;
  background-image: url("~/assets/images/swiper/prev-active.png");
}
.nav.next:active:not(:disabled) {
  position: relative;
  top: 6px;
  background-image: url("~/assets/images/swiper/next-active.png");
}
.nav.next:disabled,
.nav.prev:disabled {
  opacity: 0.5;
  cursor: default;
}
</style>
