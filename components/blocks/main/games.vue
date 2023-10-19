<template>
  <div class="wrapper-main wrapper">
    <img src="@/assets/images/png/game.png" alt="" />
    <div class="left-button">
      <ElementsPixelButton color="red" size="mini">Играть</ElementsPixelButton>
    </div>
    <div class="middle-button">
      <ElementsPixelButton color="red" size="mini">Играть</ElementsPixelButton>
    </div>
    <div class="right-button">
      <ElementsPixelButton color="red" size="mini" @click="openShadowsModal">
        Играть
      </ElementsPixelButton>
    </div>
    <ElementsMessageIcon class="alien"
      ><ElementsText transform="upper"
        >Готов разбогатеть? Заходи в любую из мини-игр, зарабатывай Ali Coins и
        копи на свой приз! Каждый день у тебя будет только 1 попытка, чтобы
        сыграть в мини-игру — не теряй времени, летс гоу!</ElementsText
      ></ElementsMessageIcon
    >
    <BlocksShadowsModal />
  </div>
</template>

<script setup lang="ts">
const shadowsStore = useShadowsStore();

const openShadowsModal = () => {
  shadowsStore.openModal();
};
</script>

<style lang="scss" scoped>
div.alien {
  max-width: 610px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -70%);
}
.wrapper {
  position: relative;
  margin-top: 100px;

  img {
    width: 100%;
  }

  .left-button {
    position: absolute;
    left: 17%;
    top: 22%;
  }

  .middle-button {
    position: absolute;
    top: 14%;
  }

  .right-button {
    position: absolute;
    right: 17%;
    top: 22%;
  }
}
</style>
