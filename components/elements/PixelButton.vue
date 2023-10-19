<template>
  <button
    class="button"
    :class="[color, size, { ['mini-main']: isMainPage }]"
    v-bind="attrs"
  >
    <ElementsText
      :class="classText"
      themes="secondary"
      transform="upper"
      align="center"
      size="m"
    >
      <slot />
    </ElementsText>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  color: "red" | "green" | "purple";
  size: "mini" | "middle" | "large";
  classText?: String;
  isMainPage?: Boolean;
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
  /* top: 50%; */
  width: 100%;
  position: absolute;
  /* top: 13px; */
  left: 50%;
  transform: translate(-50%, -60%);

  @include media(450px) {
    font-size: 20px;
  }
}

.mini {
  width: 250px;
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
    // width: 100%;
  }
}
.red.mini {
  background-image: url("~/assets/images/png/buttons/mini-red.png");
}
.green.mini {
  background-image: url("~/assets/images/png/buttons/mini-green.png");
}
.red.mini:hover {
  background-image: url("~/assets/images/png/buttons/mini-red-hover.png");
}
.green.mini:hover {
  background-image: url("~/assets/images/png/buttons/mini-green-hover.png");
}
.red.mini:active:not(:disabled) {
  top: 7px;
  background-image: url("~/assets/images/png/buttons/mini-red-active.png");
}
.green.mini:active:not(:disabled) {
  top: 7px;
  background-image: url("~/assets/images/png/buttons/mini-green-active.png");
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

  &.mini-main {
    @include media(450px) {
      background-image: url("~/assets/images/png/buttons/mobi-green.png");
      width: 295px;
      p {
        bottom: 7px;
      }
    }
  }
}
.red.large {
  background-image: url("~/assets/images/png/buttons/large-red.png");
  @include media(450px) {
    background-image: url("~/assets/images/png/buttons/large-middle-red.png");
  }
  &.mini-main {
    @include media(450px) {
      background-image: url("~/assets/images/png/buttons/mobi-red.png");
      width: 295px;
      p {
        bottom: 7px;
      }
    }
  }
}
.purple.large {
  background-image: url("~/assets/images/png/buttons/large-purple.png");

  &.mini-main {
    @include media(450px) {
      background-image: url("~/assets/images/png/buttons/mobi-purple.png");
      width: 295px;
      p {
        bottom: 7px;
      }
    }
  }
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

  &.mini-main {
    @include media(450px) {
      background-image: url("~/assets/images/png/buttons/mobi-green.png");
      width: 295px;
      p {
        bottom: 7px;
      }
    }
  }
}
.red.large:hover {
  background-image: url("~/assets/images/png/buttons/large-red-hover.png");
  @include media(450px) {
    background-image: url("~/assets/images/png/buttons/large-middle-red-hover.png");
  }
  &.mini-main {
    @include media(450px) {
      background-image: url("~/assets/images/png/buttons/mobi-red.png");
      width: 295px;
      p {
        bottom: 7px;
      }
    }
  }
}
.purple.large:hover {
  background-image: url("~/assets/images/png/buttons/large-purple-hover.png");

  &.mini-main {
    @include media(450px) {
      background-image: url("~/assets/images/png/buttons/mobi-purple.png");
      width: 295px;
      p {
        bottom: 7px;
      }
    }
  }
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

  &.mini-main {
    @include media(450px) {
      background-image: url("~/assets/images/png/buttons/mobi-green-active.png");
      width: 295px;
      p {
        bottom: 7px;
      }
    }
  }
}
.red.large:active:not(:disabled) {
  top: 7px;
  background-image: url("~/assets/images/png/buttons/large-red-active.png");
  @include media(450px) {
    background-image: url("~/assets/images/png/buttons/large-middle-red-active.png");
  }
  &.mini-main {
    @include media(450px) {
      background-image: url("~/assets/images/png/buttons/mobi-red-active.png");
      width: 295px;
      p {
        bottom: 7px;
      }
    }
  }
}
.purple.large:active:not(:disabled) {
  top: 7px;
  background-image: url("~/assets/images/png/buttons/large-purple-active.png");

  &.mini-main {
    @include media(450px) {
      background-image: url("~/assets/images/png/buttons/mobi-purple-active.png");
      width: 295px;
      p {
        bottom: 7px;
      }
    }
  }
}

.button.mini:disabled {
  cursor: default;
  background-image: url("~/assets/images/png/buttons/mini-disabled.png");
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

  @include media(450px) {
    background-image: url("~/assets/images/png/buttons/large-middle-disabled.png");
  }
}
</style>
