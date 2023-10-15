import { questionsData } from "~/stores/testopolisData/questionsData";
import { resultsData } from "~/stores/testopolisData/resultsData";
import { gifsData } from "~/stores/testopolisData/gifsData";

export const useTestopolisStore = defineStore("testopolis", () => {
  const isModalOpen = ref(false);
  const questions = ref(questionsData);
  const gifs = ref(gifsData);
  const results = ref(resultsData);
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

  function openModal() {
    isModalOpen.value = true;
  }

  function closeModal() {
    isModalOpen.value = false;
  }

  function resetGame() {
    isCompleted.value = false;
    currentQuestion.value = 1;
    currentAnswers.value = {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
    };
  }

  return {
    isModalOpen,
    questions,
    gifs,
    results,
    isCompleted,
    currentQuestion,
    currentAnswers,
    addAnswer,
    nextQuestion,
    prevQuestion,
    openModal,
    closeModal,
    resetGame,
  };
});
