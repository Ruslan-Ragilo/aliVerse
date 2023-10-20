import { shadowsData } from "~/stores/shadowsData/shadowsData";

export const useShadowsStore = defineStore("shadows", () => {
  const isModalOpen = ref(false);
  const isFinished = ref(false);
  const gameState = ref<"default" | "right" | "wrong">("default");
  const gameScreen = ref<"welcome" | "rules" | "game" | "finish">("welcome");
  const gamesRemained = ref(5);
  const currentCoins = ref(0);
  const shadows = ref(shadowsData);
  const todayQuestions = ref<number[]>([]);
  const currentAnswer = ref<string | null>(null);

  function checkAvailability() {
    // TODO запрос на проверку доступности игры сегодня
    return true;
  }

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

  function decreaseGamesRemained() {
    if (gamesRemained.value > 0) {
      gamesRemained.value--;
    }
  }

  function finishGame() {
    isFinished.value = true;
    gameScreen.value = "finish";
    // TODO отправлять currentCoins.value на бек
    // TODO сообщать, что попытка на сегодня завершена
  }

  function resetGame() {
    currentCoins.value = 0;
    gamesRemained.value = 5;
    isFinished.value = false;
    gameState.value = "default";
    gameScreen.value = "welcome";
    currentAnswer.value = null;
  }

  function addCoins() {
    currentCoins.value += 100;
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
    checkAvailability,
    openModal,
    closeModal,
    resetGame,
    getTodayQuestions,
    addCurrentAnswer,
    changeGameState,
    nextGame,
    decreaseGamesRemained,
    finishGame,
    addCoins,
    getCoins,
  };
});
