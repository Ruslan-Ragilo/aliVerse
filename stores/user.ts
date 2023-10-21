import $api from "~/http";

export const userData = defineStore("userData", {
  state: () => ({
    user: [],
  }),
  getters: {},
  actions: {
    async fetchUsers() {
      await $api("api/user/get-id").then((res) => {
        console.log(res);
      });
    },
  },
});
