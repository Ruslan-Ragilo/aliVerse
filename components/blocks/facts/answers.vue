<template>
  <div v-if="gameState === 'default'" class="answers">
    <ElementsPixelButton size="middle" color="red" @click="checkAnswer(false)">
      Ложь
    </ElementsPixelButton>
    <ElementsPixelButton size="middle" color="green" @click="checkAnswer(true)">
      Правда
    </ElementsPixelButton>
  </div>
  <div v-if="gameState !== 'default'" class="answers">
    <ElementsPixelButton size="middle" color="red" @click="nextGame">
      {{ buttonText }}
    </ElementsPixelButton>
  </div>
</template>

<script setup lang="ts">
const store = useFactsStore();
const gameState = computed(() => store.gameState);
const todayQuestions = computed(() => store.todayQuestions);
const questions = computed(() => store.facts);
const currentAnswer = computed(() => store.currentAnswer);
const currentQuestion = computed(
  () => questions.value[todayQuestions.value[0]],
);
const buttonText = ref("Далее");

const getButtonText = () => {
  if (todayQuestions.value.length === 1) {
    buttonText.value = "Закончить игру";
  } else {
    buttonText.value = "Далее";
  }
};

const nextGame = () => {
  if (todayQuestions.value.length > 1) {
    store.nextGame();
    store.changeGameState("default");
  } else {
    store.changeGameState("default");
    store.finishGame();
  }
};

const checkAnswer = (answer: boolean) => {
  store.decreaseGamesRemained();
  store.addCurrentAnswer(answer);
  getButtonText();

  if (currentAnswer.value === currentQuestion.value.isRight) {
    store.changeGameState("right");
    store.addCoins();
  } else {
    store.changeGameState("wrong");
  }
};
</script>

<style scoped lang="scss">
.answers {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: auto;

  @include media(600px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
  }
}
</style>
