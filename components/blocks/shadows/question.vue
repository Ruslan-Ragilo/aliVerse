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
    <a
      v-if="gameState !== 'default'"
      class="link"
      :href="currentQuestion.link"
      target="_blank"
    ></a>
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
  padding-bottom: 12vh;

  @include media(500px) {
    top: 43vh;
  }
}
.question-image {
  max-width: 85vw;
  max-height: 30vh;

  @include media(500px) {
    max-height: 25vh;
  }
}
.link {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -77%);
  width: 100%;
  height: 100%;
  max-width: 85vw;
  max-height: 300px;
}
</style>
