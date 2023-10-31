export const useProductStore = defineStore("product", () => {
  const isModalOpen = ref(false);
  const openProduct = ref<string | null>(null);
  const selectedLocation = ref<number | null>(null);
  const isHintVisible = ref(false);
  const inStock = ref(true);

  const openModal = (product: string) => {
    isModalOpen.value = true;
    openProduct.value = product;
  };

  const closeModal = () => {
    isModalOpen.value = false;
    openProduct.value = null;
    selectedLocation.value = null;
    isHintVisible.value = false;
    inStock.value = true;
  };

  const setSelectedLocation = (value: number) => {
    selectedLocation.value = value;
    isHintVisible.value = false;
  };

  const showHint = () => {
    isHintVisible.value = true;
  };

  const setStock = (value: boolean) => {
    inStock.value = value;
  };

  return {
    isModalOpen,
    openProduct,
    selectedLocation,
    isHintVisible,
    inStock,
    openModal,
    closeModal,
    setSelectedLocation,
    showHint,
    setStock,
  };
});