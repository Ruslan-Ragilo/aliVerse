<script setup>
const authStore = useAuth();
</script>

<template>
  <NuxtLayout :name="authStore.isAuth ? 'default' : 'auth'">
    <NuxtPage />
  </NuxtLayout>
</template>
