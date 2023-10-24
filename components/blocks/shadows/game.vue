<template>
  <div class="wrapper-game">
    <BlocksShadowsGamesRemained />
    <div v-if="isCounting" class="count">{{ counter }}</div>
    <div v-if="!isCounting && !isFinished" class="game">
      <BlocksShadowsTimer />
      <BlocksShadowsQuestion />
      <BlocksShadowsAnswer />
      <ElementsText
        class="hint"
        :class="{ bubble: gameState !== 'default' }"
        themes="secondary"
        size="s"
        transform="upper"
      >
        <ElementsText
          v-if="gameState === 'right'"
          size="xl"
          font-family="Barcade"
          themes="mustard-dark"
        >
          +60
        </ElementsText>
        {{ hintText }}
      </ElementsText>
      <ElementsPixelButton
        color="red"
        size="large"
        :disabled="!currentAnswer"
        @click="handleClick"
      >
        {{ buttonText }}
      </ElementsPixelButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useShadowsStore();
store.getTodayQuestions();
const isFinished = computed(() => store.isFinished);
const todayQuestions = computed(() => store.todayQuestions);
const gameState = computed(() => store.gameState);
const questions = computed(() => store.shadows);
const currentAnswer = computed(() => store.currentAnswer);
const currentQuestion = computed(
  () => questions.value[todayQuestions.value[0]],
);

const hintText = ref("");
const buttonText = ref("Выбрать ответ");

const getButtonText = () => {
  if (gameState.value === "default") {
    buttonText.value = "Выбрать ответ";
  } else if (todayQuestions.value.length === 1) {
    buttonText.value = "Закончить игру";
  } else {
    if (gameState.value === "right") {
      buttonText.value = "Продолжаем!";
    }
    if (gameState.value === "wrong") {
      buttonText.value = "Следующая игра";
    }
  }
};

const checkCorrectAnswer = () => {
  if (currentAnswer.value === currentQuestion.value.name) {
    store.changeGameState("right");
    store.addCoins();
    hintText.value = currentQuestion.value.right;
  } else {
    store.changeGameState("wrong");
    hintText.value = currentQuestion.value.wrong;
  }
};

const handleClick = () => {
  if (gameState.value === "default") {
    checkCorrectAnswer();
    store.decreaseGamesRemained();
  } else if (todayQuestions.value.length > 1) {
    store.nextGame();
    startGame();
    store.changeGameState("default");
  } else {
    store.changeGameState("default");
    store.finishGame();
  }
  getButtonText();
};

watch(
  () => gameState.value,
  () => {
    getButtonText();
    hintText.value = currentQuestion.value.wrong;
  },
);

const isCounting = ref(true);
const counter = ref(3);

const startGame = () => {
  isCounting.value = true;
  const decreaseCounter = setInterval(() => {
    counter.value--;
  }, 1000);

  setTimeout(() => {
    clearInterval(decreaseCounter);
    isCounting.value = false;
    counter.value = 3;
  }, 3000);
};

startGame();
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
  height: 100%;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
}
.hint {
  width: 400px;
  position: absolute;
  top: 45%;
  right: 46px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  opacity: 0;
  transition: none;
  text-align: center;

  @include media(1400px) {
    top: 160px;
    right: 50%;
    transform: translate(50%, 0);
  }
}
.bubble {
  opacity: 1;
  transform: translate(0, -50px);
  transition: all 0.3s;

  @include media(1400px) {
    transform: translate(50%, -50px);
  }
}
</style>
