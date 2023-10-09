<script setup>
defineProps({
  color: {
    type: String,
    default: "red",
  },
  text: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="wrapper">
    <img v-if="color === 'red'" src="@/assets/images/svg/red.svg" alt="" />
    <img v-if="color === 'fiolet'" src="@/assets/images/svg/fiol.svg" alt="" />
    <img v-if="color === 'green'" src="@/assets/images/svg/green.svg" alt="" />

    <ElementsText size="m" transform="upper" themes="secondary" class="text">{{
      text
    }}</ElementsText>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .text {
    position: absolute;
    padding-bottom: 10px;
  }
}
</style>
