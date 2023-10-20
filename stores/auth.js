import $api from "~/http";

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
      await $api.post("/auth/login", { email, password }).then((res) => {
        localStorage.setItem("token", res.data.$user.token);
        this.isAuth = true;
      });
    },

    registration(email, password, name, avatar) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const formdata = new FormData();
      formdata.append("avatar", "svg/iconProfile/defaultAvatar.svg");
      formdata.append("name", "Ruslan");
      formdata.append("email", "ruslanragilo7@gmail.com");
      formdata.append("password", "1111");

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      fetch("http://api.aliverse.ru/auth/register", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    },

    setIsReadyData(value) {
      this.isReadyData = value;
    },
  },
});
