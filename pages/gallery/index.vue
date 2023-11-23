<script setup>
const userStore = useUserData();
const isLoading = ref(true);

onMounted(() => {
  userStore.fetchUsers().then(() => {
    isLoading.value = false;
  });
});

const prevOffsetY = ref(window.scrollY);
const isScrollingUp = ref(true);

window.onscroll = () => {
  const currentOffsetY = ref(window.scrollY);
  if (prevOffsetY.value > currentOffsetY.value) {
    isScrollingUp.value = true;
  } else {
    isScrollingUp.value = false;
  }

  prevOffsetY.value = currentOffsetY.value;
};

const isEventFinished = ref(
  await isToday("11/25/2023 00:00:01", "12/31/2023 23:59:59"),
);
</script>

<template>
  <NuxtLayout v-if="isEventFinished">
    <BlocksEventFinished />
  </NuxtLayout>
  <NuxtLayout v-if="!isLoading && !isEventFinished">
    <div class="wrapper-gallery">
      <ElementsHeaderCart :is-scrolling-up="isScrollingUp" />
      <ElementsHeaderProfile :is-scrolling-up="isScrollingUp" />
      <BlocksGalleryTitle />
      <BlocksGalleryPhotos />
      <BlocksGalleryButton />
    </div>
  </NuxtLayout>
  <ElementsSpinner v-if="isLoading && !isEventFinished" />
</template>

<style scoped lang="scss">
.wrapper-gallery {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
