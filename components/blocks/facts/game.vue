<template>
  <div class="wrapper-game">
    <BlocksFactsGamesRemained />
    <div v-if="!isFinished" class="game">
      <BlocksFactsQuestion />
      <BlocksFactsAnswers />
      <ElementsText
        class="hint"
        :class="{ bubble: gameState === 'right' }"
        size="xl"
        font-family="Barcade"
        themes="mustard-dark"
      >
        +50
      </ElementsText>
      <img
        class="yoda"
        :class="{ active: gameState === 'right' }"
        src="~/assets/images/png/facts/yoda-right.png"
        alt=""
        draggable="false"
      />
      <img
        class="yoda"
        :class="{ active: gameState === 'wrong' }"
        src="~/assets/images/png/facts/yoda-wrong.png"
        alt=""
        draggable="false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useFactsStore();
await store.getTodayQuestions();
const isFinished = computed(() => store.isFinished);
const gameState = computed(() => store.gameState);
</script>

<style scoped lang="scss">
.wrapper-game {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.count {
  font-family: "Barcade Brawl", sans-serif;
  font-size: 200px;
  color: #fff;
  margin-bottom: 12vh;

  @include media(500px) {
    font-size: 128px;
  }
}
.game {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.3fr 0.5fr 0.4fr;
  grid-row-gap: 30px;
  max-height: 75vh;

  @include media(500px) {
    grid-row-gap: 0;
  }
}
.hint {
  position: absolute;
  top: 7vh;
  left: 50%;
  transform: translate(-50%, 0);
  opacity: 0;
  transition: none;
  text-align: center;
}
.bubble {
  opacity: 1;
  transform: translate(-50%, -30px);
  transition: all 0.2s;
}
.yoda {
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(100%, 100%);
  transition: 0.3s ease-in-out;

  @include media(600px) {
    width: 180px;
    height: 180px;
  }

  @include media(450px) {
    width: 130px;
    height: 130px;
  }
}
.active {
  transform: translate(0, 0);
}
</style>
