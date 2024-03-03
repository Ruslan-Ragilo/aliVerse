<template>
  <div class="timer">
    <ElementsText class="timer-text">
      00:{{ `${time}`.padStart(2, "0") }}
    </ElementsText>
  </div>
</template>

<script setup lang="ts">
const store = useShadowsStore();
const time = ref(15);
const gameState = computed(() => store.gameState);
const todayQuestions = computed(() => store.todayQuestions);
const questions = computed(() => store.shadows);
const currentQuestion = computed(
  () => questions.value[todayQuestions.value[0]],
);

const startTimer = () => {
  const interval = setInterval(() => {
    if (time.value > 0) {
      time.value--;
    }
  }, 1000);

  const timeout = setTimeout(() => {
    clearInterval(interval);
    store.changeGameState("wrong");
    store.addCurrentAnswer(currentQuestion.value.name);
  }, 15000);

  watch(
    () => gameState.value,
    () => {
      clearInterval(interval);
      clearTimeout(timeout);
    },
  );

  onUnmounted(() => {
    clearInterval(interval);
    clearTimeout(timeout);
  });
};

startTimer();
</script>

<style scoped lang="scss">
.timer {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);

  @include media(700px) {
    top: 50px;
  }

  @include media(600px) {
    top: 40px;
  }
}
.timer-text {
  font-size: 32px;
  text-shadow: 4px 0 #006eaf;
  color: #fff;

  @include media(700px) {
    font-size: 20px;
  }

  @include media(500px) {
    font-size: 14px;
  }
}
</style>
