import $api from "~/http";

export const userData = defineStore("userData", {
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
      await Promise.allSettled([
        $api("api/user/get-id"),
        $api("api/user/get-name"),
        $api("api/user/get-email"),
        $api("api/user/get-avatar"),
        $api("api/user/get-total-products"),
        $api("api/user/get-balance"),
        $api("api/user/get-is-spin"),
        $api("api/user/get-is-blocked"),
      ]).then((res) => {
        res.forEach((el, index) => {
          this.userData[Object.keys(this.userData)[index]] = el.value.data;
        });
      });
    },
  },
});
