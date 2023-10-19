<template>
  <img
    v-if="gameState === 'default'"
    class="bg-image"
    src="~/assets/images/png/shadows/bg-blue.png"
    alt=""
    draggable="false"
  />
  <img
    v-if="gameState === 'right'"
    class="bg-image"
    src="~/assets/images/png/shadows/bg-green.png"
    alt=""
    draggable="false"
  />
  <img
    v-if="gameState === 'wrong'"
    class="bg-image"
    src="~/assets/images/png/shadows/bg-red.png"
    alt=""
    draggable="false"
  />
</template>

<script setup lang="ts">
const store = useShadowsStore();
const gameState = computed(() => store.gameState);
</script>

<style scoped lang="scss">
.bg-image {
  position: absolute;
  height: 100%;
  aspect-ratio: 3/2;
}
</style>
