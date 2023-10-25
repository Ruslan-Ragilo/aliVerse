<template>
  <img
    v-show="!isLoading"
    class="photo"
    :src="photoSrc"
    alt="photo"
    draggable="false"
    @load="setIsLoading(false)"
    @click="onClick(index)"
  />
  <ElementsSpinner v-if="isLoading" />
</template>

<script setup lang="ts">
defineProps<{
  photoSrc: string;
  index: number;
  onClick: (index: number) => void;
}>();

const isLoading = ref(true);

const setIsLoading = (value: boolean) => {
  isLoading.value = value;
};
</script>

<style scoped lang="scss">
.photo {
  width: 410px;
  aspect-ratio: 3/2;
  cursor: pointer;

  @include media(1100px) {
    width: 330px;
  }

  @include media(500px) {
    width: 275px;
  }
}
</style>
