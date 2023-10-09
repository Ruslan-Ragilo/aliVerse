<script setup>
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";

const modules = [Navigation];

const prev = ref(null);
const next = ref(null);
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-main">
      <div class="wrapper-top">
        <ElementsCustomSelect
          :options="[
            { option: 'asdadwda' },
            { option: 'ncvkio' },
            { option: 'cbhtyjyujyu' },
            { option: 'sdfsdferfer' },
            { option: 'wert4yt34t' },
          ]"
        />
        <div class="wrapper-nav">
          <button ref="prev" class="nav prev">
            <img src="@/assets/images/swiper/prev.svg" alt="" />
          </button>
          <button ref="next" class="nav next">
            <img src="@/assets/images/swiper/next.svg" alt="" />
          </button>
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
        <SwiperSlide class="slide" v-for="item in 10" :key="item">
          <ElementsSwiperSlide />
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
        <ElementsText transform="upper" size="xl" themes="secondary"
          >оформить заказ можно с 17 ноября</ElementsText
        >
      </div>
    </Vue3Marquee>
  </div>
</template>

<style scoped lang="scss">
.slide {
  width: 300px;
}
.run-string {
  margin-top: 48px;
}
.string {
  background-color: red;
  padding: 10px 0;
  display: flex;
  align-items: center;
  padding-left: 30px;
}
.wrapper {
  margin-top: 10vw;
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
</style>
