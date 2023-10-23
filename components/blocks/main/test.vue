<template>
  <div class="letter-container">
    <img class="planet" src="@/assets/images/png/test.png" alt="" />
    <div class="wrapper-main content">
      <div class="alien">
        <img
          class="comet-1"
          src="@/assets/images/png/testopolis/comet-1.png"
          alt=""
        />
        <img
          class="comet-2"
          src="@/assets/images/png/testopolis/comet-2.png"
          alt=""
        />
        <img
          class="comet-3"
          src="@/assets/images/png/testopolis/comet-3.png"
          alt=""
        />
        <img
          class="spaceship"
          src="@/assets/images/png/testopolis/spaceship.png"
          alt=""
        />
        <ElementsText
          class="heading-title"
          size="heading"
          transform="upper"
          themes="secondary"
          >Планета
          <br />
          тестополис</ElementsText
        >
        <ElementsMessageIcon class="alien-wrapper">
          <ElementsText transform="upper"
            >Welcome to Тестополис! Признайся, ты хотя бы раз задумывался, на
            какой товар с AliExpress ты похож? Мы тоже!<br /><br />
            Здесь, в Тестополисе, ты сможешь узнать наверняка — Куриный шлем для
            Птица Утка, Задеревенелый чехол для свадебный Юбка или Вонючий
            гобелен le monke uh oh? Проходи тест и пойми наконец, кто ты
            есть!</ElementsText
          >
          <ElementsPixelButton
            color="green"
            size="middle"
            :is-main-page="true"
            class="alien-button"
            @click="handleModalOpen"
          >
            Пройти тест
          </ElementsPixelButton>
        </ElementsMessageIcon>
      </div>
      <BlocksTestopolisModal />
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useTestopolisStore();

const handleModalOpen = () => {
  store.openModal();
};
</script>

<style lang="scss" scoped>
.content {
  padding-top: 20.1vw;
  display: flex;
}
.alien > p {
  margin-left: 20px;

  @include media(744px) {
    margin-left: 10px;
  }
}
.comet-1 {
  position: absolute;
  top: -100px;
  right: 50px;

  @include media(1200px) {
    width: 100px;
    top: -300px;
    left: 100px;
  }

  @include media(600px) {
    width: 75px;
    top: -200px;
    left: 50px;
  }
}
.comet-2 {
  position: absolute;
  top: -100px;
  left: 100px;

  @include media(1200px) {
    left: 50px;
  }

  @include media(600px) {
    width: 70px;
    left: -50px;
  }
}
.comet-3 {
  position: absolute;
  bottom: -100px;
  left: 0;

  @include media(750px) {
    width: 70px;
    left: 20%;
  }
}
.spaceship {
  position: absolute;
  bottom: -50px;
  right: 0;

  @include media(1200px) {
    width: 80px;
    right: 50px;
  }

  @include media(600px) {
    width: 50px;
    right: 0;
  }
}
.alien {
  max-width: 675px;
  width: 100%;
  position: relative;

  @include media(1200px) {
    margin-top: 40vw;
  }
}

.planet {
  position: absolute;
  right: 0;
  width: 60vw;
  max-width: 1000px;
  z-index: -1;

  @include media(1200px) {
    width: 70vw;
  }

  @include media(744px) {
    // width: 100vw;
    // right: -30vw;
  }
}

.alien-button {
  margin-top: 28px;
}
</style>
