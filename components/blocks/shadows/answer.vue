<template>
  <div class="answers">
    <div v-for="(answer, index) in currentAnswers" :key="answer" class="answer">
      <div class="border-wrapper" :class="{ active: answer === currentAnswer }">
        <div class="border"></div>
        <div class="border"></div>
        <div class="border"></div>
        <div class="border"></div>
        <div class="border"></div>
        <div class="border"></div>
        <div class="corner"></div>
        <div class="corner"></div>
        <div class="corner"></div>
        <div class="corner"></div>
      </div>
      <input
        :id="`answer-${index}`"
        type="radio"
        name="answers"
        :value="answer"
        class="input"
        :disabled="gameState !== `default`"
        @input="store.addCurrentAnswer(answer)"
      />
      <label
        class="label"
        :class="{
          labelActive: answer === currentAnswer,
          disabled: gameState !== `default`,
        }"
        :for="`answer-${index}`"
      >
        <ElementsText transform="upper" align="center">
          {{ answer }}
        </ElementsText>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useShadowsStore();
const gameState = computed(() => store.gameState);
const todayQuestions = computed(() => store.todayQuestions);
const questions = computed(() => store.shadows);
const currentAnswers = computed(
  () => questions.value[todayQuestions.value[0]].answers,
);
const currentAnswer = computed(() => store.currentAnswer);
</script>

<style scoped lang="scss">
.answers {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @include media(700px) {
    gap: 6px;
  }

  @media (max-height: 900px) {
    gap: 6px;
  }
}
.answer {
  position: relative;
  width: 326px;
  height: 13vw;
  max-height: 150px;
  min-height: 84px;

  @include media(750px) {
    width: 300px;
  }

  @include media(500px) {
    width: 260px;
    min-height: 55px;
  }

  @media (max-height: 900px) {
    width: 260px;
    max-height: 100px;
    min-height: 55px;
  }
}
.input {
  position: absolute;
  top: 0;
  opacity: 0;
}
.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 12px);
  height: calc(100% - 36px);
  padding: 23px;
  background-color: #ffffff;
  transition: all 0.1s;
  cursor: pointer;

  @include media(500px) {
    width: calc(100% - 5px);
    height: calc(100% - 15px);
    padding: 13px 16px;
    gap: 5px;
  }
}
.label p {
  font-size: 20px;
  color: #888888;
  transition: 0.1s;

  @include media(1000px) {
    font-size: 2vw;
  }

  @include media(700px) {
    font-size: 12px;
  }

  @media (max-height: 900px) {
    font-size: 12px;
  }
}
.labelActive p {
  color: #000;
}
.disabled {
  cursor: default;
}
.border-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  filter: contrast(30%) brightness(1.5);
}
.border-wrapper.active {
  filter: none;
}
.border {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.border:nth-of-type(1) {
  background-color: #000;
  width: calc(100% - 24px);
  height: 100%;

  @include media(500px) {
    width: calc(100% - 10px);
    height: 100%;
  }
}
.border:nth-of-type(2) {
  background-color: #000;
  width: calc(100% - 12px);
  height: calc(100% - 12px);

  @include media(500px) {
    width: calc(100% - 5px);
    height: calc(100% - 5px);
  }
}
.border:nth-of-type(3) {
  background-color: #000;
  width: 100%;
  height: calc(100% - 24px);

  @include media(500px) {
    width: 100%;
    height: calc(100% - 10px);
  }
}
.border:nth-of-type(4) {
  background-color: #a6a6a6;
  width: calc(100% - 12px);
  height: calc(100% - 24px);

  @include media(500px) {
    width: calc(100% - 5px);
    height: calc(100% - 10px);
  }
}
.border:nth-of-type(5) {
  background-color: #a6a6a6;
  width: calc(100% - 24px);
  height: calc(100% - 12px);

  @include media(500px) {
    width: calc(100% - 10px);
    height: calc(100% - 5px);
  }
}
.border:nth-of-type(6) {
  background-color: #cfcfcf;
  width: calc(100% - 24px);
  height: calc(100% - 24px);

  @include media(500px) {
    width: calc(100% - 10px);
    height: calc(100% - 10px);
  }
}
.corner {
  background-color: #cfcfcf;
  width: 6px;
  height: 6px;
  position: absolute;
  z-index: 3;

  @include media(500px) {
    width: 2.5px;
    height: 2.5px;
  }
}
.corner:nth-of-type(7) {
  top: 18px;
  left: 6px;

  @include media(500px) {
    top: 7.5px;
    left: 2.5px;
  }
}
.corner:nth-of-type(8) {
  top: 18px;
  right: 6px;

  @include media(500px) {
    top: 7.5px;
    right: 2.5px;
  }
}
.corner:nth-of-type(9) {
  bottom: 18px;
  left: 6px;

  @include media(500px) {
    bottom: 7.5px;
    left: 2.5px;
  }
}
.corner:nth-of-type(10) {
  bottom: 18px;
  right: 6px;

  @include media(500px) {
    bottom: 7.5px;
    right: 2.5px;
  }
}
</style>
