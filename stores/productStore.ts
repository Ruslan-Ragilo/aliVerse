import { Product } from "~/components/elements/SwiperSlide.vue";
import $api from "~/http";

export const useProductStore = defineStore("product", () => {
  const isModalOpen = ref(false);
  const openProduct = ref<string | null>(null);
  const selectedLocation = ref<number | null>(null);
  const isHintVisible = ref(false);
  const isSoldHintVisible = ref(false);
  const inStock = ref(true);
  const allProducts = ref<Product[]>([]);

  const openModal = (product: string) => {
    isModalOpen.value = true;
    openProduct.value = product;
  };

  const closeModal = () => {
    isModalOpen.value = false;
    openProduct.value = null;
    selectedLocation.value = null;
    isHintVisible.value = false;
    isSoldHintVisible.value = false;
    inStock.value = true;
  };

  const setSelectedLocation = (value: number) => {
    selectedLocation.value = value;
    isHintVisible.value = false;
    isSoldHintVisible.value = false;
  };

  const showHint = () => {
    isHintVisible.value = true;
  };

  const showSoldHint = () => {
    isSoldHintVisible.value = true;
  };

  const setStock = (value: boolean) => {
    inStock.value = value;
  };

  const getAllProducts = async () => {
    const { data } = await $api("api/product/show-all");
    allProducts.value = data.products;
  };

  return {
    isModalOpen,
    openProduct,
    selectedLocation,
    isHintVisible,
    isSoldHintVisible,
    inStock,
    allProducts,
    openModal,
    closeModal,
    setSelectedLocation,
    showHint,
    setStock,
    getAllProducts,
    showSoldHint,
  };
});
