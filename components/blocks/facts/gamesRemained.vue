<template>
  <div class="games-remained">{{ gamesRemained }}/8</div>
</template>

<script setup lang="ts">
const store = useFactsStore();
const gamesRemained = computed(() => store.gamesRemained);
</script>

<style scoped lang="scss">
.games-remained {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  font-size: 32px;
  font-family: "Better Vcr";
  color: #fff;
  text-shadow: 4px 0 #934df9;
  letter-spacing: 5px;
}
</style>
