export const useTestopolisStore = defineStore("testopolis", () => {
  const questions = ref(questionsData);
  const results = ref({});
  const isCompleted = ref(false);
  const currentQuestion = ref(1);
  const currentAnswers = ref<Record<number, number | null>>({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
  });

  function addAnswer(currentQuestion: number, answer: number) {
    currentAnswers.value[currentQuestion] = answer;
  }

  function nextQuestion() {
    if (currentQuestion.value < Object.keys(questions.value).length) {
      currentQuestion.value++;
    } else {
      isCompleted.value = true;
    }
  }

  function prevQuestion() {
    if (currentQuestion.value > 1) {
      currentQuestion.value--;
    }
  }

  return {
    questions,
    results,
    isCompleted,
    currentQuestion,
    currentAnswers,
    addAnswer,
    nextQuestion,
    prevQuestion,
  };
});
