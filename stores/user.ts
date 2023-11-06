import $api from "@/http";

export interface CartItem {
  cart_form_id: number;
  date: string;
  id: number;
  price: number | null;
  product: {
    id: number;
    name: string;
    image: string | null;
    price: number;
    ali_price: number;
  };
  product_id: number;
  quantity: number | null;
  user_id: number;
}

export const useUserData = defineStore("userData", () => {
  const userData = ref({
    idUser: "",
    nameUser: "",
    emailUser: "",
    avatarUser: "",
    productsUser: "",
    balanceUser: "",
    isSpinUser: "",
    isBlockedUser: "",
    isLoading: false,
    totalProducts: "",
  });

  const cartItems = ref<CartItem[]>([]);

  const getCart = async () => {
    const { data } = await $api.get("cart");
    cartItems.value = data?.cartItems;
  };

  const addToCart = async (id: number) => {
    const formData = new FormData();
    formData.append("product_id", String(id));

    const res = await $api.post("cart", formData);
    if (res?.data) {
      await fetchUsers();
      await getCart();
    }
  };

  const deleteCartItem = async (id: number) => {
    const res = await $api.delete(`cart/${id}`);
    if (res?.data) {
      await fetchUsers();
      await getCart();
    }
  };

  const makeOrder = async () => {
    const formData = new FormData();
    formData.append("name", userData.value.nameUser);
    formData.append("phone", "");
    formData.append("email", userData.value.emailUser);
    formData.append("office", "");
    formData.append("city", "");
    formData.append("index", "");
    formData.append("address", "");

    const res = await $api.post("cart/order", formData);

    if (res?.data) {
      await fetchUsers();
      await getCart();
    }
  };

  const fetchUsers = async () => {
    await $api.get("user").then((data) => {
      userData.value.idUser = data.data?.id;
      userData.value.nameUser = data.data?.name;
      userData.value.emailUser = data.data?.email;
      userData.value.avatarUser = data.data?.avatar;
      userData.value.productsUser = data.data?.total_products;
      userData.value.balanceUser = data.data?.balance;
      userData.value.isSpinUser = data.data?.already_spin;
      userData.value.isBlockedUser = data.data?.blocked;
      userData.value.totalProducts = data.data?.total_products;
    });
  };

  return {
    userData,
    fetchUsers,
    cartItems,
    getCart,
    addToCart,
    makeOrder,
    deleteCartItem,
  };
});
