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
    option: "Все товары",
    id: 0,
  },
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

const selectedLocation = ref(0);

const selectedProducts = computed(() => {
  if (selectedLocation.value > 0) {
    return products.value?.filter(
      (pr) => String(pr?.location) === String(selectedLocation.value),
    );
  } else {
    const uniqueNames = new Set();
    return products.value.filter((product) => {
      if (!uniqueNames.has(product.name)) {
        uniqueNames.add(product.name);
        return true;
      }
      return false;
    });
  }
});

onMounted(async () => {
  const res = await $api("api/product/show-all");
  products.value = res?.data?.products ?? [];
});
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-main wrap">
      <ElementsProductModal />
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
    <div class="string-wrapper">
      <img
        class="bubble-1"
        src="~/assets/images/png/bubble-1.png"
        alt=""
        draggable="false"
      />
      <img
        class="bubble-2"
        src="~/assets/images/png/bubble-2.png"
        alt=""
        draggable="false"
      />
      <img
        class="bubble-3"
        src="~/assets/images/png/bubble-3.png"
        alt=""
        draggable="false"
      />
      <Vue3Marquee
        class="run-string"
        :clone="true"
        :duration="5"
        :direction="''"
      >
        <div class="string">
          <ElementsText transform="upper" size="xl" themes="secondary">
            оформить заказ можно с 20 ноября
          </ElementsText>
        </div>
      </Vue3Marquee>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrap {
  position: relative;
  padding-bottom: 20px;

  @include media(590px) {
    margin-top: 50px;
    padding-bottom: 100px;
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

  @include media(600px) {
    padding-left: 10px;

    p {
      font-size: 16px;
      text-wrap: nowrap;
    }
  }
}
.string-wrapper {
  position: relative;
  width: 100%;
  height: 165px;
}
.bubble-1 {
  position: absolute;
  left: 0;

  @include media(1000px) {
    width: 70px;
    height: 70px;
    top: 10px;
  }

  @include media(600px) {
    width: 50px;
    height: 50px;
    top: 20px;
  }
}
.bubble-2 {
  position: absolute;
  left: 56%;
  top: 95px;

  @include media(1000px) {
    width: 70px;
    height: 70px;
  }

  @include media(600px) {
    width: 50px;
    height: 50px;
  }
}
.bubble-3 {
  position: absolute;
  right: 10%;
  top: 30px;

  @include media(1000px) {
    width: 70px;
    height: 70px;
    right: 5%;
  }

  @include media(600px) {
    width: 50px;
    height: 50px;
    right: 2%;
  }
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
  background-image: url("~/assets/images/swiper/prev-red.png");
  background-repeat: no-repeat;
}
.nav.next {
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
</style>
