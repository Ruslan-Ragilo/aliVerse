import $api from "~/http";

export const storageTokenKey = "aliverse_token";

export const useAuth = defineStore("auth", {
  state: () => ({
    isAuth: false,
    isReadyData: false,
    isLoginSuccess: false,
    isRegisterSuccess: false,
  }),
  getters: {
    getIsReadyData: (state) => state.isReadyData,
    getIsAuth: (state) => state.isAuth,
    getRegisterSuccess: (state) => state.isRegisterSuccess,
  },
  actions: {
    async login(email, password) {
      if (localStorage.getItem(storageTokenKey) === "null") {
        localStorage.removeItem(storageTokenKey);
      }

      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const res = await $api.post("/auth/login", formData);

      if (!res?.data) {
        this.isAuth = false;
        this.isLoginSuccess = false;
        localStorage.removeItem(storageTokenKey);
        return;
      }

      // HANDLE ERROR
      const token = res?.data;
      if (token) {
        this.isAuth = true;
        this.isLoginSuccess = true;
        localStorage.setItem(storageTokenKey, JSON.stringify(token));
      } else {
        this.isAuth = false;
        this.isLoginSuccess = false;
        localStorage.removeItem(storageTokenKey);
      }
    },

    async registration(email, password, name, avatar) {
      if (localStorage.getItem(storageTokenKey) === "null") {
        localStorage.removeItem(storageTokenKey);
      }

      const formData = new FormData();
      formData.append("avatar", avatar);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);

      const res = await $api.post("/auth/register", formData);

      if (!res?.data) {
        this.isAuth = false;
        localStorage.removeItem(storageTokenKey);
        return;
      }

      if (res?.data) {
        this.isRegisterSuccess = true;
        // REDIRECT TO SUCCESS PAGE
      }
    },

    logout() {
      localStorage.removeItem(storageTokenKey);
      navigateTo("/auth");
    },

    setIsReadyData(value) {
      this.isReadyData = value;
    },

    checkIsAuth() {
      if (localStorage.getItem(storageTokenKey)) {
        this.isAuth = true;
      }
    },
  },
});
