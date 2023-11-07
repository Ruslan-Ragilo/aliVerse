<script setup>
const isActive = ref(false);
</script>

<template>
  <div class="wrapper-item" @click="isActive = !isActive">
    <img
      src="@/assets/images/svg/caret.svg"
      :class="['caret', { active: isActive }]"
      alt=""
    />
    <ElementsText class="question" transform="upper" size="m">
      <slot name="question" />
    </ElementsText>
    <div :class="['answers', { active: isActive }]" @click.stop>
      <ElementsText transform="upper">
        <slot name="answer" />
      </ElementsText>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper-item {
  outline: 6px solid $white;
  border: 5px solid $black;
  background-color: $white;
  padding: 44px 44px 0 44px;
  position: relative;
  cursor: pointer;

  @include media(670px) {
    padding: 22px 22px 0 22px;
  }

  .question {
    padding-bottom: 44px;

    @include media(670px) {
      padding-bottom: 22px;
    }
  }

  .answers {
    visibility: hidden;
    max-height: 0;
    transition: all 0.15s ease-out;

    &.active {
      visibility: visible;
      max-height: none;
      padding-bottom: 44px;

      @include media(670px) {
        padding-bottom: 22px;
      }
    }
  }

  .caret {
    position: absolute;
    bottom: 5px;
    right: 5px;

    &.active {
      transform: rotate(-90deg);
    }
  }
}
.wrapper-item p {
  @include media(670px) {
    font-size: 16px;
  }
}
</style>
