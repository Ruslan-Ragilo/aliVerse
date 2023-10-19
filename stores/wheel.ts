export const useWheelStore = defineStore("wheel", () => {
  const isAvailable = ref(true); // TODO запрос на бек с проверкой, можно ли крутить
  const isSpinning = ref(false);
  const currentRotation = ref(0);
  const gainedPoints = ref(0);
  const showModal = ref(false);

  function handleSpin(wheelElement: HTMLImageElement | undefined) {
    isSpinning.value = true;
    const spinningTime = Math.random() * (5000 - 1000) + 1000;

    // TODO добавить взаимодествие с беком

    setTimeout(() => {
      if (wheelElement) {
        const style = window.getComputedStyle(wheelElement);
        const matrix = new DOMMatrix(style.transform);
        const currentAngle =
          (Math.atan2(matrix.b, matrix.a) * (180 / Math.PI)) % 360;
        currentRotation.value = currentAngle;
      }

      const points = (Math.round((360 - currentRotation.value) / 36) % 10) * 50;
      gainedPoints.value = points;
    }, spinningTime);

    setTimeout(() => {
      isSpinning.value = false;
      showModal.value = true;
    }, spinningTime + 500);
  }

  function openModal() {
    showModal.value = true;
  }

  function closeModal() {
    showModal.value = false;
  }

  return {
    isAvailable,
    isSpinning,
    currentRotation,
    gainedPoints,
    showModal,
    handleSpin,
    openModal,
    closeModal,
  };
});
