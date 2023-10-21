import $api from "@/http";

export const useUserData = defineStore("userData", {
  state: () => ({
    userData: {
      idUser: "",
      nameUser: "",
      emailUser: "",
      avatarUser: "",
      productsUser: "",
      balanceUser: "",
      isSpinUser: "",
      isBlockedUser: "",
    },
  }),
  getters: {},
  actions: {
    async fetchUsers() {
      const [
        id,
        name,
        email,
        avatar,
        totalProducts,
        balance,
        isSpin,
        isBlocked,
      ] = await Promise.allSettled([
        $api("api/user/get-id"),
        $api("api/user/get-name"),
        $api("api/user/get-email"),
        $api("api/user/get-avatar"),
        $api("api/user/get-total-products"),
        $api("api/user/get-balance"),
        $api("api/user/get-is-spin"),
        $api("api/user/get-is-blocked"),
      ]);

      this.userData.idUser = id?.value?.data;
      this.userData.nameUser = name?.value?.data;
      this.userData.emailUser = email?.value?.data;
      this.userData.avatarUser = avatar?.value?.data;
      this.userData.productsUser = totalProducts?.value?.data;
      this.userData.balanceUser = balance?.value?.data;
      this.userData.isSpinUser = isSpin?.value?.data;
      this.userData.isBlockedUser = isBlocked?.value?.data;
    },
  },
});
