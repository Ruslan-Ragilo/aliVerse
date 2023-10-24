<template>
  <div class="wrapper-select" :class="selectedBg ? `light` : ``">
    <ElementsText transform="upper">Выбери фон</ElementsText>
    <div class="wrapper-inputs">
      <ElementsRadioInput
        v-model="selectedBg"
        value="bg1"
        @update:model-value="onBgChange"
      >
        <img src="~/assets/images/png/thanks/bg1.png" alt="" />
      </ElementsRadioInput>
      <ElementsRadioInput
        v-model="selectedBg"
        value="bg2"
        @update:model-value="onBgChange"
      >
        <img src="~/assets/images/png/thanks/bg2.png" alt="" />
      </ElementsRadioInput>
      <ElementsRadioInput
        v-model="selectedBg"
        value="bg3"
        @update:model-value="onBgChange"
      >
        <img src="~/assets/images/png/thanks/bg3.png" alt="" />
      </ElementsRadioInput>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  onBgChange: (value: string) => void;
}>();
const selectedBg = ref(null);
</script>

<style scoped lang="scss">
.wrapper-select {
  display: flex;
  align-items: center;
  gap: 20px;

  @include media(450px) {
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
  color: #bdbdbd;
}

.light p {
  color: rgba(255, 255, 255, 0.5);
}
</style>
