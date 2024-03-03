import $api from "~/http";

export const useWheelStore = defineStore("wheel", () => {
  const isAvailable = ref(true);
  const isSpinning = ref(false);
  const currentRotation = ref(0);
  const gainedPoints = ref(0);
  const showModal = ref(false);

  async function checkAvailability() {
    // const limit = await $api.get("/api/user/get-remained-event-limit", {
    //   params: {
    //     id: 4,
    //   },
    // });

    const limit = {
      data: 1,
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

  async function handleSpin(wheelElement: HTMLImageElement | undefined) {
    checkAvailability();

    if (isAvailable.value) {
      const sectorSpinTime = 300;
      const spinningSectors = 100 / 50 + 10;
      const spinningTime = spinningSectors * sectorSpinTime;
      isSpinning.value = true;

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
        isSpinning.value = false;
        isAvailable.value = false;

        const userStore = useUserData();
        userStore.fetchUsers();
      }, spinningTime);

      setTimeout(() => {
        showModal.value = true;
        checkAvailability();
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
