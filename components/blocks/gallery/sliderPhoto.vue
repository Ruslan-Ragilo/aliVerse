<template>
  <img
    v-show="!isLoading"
    :src="photoSrc"
    alt="photo"
    class="photo"
    @load="setIsLoading(false)"
  />
  <ElementsSpinner v-if="isLoading" />
</template>

<script setup lang="ts">
defineProps<{
  photoSrc: string;
}>();

const isLoading = ref(true);

const setIsLoading = (value: boolean) => {
  isLoading.value = value;
};
</script>

<style scoped lang="scss">
.photo {
  width: 100%;
  max-width: 70vw;
  max-height: 80vh;
  object-fit: cover;

  @include media(500px) {
    max-width: 80vw;
  }
}
</style>
