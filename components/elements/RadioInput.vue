<template>
  <div class="wrapper-radio">
    <input
      :id="value"
      type="radio"
      class="input"
      :value="value"
      name="selectedBg"
      v-bind="attrs"
      @input="updateModelValue"
    />
    <label :for="value" class="label" :class="labelClass">
      <slot />
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string | null;
  value: string;
  labelClass?: string;
}>();

const attrs = useAttrs();
const emit = defineEmits(["update:modelValue"]);

const updateModelValue = (event: Event) => {
  if (event.target instanceof (HTMLInputElement || HTMLLabelElement)) {
    emit("update:modelValue", event.target.value);
  }
};
</script>

<style scoped lang="scss">
.wrapper-radio {
  width: 46px;
  height: 46px;
  position: relative;
}
.label,
.input {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: all 0.1s ease-in;
}
.input {
  opacity: 0;
}

.input:checked ~ .label {
  box-shadow: 0 0 0 2px #fff;
}

.input:checked ~ .white-label {
  box-shadow: 0 0 0 2px #bdbdbd;
}
</style>
