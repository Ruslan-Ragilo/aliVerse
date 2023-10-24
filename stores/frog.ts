import $api from "~/http";

export const useFrogStore = defineStore("frog", () => {
  const isAvailable = ref(false);
  const isModalOpen = ref(false);
  const isFinished = ref(false);
  const results = ref(null);
  const gameScreen = ref<"welcome"| "game" | "finish">("welcome");

  async function checkAvailability() {
    const limit = await $api.get("/api/user/get-remained-event-limit", {
      params: {
        id: 4,
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

  function openModal() {
    isModalOpen.value = true;
  }

  function closeModal() {
    isModalOpen.value = false;
  }

  function resetGame() {
    // currentCoins.value = 0;
    // gamesRemained.value = 5;
    isFinished.value = false;
    // gameState.value = "default";
    gameScreen.value = "welcome";
    // currentAnswer.value = null;
  }

  return {
    checkAvailability,
    isAvailable,
    isModalOpen,
    isFinished,
    results,
    gameScreen,
    openModal,
    closeModal,
    resetGame,
  };
});