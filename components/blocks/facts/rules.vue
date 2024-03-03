<template>
  <div class="wrapper-rules">
    <div class="message-wrapper">
      <div v-if="isAvailable">
        <div class="message">
          Проверить пора, как хорошо знаешь ты AliExpress! Покажу тебе о
          компании факты, задача твоя – понять, что правда, а что ложь. Поверь в
          силы свои и помни, что внутри тебя сокрыто всё. Время настало
          заработать ещё Ali Coins
        </div>
        <ElementsPixelButton color="red" size="middle" @click="startGame">
          Понятно
        </ElementsPixelButton>
      </div>
      <div v-if="!isAvailable">
        <div class="message">
          Сегодня ты уже получил Ali coins за эту игру.<br />
          Возвращайся завтра!
        </div>
        <ElementsPixelButton color="red" size="middle" @click="closeModal">
          Вернуться
        </ElementsPixelButton>
      </div>
      <img
        class="alien"
        src="~/assets/images/png/facts/ali-yoda.png"
        alt=""
        draggable="false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useFactsStore();
const isAvailable = computed(() => store.isAvailable);

const startGame = () => {
  store.gameScreen = "game";
};

const closeModal = () => {
  store.closeModal();
};
</script>

<style scoped lang="scss">
.wrapper-rules {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.message-wrapper {
  position: relative;
  max-width: 1070px;
  width: 100%;
  padding: 40px;
  background-color: #fff;
  border: 20px solid #000;

  @include media(500px) {
    padding: 15px;
    border: 10px solid #000;
  }
}

.message {
  max-width: 830px;
  font-size: 20px;
  line-height: 130.5%;
  text-transform: uppercase;
  margin-bottom: 30px;

  @include media(500px) {
    font-size: 14px;
  }
}

.alien {
  position: absolute;
  bottom: -170px;
  right: 75px;
  width: 450px;

  @include media(1000px) {
    width: 400px;
    right: -100px;
  }

  @include media(700px) {
    width: 300px;
  }
}
</style>
