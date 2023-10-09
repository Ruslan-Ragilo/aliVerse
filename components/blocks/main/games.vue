<template>
  <div class="wrapper-main wrapper">
    <img src="@/assets/images/png/game.png" alt="" />
    <button class="p">asdas</button>
    <button class="s">asdasd</button>
    <button class="t">asdasd</button>
    <ElementsMessageIcon class="alien"
      ><ElementsText transform="upper"
        >Готов разбогатеть? Заходи в любую из мини-игр, зарабатывай Ali Coins и
        копи на свой приз! Каждый день у тебя будет только 1 попытка, чтобы
        сыграть в мини-игру — не теряй времени, летс гоу!</ElementsText
      ></ElementsMessageIcon
    >
  </div>
</template>

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

  button {
    position: absolute;
  }

  .p {
    left: 24%;
    top: 22%;
  }
  .s {
    top: 14%;
  }

  .t {
    right: 24%;
    top: 22%;
  }
}
</style>
