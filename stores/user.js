import $api from "@/http";

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
  });

  const cartItems = ref([]);

  const getCart = async () => {
    const { data } = await $api.get("cart");
    cartItems.value = data?.cartItems;
  };

  const addToCart = async (id) => {
    const formData = new FormData();
    formData.append("product_id", String(id));

    const res = await $api.post("cart", formData);

    if (res?.data) {
      await fetchUsers();
      await getCart();
    }
  };

  const deleteCartItem = async (id) => {
    const res = await $api.delete(`cart/${id}`);
    console.log(res);
    if (res?.data) {
      await fetchUsers();
      await getCart();
    }
  };

  const makeOrder = async () => {
    const formData = new FormData();
    formData.append("name", userData.value.nameUser);
    formData.append("email", userData.value.emailUser);

    const res = await $api.post("cart/order", formData);

    if (res?.data) {
      await fetchUsers();
      await getCart();
    }
  };

  const fetchUsers = async () => {
    const { data } = await $api.get("user");

    userData.value.idUser = data?.id;
    userData.value.nameUser = data?.name;
    userData.value.emailUser = data?.email;
    userData.value.avatarUser = data?.avatar;
    userData.value.productsUser = data?.total_products;
    userData.value.balanceUser = data?.balance;
    userData.value.isSpinUser = data?.already_spin;
    userData.value.isBlockedUser = data?.blocked;
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
