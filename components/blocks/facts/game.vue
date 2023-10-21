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
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useFactsStore();
store.getTodayQuestions();
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
}
.hint {
  position: absolute;
  top: 100px;
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
</style>
