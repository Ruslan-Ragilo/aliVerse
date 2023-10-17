export const useShadowsStore = defineStore("shadows", () => {
  const isModalOpen = ref(false);
  const gameState = ref<"default" | "right" | "wrong">("default");
  const gameScreen = ref<"welcome" | "rules" | "game">("welcome");

  function openModal() {
    isModalOpen.value = true;
  }

  function closeModal() {
    isModalOpen.value = false;
  }

  function resetGame() {
    gameState.value = "default";
    gameScreen.value = "welcome";
  }

  return {
    isModalOpen,
    gameState,
    gameScreen,
    openModal,
    closeModal,
    resetGame,
  };
});
