import $api from "~/http";

export const useFrogStore = defineStore("frog", () => {
  const isAvailable = ref(true);
  const isModalOpen = ref(false);
  const isFinished = ref(false);
  const results = ref(null);
  const gameScreen = ref<"welcome" | "game" | "finish">("welcome");

  function checkAvailability() {
    // const limit = await $api.get("/api/user/get-remained-event-limit", {
    //   params: {
    //     id: 5,
    //   },
    // });

    const limit = {
      data: 200,
    };

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

  async function finishGame() {
    isFinished.value = true;
    gameScreen.value = "finish";

    const formData = new FormData();
    formData.append("event_id", "5");
    formData.append("score", "100");

    // const limit = await $api.get("/api/user/get-remained-event-limit", {
    //   params: {
    //     id: 5,
    //   },
    // });

    const limit = {
      data: 100,
    };

    if (limit.data > 0) {
      const userStore = useUserData();

      await $api.post("/api/event/add", formData);
      await userStore.fetchUsers();
    }
  }

  return {
    checkAvailability,
    isAvailable,
    isModalOpen,
    isFinished,
    finishGame,
    results,
    gameScreen,
    openModal,
    closeModal,
    resetGame,
  };
});
