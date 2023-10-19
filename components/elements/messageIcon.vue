<template>
  <div class="wrapper">
    <div class="window">
      <div class="wrapper-window">
        <slot></slot>
        <div class="window-tail"></div>
      </div>
    </div>
    <div class="wrapper-alien">
      <img
        class="alien"
        src="@/assets/images/svg/alien.svg"
        alt=""
        draggable="false"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper-window {
  border: 20px solid $black;
  background-color: $white;
  padding: 30px;
  width: 100%;

  @include media(744px) {
    border: 10px solid $black;
  }

  @include media(1440px) {
    padding: 20px;
  }
  @include media(1200px) {
    padding: 14px;
  }
}
.wrapper-alien {
  position: relative;
  width: fit-content;
  margin-top: -31px;

  @include media(1200px) {
    margin: -31px auto;
  }

  .alien {
    width: 465px;
    @include media(744px) {
      width: 250px;
      padding-top: 35px;
    }
    @include media(600px) {
      width: 170px;
    }
  }
}

.window-tail {
  content: "";
  background: url("@/assets/images/svg/messageEnd.svg") no-repeat;
  position: absolute;
  width: 100px;
  height: 100px;
  bottom: -100px;
  right: 20px;
  z-index: 3;

  @include media(744px) {
    width: 60px;
    height: 60px;
    bottom: -60px;
    right: 140px;
  }

  @include media(600px) {
    width: 60px;
    height: 60px;
    bottom: -60px;
    right: 100px;
  }

  @include media(500px) {
    width: 60px;
    height: 60px;
    bottom: -60px;
    right: 50px;
  }
}
</style>
