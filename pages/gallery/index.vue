<script setup>
const userStore = useUserData();
const isLoading = ref(true);

onMounted(() => {
  userStore.fetchUsers().then(() => {
    isLoading.value = false;
    document.querySelector("body").style.backgroundColor = "#17102a";
    document.querySelector("body").style.backgroundSize = "contain";
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
</script>

<template>
  <NuxtLayout v-if="!isLoading">
    <div class="wrapper-gallery">
      <ElementsHeaderCart :is-scrolling-up="isScrollingUp" />
      <ElementsHeaderProfile :is-scrolling-up="isScrollingUp" />
      <BlocksGalleryTitle />
      <BlocksGalleryPhotos />
      <BlocksGalleryButton />
    </div>
  </NuxtLayout>
  <ElementsSpinner v-else />
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
