<script setup>
const authStore = useAuth();
const userStore = userData();

onMounted(() => {
  userStore.fetchUsers();
});
</script>

<template>
  <NuxtLayout :name="authStore.isAuth ? 'default' : 'auth'">
    <NuxtPage />
  </NuxtLayout>
</template>
