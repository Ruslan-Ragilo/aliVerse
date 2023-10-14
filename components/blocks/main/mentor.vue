<script setup>
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
</script>

<template>
  <div class="letter-container">
    <img class="planet" src="@/assets/images/png/mentorPlanet.png" alt="" />
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
            Ментории мы собрали топовые советы от топов AliExpress! Здесь ты
            узнаешь, как поддерживать эффективность, соблюдать work-life balance
            и даже ___! Листай карточки с инсайтами от наших руководителей и
            заряжайся!</ElementsText
          >
        </ElementsMessageIcon>
      </div>
    </div>
    <div class="wrapper-main wrapper-top">
      <Swiper class="swiper" slides-per-view="auto" :space-between="20">
        <SwiperSlide class="slide" v-for="item in 5" :key="item">
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
}
.alien {
  max-width: 600px;
  width: 100%;

  @include media(1200px) {
    margin-top: 60vw;
  }
}

.planet {
  position: absolute;
  left: 0;
  width: 62vw;
  z-index: -1;

  @include media(1200px) {
    width: 100vw;
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
</style>
