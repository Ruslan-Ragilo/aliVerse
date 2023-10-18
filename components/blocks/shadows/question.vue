<template>
  <div class="question">
    <img
      class="question-image"
      :src="
        gameState === 'default'
          ? getImageUrl(currentQuestion.imageShadow)
          : getImageUrl(currentQuestion.imageAnswer)
      "
      alt=""
      draggable="false"
    />
  </div>
</template>

<script setup lang="ts">
const store = useShadowsStore();
const gameState = computed(() => store.gameState);
const todayQuestions = computed(() => store.todayQuestions);
const questions = computed(() => store.shadows);
const currentQuestion = computed(
  () => questions.value[todayQuestions.value[0]],
);
</script>

<style scoped lang="scss">
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
