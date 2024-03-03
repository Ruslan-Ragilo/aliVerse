<template>
  <ElementsText
    size="xxxl"
    themes="secondary"
    transform="upper"
    class="title"
    align="center"
  >
    {{ titleText }}
  </ElementsText>
  <div class="question" :class="gameState">
    <ElementsText
      transform="upper"
      size="xs"
      align="left"
      :class="{ fact: gameState === 'default' }"
    >
      {{ currentQuestionText }}
    </ElementsText>
  </div>
</template>

<script setup lang="ts">
const store = useFactsStore();
const gameState = computed(() => store.gameState);
const todayQuestions = computed(() => store.todayQuestions);
const questions = computed(() => store.facts);
const currentQuestion = computed(
  () => questions.value[todayQuestions.value[0]],
);
const currentQuestionText = ref(currentQuestion.value.fact);
const titleText = ref("Выбери верный ответ");

const changeQuestionText = () => {
  if (gameState.value === "default") {
    titleText.value = "Выбери верный ответ";
    currentQuestionText.value = currentQuestion.value.fact;
  } else if (gameState.value === "right") {
    titleText.value = "Верный ответ";
    currentQuestionText.value = currentQuestion.value.right;
  } else if (gameState.value === "wrong") {
    titleText.value = "Неверный ответ";
    currentQuestionText.value = currentQuestion.value.wrong;
  }
};

watch(
  () => gameState.value,
  () => {
    changeQuestionText();
  },
);
</script>

<style scoped lang="scss">
.title {
  margin-top: auto;
  margin-bottom: 20px;

  @include media(450px) {
    font-size: 20px;
  }
}
.question {
  width: 850px;
  min-height: 280px;
  max-height: 400px;
  height: min-content;
  padding: 30px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 8px solid #6070e7;

  @include media(1000px) {
    width: 100%;
  }

  @include media(450px) {
    min-height: 180px;

    p {
      font-size: 14px;
    }
  }

  @media (max-height: 600px) {
    min-height: 150px;
  }
}
.fact {
  text-align: center;
  font-size: 20px;
}
.default {
  justify-content: center;
}
.right {
  border: 8px solid #90a60b;
}
.wrong {
  border: 8px solid #ff2722;
}
</style>
