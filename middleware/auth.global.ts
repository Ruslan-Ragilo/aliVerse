export default defineNuxtRouteMiddleware((to) => {
  // skip middleware on server
  if (process.server) return;

  const authStore = useAuth();
  authStore.checkIsAuth();

  if (authStore.isAuth) {
    return;
  }

  if (
    !authStore.isAuth &&
    to.fullPath !== "/auth/login" &&
    to.fullPath !== "/auth/registration" &&
    to.fullPath !== "/auth"
  ) {
    return navigateTo("/auth");
  }
});
