<template>
  <div class="letter-container">
    <img class="planet" src="@/assets/images/png/test.png" alt="" />
    <div class="wrapper-main content">
      <div>
        <ElementsText
          class="heading"
          size="heading"
          transform="upper"
          themes="secondary"
          >Планета
          <br />
          тестополис</ElementsText
        >
        <ElementsMessageIcon class="letter">
          <ElementsText transform="upper"
            >Welcome to Тестополис! Признайся, ты хотя бы раз задумывался, на
            какой товар с AliExpress ты похож? Мы тоже!<br /><br />
            Здесь, в Тестополисе, ты сможешь узнать наверняка — Куриный шлем для
            Птица Утка, Задеревенелый чехол для свадебный Юбка или Вонючий
            гобелен le monke uh oh? Проходи тест и пойми наконец, кто ты
            есть!</ElementsText
          >
        </ElementsMessageIcon>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  padding-top: 20.1vw;
  display: flex;
}
.letter {
  max-width: 600px;
  width: 100%;
}

.planet {
  position: absolute;
  right: 0;
  width: 50vw;
}
</style>
