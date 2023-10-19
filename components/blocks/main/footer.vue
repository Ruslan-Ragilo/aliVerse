<template>
  <footer>
    <img class="logo" src="@/assets/images/png/logoFooter.png" alt="" />
    <img class="prim" src="@/assets/images/png/cloudFooterLeft.png" alt="" />
    <img class="second" src="@/assets/images/png/cloudFooterRight.png" alt="" />
  </footer>
</template>

<style lang="scss" scoped>
footer {
  margin-top: 150px;
  position: relative;
  display: flex;
  justify-content: center;
}
img {
  position: absolute;
}

.prim {
  left: 0;
  bottom: -22px;
  z-index: -1;
}

.second {
  right: 0;
  z-index: -1;
}
.logo {
  position: static;
  padding-bottom: 100px;
}
</style>
