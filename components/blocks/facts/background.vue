<template>
  <img
    v-if="gameState === 'default'"
    class="bg-image"
    :class="gameScreen"
    src="~/assets/images/png/facts/bg-purple.png"
    alt=""
    draggable="false"
  />
  <img
    v-if="gameState === 'right'"
    class="bg-image"
    :class="gameScreen"
    src="~/assets/images/png/facts/bg-green.png"
    alt=""
    draggable="false"
  />
  <img
    v-if="gameState === 'wrong'"
    class="bg-image"
    :class="gameScreen"
    src="~/assets/images/png/facts/bg-red.png"
    alt=""
    draggable="false"
  />
</template>

<script setup lang="ts">
const store = useFactsStore();
const gameState = computed(() => store.gameState);
const gameScreen = computed(() => store.gameScreen);
</script>

<style scoped lang="scss">
.bg-image {
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  aspect-ratio: 1/1;
}
.game {
  top: 50%;
  transform: scale(1.2);
}
</style>
