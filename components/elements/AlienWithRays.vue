<template>
  <div class="wrapper">
    <div class="wrapper-rays">
      <img class="rays" src="@/assets/images/svg/redRays.svg" alt="" />
      <div class="wrapper-alien">
        <img class="alien" src="@/assets/images/svg/alien.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper-rays {
  width: 100%;
  position: relative;
}
.wrapper-alien {
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.rays {
  user-select: none;
  width: 100%;
}
.alien {
  transform: rotate(15deg);
  user-select: none;
}
</style>
