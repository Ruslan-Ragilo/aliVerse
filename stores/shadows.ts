import $api from "~/http";
import { shadowsData } from "~/stores/shadowsData/shadowsData";

export const useShadowsStore = defineStore("shadows", () => {
  const isAvailable = ref(false);
  const isModalOpen = ref(false);
  const isFinished = ref(false);
  const gameState = ref<"default" | "right" | "wrong">("default");
  const gameScreen = ref<"welcome" | "rules" | "game" | "finish">("welcome");
  const gamesRemained = ref(5);
  const currentCoins = ref(0);
  const shadows = ref(shadowsData);
  const todayQuestions = ref<number[]>([]);
  const currentAnswer = ref<string | null>(null);

  async function checkAvailability() {
    const limit = await $api.get("/api/user/get-remained-event-limit", {
      params: {
        id: 3,
      },
    });

    try {
      if (limit.data > 0) {
        isAvailable.value = true;
      } else if (limit.data === 0) {
        isAvailable.value = false;
      }
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        console.log(`Catched error code "${error.code}".`);
      }
    }
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

  async function finishGame() {
    isFinished.value = true;
    gameScreen.value = "finish";

    const formData = new FormData();
    formData.append("event_id", "3");
    formData.append("score", currentCoins.value.toString());

    const limit = await $api.get("/api/user/get-remained-event-limit", {
      params: {
        id: 3,
      },
    });

    if (limit.data > 0) {
      const userStore = useUserData();

      await $api.post("/api/event/add", formData);
      await userStore.fetchUsers();
    }
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
    currentCoins.value += 60;
  }

  function getCoins() {
    return currentCoins.value;
  }

  return {
    isAvailable,
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
