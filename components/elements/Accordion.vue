<script setup>
const isActive = ref(false);
</script>

<template>
  <div @click="isActive = !isActive" class="wrapper-item">
    <img
      src="@/assets/images/svg/caret.svg"
      :class="['caret', { active: isActive }]"
      alt=""
    />
    <ElementsText class="question" transform="upper" size="m"
      >Как выиграть мерч?</ElementsText
    >
    <div :class="['answers', { active: isActive }]">
      <ElementsText transform="upper"
        >Разнообразный и богатый опыт говорит нам, что современная методология
        разработки способствует повышению качества глубокомысленных рассуждений.
        В целом, конечно, современная методология разработки прекрасно подходит
        для реализации как самодостаточных, так и внешне зависимых
        концептуальных решений. Противоположная точка зрения подразумевает, что
        независимые государства и по сей день остаются уделом
        либералов.</ElementsText
      >
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

  .question {
    padding-bottom: 44px;
  }

  .answers {
    visibility: hidden;
    max-height: 0;
    transition: max-height 0.15s ease-out;

    &.active {
      visibility: visible;
      max-height: 400px;
      padding-bottom: 44px;
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
</style>
