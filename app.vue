<script setup>
const authStore = useAuth();

watch(
  () => authStore.isAuth,
  () => setPageLayout(authStore.isAuth ? "default" : "auth"),
);

definePageMeta({
  layout: false,
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
