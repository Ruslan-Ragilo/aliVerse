<template>
  <button class="button" :class="[color, size]" v-bind="attrs">
    <ElementsText themes="secondary" transform="upper" align="center" size="m">
      <slot />
    </ElementsText>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  color: "red" | "green" | "purple";
  size: "middle" | "large";
}>();

const attrs = useAttrs();
</script>

<style scoped lang="scss">
.button {
  position: relative;
  height: 70px;
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  cursor: pointer;
}
.button p {
  width: 100%;
  position: absolute;
  top: 13px;
  left: 50%;
  transform: translateX(-50%);
}
.middle {
  width: 312px;

  @include media(450px) {
    width: 250px;
  }
}
.large {
  width: 424px;

  @include media(450px) {
    width: 352px;
  }
}
.red.middle {
  background-image: url("~/assets/images/png/buttons/middle-red.png");

  @include media(450px) {
    background-image: url("~/assets/images/png/buttons/mini-red.png");
  }
}
.green.middle {
  background-image: url("~/assets/images/png/buttons/middle-green.png");

  @include media(450px) {
    background-image: url("~/assets/images/png/buttons/mini-green.png");
  }
}
.red.large {
  background-image: url("~/assets/images/png/buttons/large-red.png");
  @include media(450px) {
    background-image: url("~/assets/images/png/buttons/large-middle-red.png");
  }
}
.purple.large {
  background-image: url("~/assets/images/png/buttons/large-purple.png");
}
.red.middle:hover {
  background-image: url("~/assets/images/png/buttons/middle-red-hover.png");

  @include media(450px) {
    background-image: url("~/assets/images/png/buttons/mini-red-hover.png");
  }
}
.green.middle:hover {
  background-image: url("~/assets/images/png/buttons/middle-green-hover.png");

  @include media(450px) {
    background-image: url("~/assets/images/png/buttons/mini-green-hover.png");
  }
}
.red.large:hover {
  background-image: url("~/assets/images/png/buttons/large-red-hover.png");
}
.purple.large:hover {
  background-image: url("~/assets/images/png/buttons/large-purple-hover.png");
}
.red.middle:active:not(:disabled) {
  top: 7px;
  background-image: url("~/assets/images/png/buttons/middle-red-active.png");

  @include media(450px) {
    background-image: url("~/assets/images/png/buttons/mini-red-active.png");
  }
}
.green.middle:active:not(:disabled) {
  top: 7px;
  background-image: url("~/assets/images/png/buttons/middle-green-active.png");

  @include media(450px) {
    background-image: url("~/assets/images/png/buttons/mini-green-active.png");
  }
}
.red.large:active:not(:disabled) {
  top: 7px;
  background-image: url("~/assets/images/png/buttons/large-red-active.png");
}
.purple.large:active:not(:disabled) {
  top: 7px;
  background-image: url("~/assets/images/png/buttons/large-purple-active.png");
}
.button.middle:disabled {
  cursor: default;
  background-image: url("~/assets/images/png/buttons/middle-disabled.png");

  @include media(450px) {
    background-image: url("~/assets/images/png/buttons/mini-disabled.png");
  }
}
.button.large:disabled {
  cursor: default;
  background-image: url("~/assets/images/png/buttons/large-disabled.png");
}
</style>
