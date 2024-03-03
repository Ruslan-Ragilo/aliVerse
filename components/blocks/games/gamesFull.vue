<template>
  <div class="wrapper-games">
    <div class="left-game game">
      <img
        class="game-image"
        src="~/assets/images/png/games/facts-game.png"
        alt="Сила знаний"
      />
      <img
        class="portal"
        src="~/assets/images/png/games/portal.png"
        alt=""
        draggable="false"
      />
      <ElementsPixelButton
        color="red"
        size="mini"
        :disabled="!isFactsAvailable"
        @click="handleFactsClick"
      >
        Играть
      </ElementsPixelButton>
    </div>
    <div class="middle-game game">
      <img
        class="game-image"
        src="~/assets/images/png/games/fall-game.png"
        alt="Товаропад"
      />
      <img
        class="portal"
        src="~/assets/images/png/games/portal.png"
        alt=""
        draggable="false"
      />
      <ElementsPixelButton
        color="red"
        size="mini"
        :disabled="!isFallAvailable"
        @click="handleFallClick"
      >
        Играть
      </ElementsPixelButton>
    </div>
    <div class="right-game game">
      <img
        class="game-image"
        src="~/assets/images/png/games/shadows-game.png"
        alt="Тайны галактики"
      />
      <img
        class="portal"
        src="~/assets/images/png/games/portal.png"
        alt=""
        draggable="false"
      />
      <ElementsPixelButton
        color="red"
        size="mini"
        :disabled="!isShadowsAvailable"
        @click="handleShadowsClick"
      >
        Играть
      </ElementsPixelButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const fallStore = useFallStore();
const factsStore = useFactsStore();
const shadowsStore = useShadowsStore();

const isShadowsAvailable = ref(true);
const isFactsAvailable = ref(true);
const isFallAvailable = ref(true);

const openShadowsModal = () => {
  if (isShadowsAvailable.value) {
    shadowsStore.openModal();
  }
};
const openFactsModal = () => {
  if (isFactsAvailable.value) {
    factsStore.openModal();
  }
};
const openFallModal = () => {
  if (isFallAvailable.value) {
    fallStore.openModal();
  }
};

const handleShadowsClick = () => {
  if (isShadowsAvailable.value) {
    openShadowsModal();
  }
};
const handleFactsClick = () => {
  if (isFactsAvailable.value) {
    openFactsModal();
  }
};
const handleFallClick = () => {
  if (isFallAvailable.value) {
    openFallModal();
  }
};

// TODO удалить код ниже и раскомментировать следующий!
/* const isFactsAvailable = ref(true);
const isFallAvailable = ref(true);
const isShadowsAvailable = ref(true); */
</script>

<style lang="scss" scoped>
a {
  all: unset;
}
.wrapper-games {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
}
.game {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  button {
    z-index: 2;
  }
}
.left-game,
.right-game {
  top: 170px;
}
.portal {
  position: absolute;
  top: 100px;
  z-index: 1;
}
</style>
