<template>
  <div class="answers-wrapper">
    <div v-for="(answer, index) in answers" :key="answer" class="answer">
      <input
        :id="`answer-${index}`"
        class="input"
        type="radio"
        name="answers"
        @input="store.addAnswer(currentQuestion, index)"
      />
      <label
        :for="`answer-${index}`"
        class="label"
        :class="{ active: currentAnswers[currentQuestion] === index }"
      >
        <ElementsText transform="upper">0{{ index }}</ElementsText>
        <ElementsText transform="upper">{{ answer }}</ElementsText>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useTestopolisStore();
const currentQuestion: ComputedRef<number> = computed(
  () => store.currentQuestion,
);
const answers = computed(() => store.questions[currentQuestion.value].answers);
const currentAnswers = computed(() => store.currentAnswers);
</script>

<style scoped lang="scss">
.answers-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;

  @include media(700px) {
    grid-template-columns: none;
    grid-template-rows: repeat(4, 1fr);
  }
}

.answer {
  position: relative;
}

.input {
  position: absolute;
  top: 0;
  opacity: 0;
}

.label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 25px;
  width: 100%;
  height: 100%;
  padding: 20px 30px;
  background-color: #ffffff;
  border: 5px solid #ffd776;
  transition: all 0.1s;
  cursor: pointer;
}

.label p {
  font-size: 18px;

  @include media(500px) {
    font-size: 12px;
  }
}

.active {
  background-color: #ffd776;
}
</style>
