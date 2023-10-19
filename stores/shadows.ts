import { shadowsData } from "~/stores/shadowsData/shadowsData";

export const useShadowsStore = defineStore("shadows", () => {
  const isModalOpen = ref(false);
  const isFinished = ref(false);
  const gameState = ref<"default" | "right" | "wrong">("default");
  const gameScreen = ref<"welcome" | "rules" | "game" | "finish">("welcome");
  const gamesRemained = ref(5); // TODO запрос на лимит игры
  const shadows = ref(shadowsData);
  const todayQuestions = ref<number[]>([]);
  const currentAnswer = ref<string | null>(null);

  function getTodayQuestions() {
    const maxNumber = Object.keys(shadows.value).length;
    const count = gamesRemained.value;
    const availableNumbers: Set<number> = new Set();
    while (availableNumbers.size < count) {
      const randomNum = Math.ceil(Math.random() * maxNumber);
      availableNumbers.add(randomNum);
    }
    todayQuestions.value = [...availableNumbers];
  }

  function addCurrentAnswer(answer: string) {
    currentAnswer.value = answer;
  }

  function openModal() {
    isModalOpen.value = true;
  }

  function closeModal() {
    resetGame();
    isModalOpen.value = false;
  }

  function changeGameState(state: "default" | "right" | "wrong") {
    gameState.value = state;
  }

  function nextGame() {
    todayQuestions.value.shift();
    currentAnswer.value = null;
  }

  function finishGame() {
    isFinished.value = true;
    gameScreen.value = "finish";
  }

  function resetGame() {
    isFinished.value = false;
    gameState.value = "default";
    gameScreen.value = "welcome";
    currentAnswer.value = null;
  }

  function getCoins() {
    // TODO запрос на бек
    return 300;
  }

  return {
    isModalOpen,
    isFinished,
    gameState,
    gameScreen,
    gamesRemained,
    shadows,
    todayQuestions,
    currentAnswer,
    openModal,
    closeModal,
    resetGame,
    getTodayQuestions,
    addCurrentAnswer,
    changeGameState,
    nextGame,
    finishGame,
    getCoins,
  };
});
