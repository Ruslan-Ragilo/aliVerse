<template>
  <BlocksFrogFirstWeek />
</template>

<script setup lang="ts">
const store = useFrogStore();
const gameState = computed(() => store.gameState);
</script>

<style scoped lang="scss">
.bg-image {
  position: absolute;
  height: 100%;
  aspect-ratio: 3/2;
}
</style>
