<template>
  <div class="progress-wrapper">
    <div
      v-for="questionNumber in Object.keys(store.questions)"
      :key="questionNumber"
      class="progress-item"
      :class="{
        active: questionNumber === currentQuestion.toString(),
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
const store = useTestopolisStore();
const currentQuestion = computed(() => store.currentQuestion);
</script>

<style scoped lang="scss">
.progress-wrapper {
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: auto;

  @include media(700px) {
    margin-bottom: auto;
    margin-top: unset;
  }
}
.progress-item {
  width: 15px;
  height: 15px;
  background-color: #ffffff;
  opacity: 0.5;
}
.active {
  opacity: 1;
}
</style>
