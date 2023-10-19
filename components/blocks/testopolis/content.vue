<template>
  <div v-if="!isCompleted" class="modal-content">
    <BlocksTestopolisQuestion />
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
      >
        {{ currentQuestion === questionsLength ? "Результат" : "Далее" }}
      </ElementsPixelButton>
    </div>
  </div>
  <BlocksTestopolisResult v-else />
</template>

<script setup lang="ts">
const store = useTestopolisStore();
const currentQuestion = computed(() => store.currentQuestion);
const currentAnswers = computed(() => store.currentAnswers);
const isCompleted = computed(() => store.isCompleted);
const questionsLength = computed(() => Object.keys(store.questions).length);
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
  z-index: 2;

  @include media(900px) {
    padding: 10px 0;
  }

  @include media(500px) {
    grid-row-gap: 25px;
  }
}

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: auto;
  gap: 30px;

  @include media(720px) {
    flex-direction: column-reverse;
    padding-bottom: 30px;
  }

  @include media(500px) {
    gap: 5px;
  }
}
</style>
