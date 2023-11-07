<template>
  <div class="wrapper-games">
    <div class="left-game game">
      <BlocksGamesHint v-if="!isFactsAvailable">
        Откроется 16 ноября
      </BlocksGamesHint>
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
        @click="openFactsModal"
      >
        Играть
      </ElementsPixelButton>
    </div>
    <div class="middle-game game">
      <BlocksGamesHint v-if="!isFallAvailable">
        Откроется 8 ноября
      </BlocksGamesHint>
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
        @click="openFallModal"
      >
        Играть
      </ElementsPixelButton>
    </div>
    <div class="right-game game">
      <BlocksGamesHint v-if="!isShadowsAvailable">
        Откроется 12 ноября
      </BlocksGamesHint>
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
        @click="openShadowsModal"
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

const openShadowsModal = () => {
  shadowsStore.openModal();
};

const openFactsModal = () => {
  factsStore.openModal();
};

const openFallModal = () => {
  fallStore.openModal();
};

// TODO удалить код ниже и раскомментировать следующий!
/* const isFactsAvailable = ref(true);
const isFallAvailable = ref(true);
const isShadowsAvailable = ref(true); */

const isFactsAvailable = ref(
  isToday(
    new Date("November 16 2023 07:59:59 GMT+03:00"),
    new Date("November 19 2023 23:59:59 GMT+03:00"),
  ),
);
const isFallAvailable = ref(
  isToday(
    new Date("November 08 2023 07:59:59 GMT+03:00"),
    new Date("November 19 2023 23:59:59 GMT+03:00"),
  ),
);
const isShadowsAvailable = ref(
  isToday(
    new Date("November 12 2023 07:59:59 GMT+03:00"),
    new Date("November 19 2023 23:59:59 GMT+03:00"),
  ),
);
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
