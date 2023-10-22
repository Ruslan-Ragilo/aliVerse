<script setup>
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";
import $api from "~/http";

const modules = [Navigation];

const prev = ref(null);
const next = ref(null);

const locations = [
  {
    option: "Онлайн",
    id: 4,
  },
  {
    option: "Москва",
    id: 1,
  },
  {
    option: "Нижний Новгород",
    id: 2,
  },
  {
    option: "Ташкент",
    id: 3,
  },
];

const products = ref([]);

const selectedLocation = ref(4);

const selectedProducts = computed(() => {
  return products.value?.filter(
    (pr) => String(pr?.location) === String(selectedLocation.value)
  );
});

onMounted(async () => {
  const res = await $api("api/product/show-all");
  products.value = res?.data?.products ?? [];
});
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-main wrap">
      <div class="wrapper-top">
        <ElementsCustomSelect
          :options="locations"
          @selected="(v) => (selectedLocation = v)"
        />
        <div class="wrapper-nav">
          <button ref="prev" class="nav prev"></button>
          <button ref="next" class="nav next"></button>
        </div>
      </div>
      <Swiper
        class="swiper"
        :modules="modules"
        slides-per-view="auto"
        :space-between="30"
        :navigation="{
          nextEl: next,
          prevEl: prev,
        }"
      >
        <SwiperSlide
          v-for="product in selectedProducts"
          :key="product"
          class="slide"
        >
          <ElementsSwiperSlide :product="product" />
        </SwiperSlide>
      </Swiper>
    </div>
    <Vue3Marquee
      class="run-string"
      :clone="true"
      :duration="5"
      :direction="'reverse'"
    >
      <div class="string">
        <ElementsText transform="upper" size="xl" themes="secondary">
          оформить заказ можно с 17 ноября
        </ElementsText>
      </div>
    </Vue3Marquee>
  </div>
</template>

<style scoped lang="scss">
.wrap {
  position: relative;
  padding-bottom: 20px;

  @include media(590px) {
    margin-top: 50px;
  }
}
.slide {
  width: 300px;
}
.run-string {
  margin-top: 48px;
}
.string {
  background-color: #ff2722;
  padding: 10px 0;
  display: flex;
  align-items: center;
  padding-left: 30px;
}
.wrapper {
  margin-top: 10vw;
  padding-top: 10vw;
  background: url("@/assets/images/swiper/bgSwiper.svg") no-repeat;
  background-size: cover;

  button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .wrapper-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .wrapper-nav {
      display: flex;
      gap: 20px;

      @include media(590px) {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  .swiper {
    margin-top: 60px;
  }

  .swiper-button-disabled {
    opacity: 0.4;
    cursor: auto;
  }
}
.nav.prev {
  width: 100px;
  height: 63px;
  background-image: url("~/assets/images/swiper/prev.png");
  background-repeat: no-repeat;
}
.nav.next {
  width: 100px;
  height: 63px;
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
}
</style>
