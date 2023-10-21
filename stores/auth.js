import $api from "~/http";

const storageTokenKey = "aliverse_token";

export const useAuth = defineStore("auth", {
  state: () => ({
    isAuth: false,
    isReadyData: false,
    isLoginSuccess: false,
    isRegisterSuccess: false,
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

    checkIsAuth() {
      if (localStorage.getItem(storageTokenKey)) {
        this.isAuth = true;
      }
    },
  },
});
