import $api from "~/http";

const storageTokenKey = "aliverse_token";

export const useAuth = defineStore("auth", {
  state: () => ({
    isAuth: false,
    isReadyData: false,
  }),
  getters: {
    getIsReadyData: (state) => state.isReadyData,
  },
  actions: {
    async login(email, password) {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const res = await $api.post("/auth/login", formData);

      if (!res?.data) {
        this.isAuth = false;
        localStorage.removeItem(storageTokenKey);
      }

      // HANDLE ERROR

      const token = res?.data?.$user?.token;
      if (token) {
        localStorage.setItem(storageTokenKey, JSON.stringify(token));
        this.isAuth = true;
      } else {
        this.isAuth = false;
        localStorage.removeItem(storageTokenKey);
      }
    },

    async registration(email, password, name, avatar) {
      const formData = new FormData();
      formData.append("avatar", avatar);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);

      const res = await $api.post("/auth/register", formData);

      if (!res?.data) {
        this.isAuth = false;
        localStorage.removeItem(storageTokenKey);
      }

      // HANDLE ERROR
      console.log(res);

      const token = res?.data?.$user?.token;
      if (token) {
        localStorage.setItem(storageTokenKey, JSON.stringify(token));
        this.isAuth = true;
      } else {
        this.isAuth = false;
        localStorage.removeItem(storageTokenKey);
      }
    },

    setIsReadyData(value) {
      this.isReadyData = value;
    },
  },
});
