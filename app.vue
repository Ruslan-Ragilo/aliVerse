<script setup>
const userStore = useUserData();
const isLoading = ref(true);

onMounted(() => {
  userStore.fetchUsers().then(() => {
    isLoading.value = false;
  });
});
</script>

<template>
  <NuxtLayout v-if="!isLoading">
    <NuxtPage />
  </NuxtLayout>
  <ElementsSpinner color="red" v-else />
</template>
