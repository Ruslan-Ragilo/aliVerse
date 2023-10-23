<template>
  <div class="question-wrapper">
    <ElementsText themes="mustard-light" size="xl">{{
      questions[currentQuestion].question
    }}</ElementsText>
    <div class="question-image">
      <img
        v-show="!isLoading"
        class="gif"
        :src="getImageUrl(`gif/testopolis/${currentQuestion}.gif`)"
        alt=""
        @load="setIsLoading(false)"
      />
      <ElementsSpinner v-if="isLoading" />
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useTestopolisStore();
const questions = computed(() => store.questions);
const currentQuestion: ComputedRef<number> = computed(
  () => store.currentQuestion,
);

const isLoading = ref(true);
const setIsLoading = (value: boolean) => {
  isLoading.value = value;
};

watch(
  () => currentQuestion.value,
  () => {
    setIsLoading(true);
  },
);
</script>

<style scoped lang="scss">
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

  @include media(700px) {
    p {
      font-size: 20px;
    }
  }
}
.question-image {
  position: relative;
  width: 288px;
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
  }

  @include media(500px) {
    width: 158px;
  }
}

.gif {
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  object-position: bottom;
}
</style>
