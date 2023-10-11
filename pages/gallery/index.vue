<template>
  <NuxtLayout>
    <div class="wrapper-gallery">
      <BlocksGalleryHeader />
      <BlocksGalleryTitle />
      <BlocksGalleryPhotos />
      <BlocksGalleryButton />
    </div>
  </NuxtLayout>
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
