import { questionsData } from "~/stores/testopolisData/questionsData";
import { resultsData } from "~/stores/testopolisData/resultsData";
import { gifsData } from "~/stores/testopolisData/gifsData";

export const useTestopolisStore = defineStore("testopolis", () => {
  const isModalOpen = ref(false);
  const questions = ref(questionsData);
  const gifs = ref(gifsData);
  const results = ref(resultsData);
  const finalResult = ref<number | null>(null);
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
      getResult();
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
    finalResult.value = null;
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

  function getResult() {
    const answers = Object.values(currentAnswers.value);
    const amount1 = answers.filter((el) => el?.toString() === "1").length;
    const amount2 = answers.filter((el) => el?.toString() === "2").length;
    const amount3 = answers.filter((el) => el?.toString() === "3").length;
    const amount4 = answers.filter((el) => el?.toString() === "4").length;

    if (amount1 > amount2 && amount1 > amount3 && amount1 > amount4)
      finalResult.value = 1;
    else if (amount2 > amount1 && amount2 > amount3 && amount2 > amount4)
      finalResult.value = 2;
    else if (amount3 > amount1 && amount3 > amount2 && amount3 > amount4)
      finalResult.value = 3;
    else if (amount4 > amount1 && amount4 > amount2 && amount4 > amount3)
      finalResult.value = 4;
    else if (amount1 > 1 && amount2 > 1) finalResult.value = 5;
    else if (amount1 > 1 && amount3 > 1) finalResult.value = 6;
    else if (amount1 > 1 && amount4 > 1) finalResult.value = 7;
    else if (amount2 > 1 && amount3 > 1) finalResult.value = 8;
    else if (amount2 > 1 && amount4 > 1) finalResult.value = 9;
    else if (amount3 > 1 && amount4 > 1) finalResult.value = 10;
    else finalResult.value = 10;
  }

  return {
    isModalOpen,
    questions,
    gifs,
    results,
    finalResult,
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
