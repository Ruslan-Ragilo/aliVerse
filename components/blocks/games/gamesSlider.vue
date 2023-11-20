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
          <img
            class="game-image"
            src="~/assets/images/png/games/facts-game.png"
            alt="Сила знаний"
          />
          <ElementsPixelButton
            color="red"
            size="mini"
            :disabled="!isFactsAvailable"
            @click="handleFactsClick"
          >
            Играть
          </ElementsPixelButton>
        </div>
      </SwiperSlide>
      <SwiperSlide class="slide">
        <div class="middle-game game">
          <img
            class="game-image"
            src="~/assets/images/png/games/fall-game.png"
            alt="Товаропад"
          />
          <ElementsPixelButton
            color="red"
            size="mini"
            :disabled="!isFallAvailable"
            @click="handleFallClick"
          >
            Играть
          </ElementsPixelButton>
        </div>
      </SwiperSlide>
      <SwiperSlide class="slide">
        <div class="right-game game">
          <img
            class="game-image"
            src="~/assets/images/png/games/shadows-game.png"
            alt="Тайны галактики"
          />
          <ElementsPixelButton
            color="red"
            size="mini"
            :disabled="!isShadowsAvailable"
            @click="handleShadowsClick"
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

const fallStore = useFallStore();
const factsStore = useFactsStore();
const shadowsStore = useShadowsStore();

const isShadowsAvailable = ref(false);
const isFactsAvailable = ref(false);
const isFallAvailable = ref(false);

const openShadowsModal = () => {
  if (isShadowsAvailable.value) {
    shadowsStore.openModal();
  }
};
const openFactsModal = () => {
  if (isFactsAvailable.value) {
    factsStore.openModal();
  }
};
const openFallModal = () => {
  if (isFallAvailable.value) {
    fallStore.openModal();
  }
};

const handleShadowsClick = () => {
  if (isShadowsAvailable.value) {
    openShadowsModal();
  }
};
const handleFactsClick = () => {
  if (isFactsAvailable.value) {
    openFactsModal();
  }
};
const handleFallClick = () => {
  if (isFallAvailable.value) {
    openFallModal();
  }
};

onMounted(async () => {
  isShadowsAvailable.value = await isToday(
    "11/12/2023 07:59:59",
    "11/19/2023 23:59:59",
  );
  isFactsAvailable.value = await isToday(
    "11/16/2023 07:59:59",
    "11/19/2023 23:59:59",
  );
  isFallAvailable.value = await isToday(
    "11/08/2023 07:59:59",
    "11/19/2023 23:59:59",
  );
});

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
