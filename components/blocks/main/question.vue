<template>
  <div class="wrapper">
    <img class="cloud" src="@/assets/images/png/cloudQuestion.png" alt="" />
    <div class="wrapper-main">
      <ElementsText transform="upper" themes="secondary" size="heading"
        >Вопросы<br />
        и ответы</ElementsText
      >
      <div class="accordion-wrapper">
        <ElementsAccordion v-for="item in 5" :key="item" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  margin-top: 150px;
}
.cloud {
  position: absolute;
  right: 0;
}
.accordion-wrapper {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}
</style>
