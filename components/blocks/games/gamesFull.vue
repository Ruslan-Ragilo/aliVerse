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
      <ElementsPixelButton color="red" size="mini">Играть</ElementsPixelButton>
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
      <ElementsPixelButton color="red" size="mini">Играть</ElementsPixelButton>
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
      <ElementsPixelButton color="red" size="mini" @click="openShadowsModal">
        Играть
      </ElementsPixelButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const shadowsStore = useShadowsStore();

const openShadowsModal = () => {
  shadowsStore.openModal();
};
</script>

<style lang="scss" scoped>
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
    z-index: 1;
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
