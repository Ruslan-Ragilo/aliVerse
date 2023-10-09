<script setup>
defineProps({
  options: {
    type: Array,
    default: () => [],
  },
});
const isActive = ref(false);
const valueSelect = ref("");

const handleSelect = (value) => {
  isActive.value = false;

  valueSelect.value = value;
};
</script>

<template>
  <div class="wrapper-select">
    <div @click="isActive = !isActive" class="value">
      <img
        src="@/assets/images/svg/caret.svg"
        :class="['caret', { active: isActive }]"
        alt=""
      />
      <ElementsText>{{ valueSelect }}</ElementsText>
    </div>
    <div :class="['options', { active: isActive }]">
      <div
        @click="handleSelect(item.option)"
        v-for="item in options"
        :key="item.option"
        class="option"
      >
        <ElementsText>{{ item.option }}</ElementsText>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper-select {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  position: relative;

  .value {
    background-color: $white;
    border: 4px solid $black;
    padding: 0px 30px;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 60px;

    .caret {
      position: absolute;
      bottom: 5px;
      right: 5px;

      &.active {
        transform: rotate(-90deg);
      }
    }
  }

  .options {
    max-height: 200px;
    padding-bottom: 10px;
    background-color: $white;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: scroll;
    position: absolute;
    z-index: 11;
    width: 100%;
    top: 60px;
    display: none;

    &.active {
      display: block;
    }

    .option {
      padding: 10px;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background-color: #c0bdbd;
      }
    }
  }
}
</style>
