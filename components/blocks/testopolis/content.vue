<template>
  <div v-if="!isCompleted" class="modal-content">
    <div class="question-wrapper">
      <ElementsText themes="mustard-light" size="xl">{{
        questions[currentQuestion].question
      }}</ElementsText>
      <div class="question-image"></div>
    </div>
    <BlocksTestopolisAnswers />
    <BlocksTestopolisProgress />
    <div class="buttons">
      <ElementsPixelButton
        color="red"
        size="middle"
        :disabled="currentQuestion === 1"
        @click="store.prevQuestion"
        >Назад</ElementsPixelButton
      >
      <ElementsPixelButton
        color="red"
        size="middle"
        :disabled="currentAnswers[currentQuestion] === null"
        @click="store.nextQuestion"
        >Далее</ElementsPixelButton
      >
    </div>
  </div>
  <div v-else class="results-wrapper"></div>
</template>

<script setup lang="ts">
const store = useTestopolisStore();
const questions = store.questions;
const currentQuestion = computed(() => store.currentQuestion);
const currentAnswers = computed(() => store.currentAnswers);
const isCompleted = computed(() => store.isCompleted);
</script>

<style scoped lang="scss">
.modal-content {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.3fr 1fr 0.1fr 0.1fr;
  grid-row-gap: 36px;
  padding: 10px 34px;
  z-index: 3;
}
.question-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  gap: 30px;

  @include media(850px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }

  @include media(500px) {
    p {
      font-size: 20px;
    }
  }
}
.question-image {
  width: 288px;
  height: 174px;
  aspect-ratio: 3/2;
  margin-left: 30px;
  margin-right: 110px;
  background-color: #d9d9d9;
  border: 6px solid #ffffff;

  @include media(1100px) {
    margin-right: 30px;
  }

  @include media(850px) {
    margin-left: 0;
    width: 255px;
    height: 154px;
  }

  @include media(500px) {
    width: 158px;
    height: 95px;
  }
}

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: auto;
  gap: 30px;

  @include media(850px) {
    flex-direction: column-reverse;
  }
}
</style>
