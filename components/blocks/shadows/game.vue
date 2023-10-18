<template>
  <div class="wrapper-game">
    <BlocksShadowsGamesRemained />
    <div v-if="isCounting" class="count">{{ counter }}</div>
    <div v-if="!isCounting && !isFinished" class="game">
      <BlocksShadowsQuestion />
      <BlocksShadowsAnswer />
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

const buttonText = ref("Выбрать ответ");
const getButtonText = () => {
  if (gameState.value === "default") {
    buttonText.value = "Выбрать ответ";
  } else if (todayQuestions.value.length === 1) {
    buttonText.value = " Закончить игру";
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
  } else {
    store.changeGameState("wrong");
  }
};

const handleClick = () => {
  if (gameState.value === "default") {
    checkCorrectAnswer();
  } else if (todayQuestions.value.length > 1) {
    store.nextGame();
    store.changeGameState("default");
  } else {
    store.changeGameState("default");
    store.finishGame();
  }
  getButtonText();
};

const isCounting = ref(true);
const counter = ref(3);

const decreaseCounter = setInterval(() => {
  counter.value--;
}, 1000);

setTimeout(() => {
  clearInterval(decreaseCounter);
  isCounting.value = false;
  counter.value = 3;
}, 3000);
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
.question {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.question-image {
  height: 300px;
}
</style>
