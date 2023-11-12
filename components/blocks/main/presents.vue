<script setup>
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Pagination } from "swiper/modules";
// const glob = import.meta.glob("@/assets/images/png/presents/sneakers.png");
// console.log(glob);
const dataPresents = [
  {
    img: "png/presents/sneakers.png",
    text: "мобильные телефоны ",
  },
  {
    img: "png/presents/phone.png",
    text: "электроника для автомобилей ",
  },
  {
    img: "png/presents/bag.png",
    text: "товары для уборки (роботы пылесосы в основном) ",
  },
  {
    img: "png/presents/lego.png",
    text: "3D принтеры и аксессуары ",
  },
  {
    img: "png/presents/screw.png",
    text: "Компоненты для компьютеров (видеокарты, процессоры и тд)",
  },
];
const modules = [Pagination];

const isAvailable = ref(
  await isToday("11/12/2023 11:59:59", "11/17/2023 23:59:59"),
);
</script>

<template>
  <div v-if="!isAvailable" class="wrapper-main">
    <div class="wrapper">
      <div class="wrapper-img">
        <img class="tab" src="@/assets/images/png/tabPresent.png" alt="" />
        <img class="mob" src="@/assets/images/png/mobPresent.png" alt="" />

        <div class="text">
          <ElementsText class="head" size="xxxl" themes="secondary"
            >Топ 5</ElementsText
          >
          <ElementsText class="title" size="m" themes="secondary"
            >продаваемых<br />
            категорий
          </ElementsText>
        </div>
      </div>
      <div class="wrapper-presents">
        <div v-for="item in dataPresents" :key="item.text" class="present">
          <img :src="getImageUrl(`${item.img}`)" alt="" />
          <ElementsText>{{ item.text }}</ElementsText>
        </div>
      </div>
    </div>
    <Swiper
      class="swiper"
      :modules="modules"
      slides-per-view="auto"
      :space-between="30"
      :initial-slide="1"
      :grab-cursor="true"
      :centered-slides="true"
      :pagination="{
        clickable: true,
      }"
    >
      <SwiperSlide
        v-for="item in dataPresents"
        :key="item.text"
        class="present"
      >
        <img :src="getImageUrl(`${item.img}`)" alt="" />
        <ElementsText>{{ item.text }}</ElementsText>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss" scoped>
.swiper {
  background-color: $white;
  border-radius: 20px;
  padding: 20px;
  @media screen and (min-width: 744px) {
    display: none !important;
  }
  .present {
    display: flex;
    flex-direction: column;
    // gap: 10px;
    align-items: center;
    // padding: 10px;
    width: 130px;
    width: auto;
  }
}
:global(.swiper-pagination) {
  position: static;
  margin-top: 12px;
  margin-bottom: 7px;
}
.mob {
  display: none;
  @include media(424px) {
    display: block;
    width: 100%;
  }
}
.tab {
  display: none;
  @include media(1440px) {
    display: block;
    width: 100%;
    height: 15vw;
    @include media(700px) {
      height: 100px;
    }
    @include media(424px) {
      display: none;
    }
  }
}
.wrapper {
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 10px;
  margin-bottom: 10px;
  height: 320px;

  @include media(1440px) {
    grid-template-columns: 1fr;
    height: auto;
  }

  .wrapper-presents {
    background-color: $white;
    padding: 10px;
    width: 100%;
    border-radius: 20px;
    display: flex;
    padding: 30px;
    gap: 10px;
    justify-content: space-between;

    @include media(744px) {
      display: none;
    }

    .present {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 19%;

      align-items: center;
      img {
        width: 100%;
      }

      @include media(744px) {
        // flex-basis: 33%;
      }
    }
  }

  .wrapper-img {
    display: flex;
    padding: 30px;
    background: url("@/assets/images/png/deskPresent.png") no-repeat;
    background-size: cover !important;
    background-position: top right;
    position: relative;

    @include media(1440px) {
      background: none;
      padding: 0;
    }

    .text {
      @include media(1440px) {
        position: absolute;
        top: 3vw;
        left: 20px;
        z-index: 10;

        @include media(700px) {
          top: 14px;
        }

        @include media(424px) {
          top: 17%;
        }
      }

      @include media(1440px) {
        .head {
          font-size: $font-size-m;
          line-height: $line-height-m;
        }

        .title {
          font-size: $font-size-xs;
          line-height: $line-height-xs;
        }
      }

      @include media(1200px) {
        .head {
          font-size: $font-size-s;
          line-height: $line-height-s;
        }

        .title {
          font-size: $font-size-xxs;
          line-height: $line-height-xxs;
        }
      }
    }
  }
}
</style>
