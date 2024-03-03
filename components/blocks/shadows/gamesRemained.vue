<template>
  <div class="wrapper-games-remained">
    <div class="border-wrapper">
      <div class="border"></div>
      <div class="border"></div>
      <div class="border"></div>
      <div class="border"></div>
      <div class="border"></div>
      <div class="corner"></div>
      <div class="corner"></div>
      <div class="corner"></div>
      <div class="corner"></div>
    </div>
    <div class="games-remained">
      <ElementsText transform="upper">Осталось:</ElementsText>
      <div class="games-text-wrapper">
        <p class="games-text">{{ gamesRemained }}</p>
        <p class="games-text">{{ getRemainedText() }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useShadowsStore();
const gamesRemained = computed(() => store.gamesRemained);

const getRemainedText = () => {
  if (gamesRemained.value === 5 || gamesRemained.value === 0) {
    return "раундов";
  } else if (gamesRemained.value === 1) {
    return "раунд";
  } else {
    return "раунда";
  }
};
</script>

<style scoped lang="scss">
.wrapper-games-remained {
  position: absolute;
  top: 30px;
  left: 45px;
  width: 250px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @include media(750px) {
    left: 22px;
    width: 220px;
    height: 50px;
  }

  @include media(600px) {
    left: 22px;
    width: 120px;
    height: 45px;
  }
}
.games-remained {
  position: absolute;
  background-color: #fff;
  width: calc(100% - 15px);
  height: calc(100% - 15px);
  display: flex;
  justify-content: center;
  align-items: center;

  @include media(750px) {
    width: calc(100% - 10px);
    height: calc(100% - 10px);
  }

  @include media(600px) {
    flex-direction: column;
    gap: 2px;
  }

  p {
    font-size: 16px;

    @include media(750px) {
      font-size: 14px;
    }

    @include media(600px) {
      font-size: 10px;
    }
  }

  .games-text-wrapper {
    display: flex;
  }

  .games-text {
    color: #6070e7;
    text-transform: uppercase;
  }

  .games-text:nth-of-type(2) {
    margin: 0 5px;
  }
}

.border-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
.border {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.border:nth-of-type(1) {
  background-color: #303c9d;
  width: calc(100% - 15px);
  height: 100%;

  @include media(750px) {
    width: calc(100% - 10px);
    height: 100%;
  }
}
.border:nth-of-type(2) {
  background-color: #303c9d;
  width: calc(100% - 7.5px);
  height: calc(100% - 7.5px);

  @include media(750px) {
    width: calc(100% - 5px);
    height: calc(100% - 5px);
  }
}
.border:nth-of-type(3) {
  background-color: #303c9d;
  width: 100%;
  height: calc(100% - 15px);

  @include media(750px) {
    width: 100%;
    height: calc(100% - 10px);
  }
}
.border:nth-of-type(4) {
  background-color: #6070e7;
  width: calc(100% - 7.5px);
  height: calc(100% - 15px);

  @include media(750px) {
    width: calc(100% - 5px);
    height: calc(100% - 10px);
  }
}
.border:nth-of-type(5) {
  background-color: #6070e7;
  width: calc(100% - 15px);
  height: calc(100% - 7.5px);

  @include media(750px) {
    width: calc(100% - 10px);
    height: calc(100% - 5px);
  }
}
.corner {
  background-color: #6070e7;
  width: 3.75px;
  height: 3.75px;
  position: absolute;
  z-index: 3;

  @include media(750px) {
    width: 2.5px;
    height: 2.5px;
  }
}
.corner:nth-of-type(6) {
  top: 7.5px;
  left: 7.5px;

  @include media(750px) {
    top: 5px;
    left: 5px;
  }
}
.corner:nth-of-type(7) {
  top: 7.5px;
  right: 7.5px;

  @include media(750px) {
    top: 5px;
    right: 5px;
  }
}
.corner:nth-of-type(8) {
  bottom: 7.5px;
  left: 7.5px;

  @include media(750px) {
    bottom: 5px;
    left: 5px;
  }
}
.corner:nth-of-type(9) {
  bottom: 7.5px;
  right: 7.5px;

  @include media(750px) {
    bottom: 5px;
    right: 5px;
  }
}
</style>
