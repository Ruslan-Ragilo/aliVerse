<template>
  <div class="modal-content">
    <div class="question-wrapper">
      <ElementsText themes="mustard-light" size="xl">{{
        data[currentQuestion].question
      }}</ElementsText>
      <div class="question-image"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TestopolisData {
  question: string;
  answers: {
    [key: number]: string;
  };
}

const data: Record<string, TestopolisData> = {
  1: {
    question: "Какую татуировку ты бы себе сделал(а)?",
    answers: {
      1: "Пф, на спор – что угодно, а какие ставки?",
      2: "Что-то утонченное и незаметное",
      3: "Контура пожирнее, да картинку поярче, пожалуйста",
      4: "Татуировки – это не моё",
    },
  },
};

const currentQuestion = ref(1);
</script>

<style scoped lang="scss">
.modal-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  padding: 10px 34px;
}
.question-wrapper {
  display: flex;
  justify-content: space-between;
}
.question-image {
  width: 288px;
  height: auto;
  margin: 0 110px;
  aspect-ratio: 3/2;
  background-color: #d9d9d9;
  border: 6px solid #ffffff;
}
</style>
