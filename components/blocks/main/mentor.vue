<script setup>
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
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
          <ElementsText transform="upper"
            >Чувствуешь, как твоё тело наполняется вдохновением и мотивацией?
            Да, без этого на планете «Менторий» не обойтись. <br /><br />В
            Ментории мы собрали <span class="red">топовые</span> советы от
            <span class="red">топов</span> AliExpress! Здесь ты узнаешь, как
            поддерживать эффективность, соблюдать work-life balance и даже ___!
            Листай карточки с инсайтами от наших руководителей и
            заряжайся!</ElementsText
          >
        </ElementsMessageIcon>
      </div>
    </div>
    <div class="wrapper-main wrapper-top">
      <Swiper class="swiper" slides-per-view="auto" :space-between="20">
        <SwiperSlide v-for="item in 5" :key="item" class="slide">
          <div class="wrapper-card">
            <img src="@/assets/images/png/topDir.png" alt="" />
            <div class="tooltip">
              <ElementsText align="center" transform="upper"
                >Александр <br />
                епифанов</ElementsText
              >
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <!-- <div v-for="item in 5" :key="item" class="wrapper-card"></div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
    margin-top: 60vw;
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

.slide {
  width: 240px;
  padding-bottom: 30px;
}

.wrapper-card {
  border: 5px solid $white;
  background-image: url("~/assets/images/svg/bgMain.svg");
  background-size: cover;
  background-position: center 10%;
  padding-top: 10px;
  position: relative;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
  }

  .tooltip {
    width: 170px;
    height: 62px;
    border: 2px solid #c0a76b;
    position: absolute;
    background-color: #fff;
    bottom: -31px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.red {
  color: #ff2722;
}
</style>
