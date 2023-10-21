import $api from "~/http";

export const useWheelStore = defineStore("wheel", () => {
  const isAvailable = ref(true); // TODO запрос на бек с проверкой, можно ли крутить
  const isSpinning = ref(false);
  const currentRotation = ref(0);
  const gainedPoints = ref(0);
  const showModal = ref(false);

  function checkAvailability() {
    /* const limit = await $api.get("/api/user/get-remained-event-limit", {
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
    } */
    return true;
  }

  function handleSpin(wheelElement: HTMLImageElement | undefined) {
    checkAvailability();

    if (isAvailable.value) {
      isSpinning.value = true;

      // TODO из полученных монет рассчитать время
      // const fortunaRes = await $api.get("/api/event/fortuna");
      /*  const fortunaRes = 0;
      const sectorSpinTime = 300;
      const spinningSectors = fortunaRes / 50;
      const spinningTime = spinningSectors * sectorSpinTime;
      console.log(spinningTime); */

      const spinningTime = Math.random() * (5000 - 1000) + 1000;

      setTimeout(() => {
        if (wheelElement) {
          const style = window.getComputedStyle(wheelElement);
          const matrix = new DOMMatrix(style.transform);
          const currentAngle =
            (Math.atan2(matrix.b, matrix.a) * (180 / Math.PI)) % 360;
          currentRotation.value = currentAngle;
        }

        const points =
          (Math.round((360 - currentRotation.value) / 36) % 10) * 50;
        gainedPoints.value = points;
      }, spinningTime);

      setTimeout(() => {
        isSpinning.value = false;
        showModal.value = true;
      }, spinningTime + 500);
    }
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
    checkAvailability,
    handleSpin,
    openModal,
    closeModal,
  };
});
