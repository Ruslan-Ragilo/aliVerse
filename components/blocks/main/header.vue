<template>
  <div class="wrapper">
    <ElementsHeaderCart />
    <ElementsHeaderProfile name="Иван Алексеев" :coins="1249" :avatar-id="1" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  top: 20px;
}
</style>
