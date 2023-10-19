<script setup>
const isAuth = ref(null);
const isLoading = ref(true);

onMounted(async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    if (!data.completed) {
      isAuth.value = true;
      // navigateTo("/");
      isLoading.value = false;
    } else {
      isAuth.value = false;
      // navigateTo("/auth");
      isLoading.value = false;
    }
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <NuxtLayout v-if="!isLoading" :name="isAuth ? 'default' : 'default'">
    <!-- 'auth' : 'default' -->
    <NuxtPage />
  </NuxtLayout>
</template>
