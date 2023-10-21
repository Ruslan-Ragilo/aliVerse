import $api from "~/http";
import { factsData } from "~/stores/factsData/factsData";

export const useFactsStore = defineStore("facts", () => {
  const isAvailable = ref(false);
  const isModalOpen = ref(false);
  const isFinished = ref(false);
  const gameState = ref<"default" | "right" | "wrong">("default");
  const gameScreen = ref<"welcome" | "rules" | "game" | "finish">("welcome");
  const gamesRemained = ref(8);
  const currentCoins = ref(0);
  const facts = ref(factsData);
  const todayQuestions = ref<number[]>([]);
  const currentAnswer = ref<boolean | null>(null);

  async function checkAvailability() {
    const res = await $api.get("/api/event/view", {
      params: {
        id: 2,
      },
    });

    try {
      if (res.data.limit > 0) {
        isAvailable.value = true;
      } else if (res.data.limit === 0) {
        isAvailable.value = false;
      }
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        console.log(`Catched error code "${error.code}".`);
      }
    }
  }

  function getTodayQuestions() {
    const maxNumber = Object.keys(facts.value).length;
    const count = gamesRemained.value;
    const availableNumbers: Set<number> = new Set();
    while (availableNumbers.size < count) {
      const randomNum = Math.ceil(Math.random() * maxNumber);
      availableNumbers.add(randomNum);
    }
    todayQuestions.value = [...availableNumbers];
  }

  function addCurrentAnswer(answer: boolean) {
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

    const formData = new FormData();
    formData.append("id", "2");
    formData.append("score", currentCoins.value);

    /*    await $api.post("/api/event/add", {
      params: {
        id: 2,
        score: currentCoins.value,
      },
    });
    const res = await $api.get("/api/event/view", {
      params: {
        id: 2,
      },
    });
    console.log(res.data); */
  }

  function resetGame() {
    currentCoins.value = 0;
    gamesRemained.value = 8;
    isFinished.value = false;
    gameState.value = "default";
    gameScreen.value = "welcome";
    currentAnswer.value = null;
  }

  function addCoins() {
    currentCoins.value += 50;
  }

  function getCoins() {
    // TODO запрос на бек
    return 300;
  }

  return {
    isAvailable,
    isModalOpen,
    isFinished,
    gameState,
    gameScreen,
    gamesRemained,
    facts,
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
