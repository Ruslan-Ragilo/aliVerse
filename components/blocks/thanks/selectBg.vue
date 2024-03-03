<template>
  <div class="wrapper-select" :class="selectedBg !== 'white' ? `light` : ``">
    <ElementsText transform="upper">Выбери фон</ElementsText>
    <div class="wrapper-inputs">
      <ElementsRadioInput
        v-model="selectedBg"
        checked="true"
        label-class="white-label"
        value="white"
        @update:model-value="onBgChange"
      >
        <div class="white-bg"></div>
      </ElementsRadioInput>
      <ElementsRadioInput
        v-model="selectedBg"
        value="bg1"
        @update:model-value="onBgChange"
      >
        <img class="bg-image" src="~/assets/images/png/thanks/bg1.png" alt="" />
      </ElementsRadioInput>
      <ElementsRadioInput
        v-model="selectedBg"
        value="bg2"
        @update:model-value="onBgChange"
      >
        <img class="bg-image" src="~/assets/images/png/thanks/bg2.png" alt="" />
      </ElementsRadioInput>
      <ElementsRadioInput
        v-model="selectedBg"
        value="bg3"
        @update:model-value="onBgChange"
      >
        <img class="bg-image" src="~/assets/images/png/thanks/bg3.png" alt="" />
      </ElementsRadioInput>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  onBgChange: (value: string) => void;
}>();
const selectedBg = ref("white");
</script>

<style scoped lang="scss">
.wrapper-select {
  display: flex;
  align-items: center;
  gap: 10px;

  @include media(500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 10px;
  }
}

.wrapper-inputs {
  display: flex;
  gap: 10px;
}

.wrapper-select p {
  color: #000000;
}

.light p {
  color: rgba(255, 255, 255, 0.8);
}
.white-bg {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.bg-image {
  width: 100%;
  height: 100%;
}
</style>
