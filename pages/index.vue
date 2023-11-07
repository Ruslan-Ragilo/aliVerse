<script setup>
const userStore = useUserData();
const isLoading = ref(true);
const store = useFrogStore();

const handleModalOpen = () => {
  store.openModal();
};

const isWednesday = ref(
  isToday(
    new Date("November 08 2023 07:59:59 GMT+03:00"),
    new Date("November 08 2023 23:59:59 GMT+03:00"),
  ) ||
    isToday(
      new Date("November 15 2023 07:59:59 GMT+03:00"),
      new Date("November 15 2023 23:59:59 GMT+03:00"),
    ),
);

onMounted(() => {
  userStore.fetchUsers().then(() => {
    isLoading.value = false;
  });
});

const prevOffsetY = ref(window.scrollY);
const isScrollingUp = ref(true);

window.onscroll = () => {
  const currentOffsetY = ref(window.scrollY);
  if (prevOffsetY.value > currentOffsetY.value) {
    isScrollingUp.value = true;
  } else {
    isScrollingUp.value = false;
  }

  prevOffsetY.value = currentOffsetY.value;
};

const fallGameStore = useFallStore();
const isModalOpen = computed(() => fallGameStore.isModalOpen);
</script>

<template>
  <NuxtLayout v-if="!isLoading">
    <BlocksBasketModal />
    <div class="wrapper">
      <ElementsHeaderCart :is-scrolling-up="isScrollingUp" />
      <ElementsHeaderProfile :is-scrolling-up="isScrollingUp" />
      <div class="wrapper-bg">
        <img class="bgTop" src="@/assets/images/png/bgMainTop.png" alt="" />
      </div>
      <div class="container">
        <BlocksMainBanner />
      </div>
    </div>
    <div v-if="isWednesday" class="wrapper-frog">
      <img class="fullCloud" src="@/assets/images/svg/fullCloud.svg" alt="" />
      <img
        class="frog"
        src="@/assets/images/svg/frog.svg"
        alt=""
        @click="handleModalOpen"
      />
    </div>
    <BlocksMainHello />
    <BlocksMainCounter />
    <BlocksMainPresents />
    <BlocksMainProgress />
    <BlocksMainGalery />
    <BlocksMainLetter />
    <BlocksMainMentor />
    <BlocksMainFortuna />
    <BlocksMainMerch />
    <BlocksMainSwiperProducts />
    <BlocksMainGames />
    <BlocksMainTest />
    <BlocksMainQuestion />
    <BlocksMainFooter />
    <div v-if="!isModalOpen" class="hint">
      <div class="hint-content">
        <img
          width="50"
          height="50"
          src="~/assets/images/png/rotate.png"
          alt=""
        />
        <ElementsText
          size="s"
          themes="secondary"
          transform="upper"
          align="center"
        >
          Пожалуйста, переверни устройство<br />в вертикальное положение
        </ElementsText>
      </div>
    </div>
  </NuxtLayout>
  <ElementsSpinner v-else />
</template>

<style lang="scss" scoped>
.hint {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;

  @media screen and (orientation: landscape) and (max-height: 425px) and (max-width: 900px) {
    display: flex;
  }
}
.hint-content {
  width: 80vw;
  height: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
.wrapper-header {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 35px 70px;
  z-index: 12;

  @include media(710px) {
    padding: 20px 16px;
  }
}
.mes {
  width: 40%;
}
.wrapper {
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;

  .wrapper-bg {
    width: 100%;
  }
  .bgTop {
    width: 100%;
    @include media(1200px) {
      width: 111%;
      object-fit: cover;
      object-position: -3vw center;
    }

    @include media(500px) {
      width: 121%;
      object-fit: cover;
      object-position: -8vw center;
    }

    // @include media(1066px) {
    //   min-width: 900px;
    //   width: 100%;
    //   object-position: center -200px;
    //   object-fit: contain;
    // }
    // @include media(800px) {
    //   min-width: 900px;
    //   object-position: center -180px;
    // }
    // @include media(660px) {
    //   min-width: 760px;
    //   object-position: center -150px;
    // }
    // @include media(510px) {
    //   min-width: 650px;
    //   object-position: center -130px;
    // }
    // @include media(490px) {
    //   min-width: 510px;
    //   object-position: center -100px;
    // }
    // @include media(420px) {
    //   min-width: 642px;
    //   object-position: center -140px;
    // }
  }
}
.wrapper-frog {
  display: none;
  flex-direction: column-reverse;
  width: 50%;
  margin-left: auto;

  @include media(1200px) {
    display: flex;
  }

  @include media(500px) {
    width: 70%;
    margin-top: 100px;
  }

  .frog {
    width: 60%;
    align-self: center;
    position: relative;
    top: 50px;
  }
}
</style>
