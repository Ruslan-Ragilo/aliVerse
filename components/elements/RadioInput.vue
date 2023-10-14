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
    <label :for="value" class="label">
      <slot />
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string | null;
  value: string;
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
  width: 40px;
  height: 40px;
  position: relative;
}
.label,
.input {
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
</style>
