<script setup lang="ts">
const props = defineProps<{
  mentorIndex: number;
  onClick: (index: number) => void;
}>();

const names = [
  "Сергей Гречин",
  "Толик Орлов",
  "Александр Громов",
  "Лена Грунтова",
  "Виль Габдуллин",
  "Марат Сахаутдинов",
];

const photos = [
  "png/mentors/Гречин.jpg",
  "png/mentors/Орлов.jpg",
  "png/mentors/Громов.jpg",
  "png/mentors/Грунтова.jpg",
  "png/mentors/Габдуллин.jpg",
  "png/mentors/Сахаутдинов.jpg",
];
</script>

<template>
  <div class="wrapper-card">
    <div class="tooltip">
      <ElementsText align="center" transform="upper">
        {{ names[props.mentorIndex] }}
      </ElementsText>
    </div>
    <div class="card-mobile" @click="onClick(props.mentorIndex)">
      <img
        :src="getImageUrl(photos[props.mentorIndex])"
        alt=""
        draggable="false"
      />
    </div>
    <div class="card-inner">
      <div class="card-front">
        <img
          :src="getImageUrl(photos[props.mentorIndex])"
          alt=""
          draggable="false"
        />
      </div>
      <div class="card-back" @click="onClick(props.mentorIndex)">
        <ElementsText size="m" transform="upper" align="center">
          Узнать инсайты
        </ElementsText>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper-card {
  width: 200px;
  padding-top: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  aspect-ratio: 211/300;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.card-inner {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  background-image: url("~/assets/images/svg/bgMain.svg");
  background-size: cover;
  background-position: center 10%;

  @include media(1200px) {
    display: none;
  }
}
.wrapper-card:hover .card-inner {
  transform: rotateY(180deg);
}
.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  z-index: -1;
}
.card-front {
  border: 5px solid #fff;
}
.card-back {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  transform: rotateY(180deg);
  cursor: pointer;
}
.card-mobile {
  display: none;
  border: 5px solid #fff;
  cursor: pointer;

  @include media(1200px) {
    display: block;
  }
}

.tooltip {
  min-width: 150px;
  max-width: 170px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 62px;
  padding: 20px;
  border: 2px solid #c0a76b;
  position: absolute;
  background-color: #fff;
  background-image: url("~/assets/images/png/mentor-tooltip.png");
  background-repeat: no-repeat;
  background-size: cover;
  bottom: -31px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
}
</style>
