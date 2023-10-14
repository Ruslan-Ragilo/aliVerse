<template>
  <div class="wrapper-header">
    <ElementsHeaderCart />
    <ElementsHeaderProfile name="Иван Алексеев" :coins="1249" :avatar-id="1" />
  </div>
</template>

<style scoped lang="scss">
.wrapper-header {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 35px 70px;
  z-index: 1;

  @include media(710px) {
    padding: 20px 16px;
  }
}
</style>
