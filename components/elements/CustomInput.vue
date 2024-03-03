<template>
  <div class="form-item" :class="theme">
    <ElementsText class="sub-text" size="xxs" transform="upper">
      <slot />
    </ElementsText>
    <component
      :is="inputType"
      class="input"
      :value="modelValue"
      v-bind="attrs"
      @input="updateModelValue"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  inputType: "input" | "textarea";
  modelValue: string;
  theme?: string;
}>();

const attrs = useAttrs();
const emit = defineEmits(["update:modelValue"]);

const updateModelValue = (event: Event) => {
  if (event.target instanceof HTMLInputElement) {
    emit("update:modelValue", event.target.value);
  }
};
</script>

<style scoped lang="scss">
.input {
  width: 100%;
  padding: 10px 0 12px;
  border: none;
  border-bottom: 3px solid #bdbdbd;
  text-transform: uppercase;
  font-family: "Better Vcr";
  font-size: 16px;
  line-height: 130.5%;
  color: #000;
  background-color: transparent;
  transition: all 0.1s ease-in;
  resize: none;
}

.input:focus {
  outline: none;
  border-bottom: 3px solid #606060;
}

.input p {
  color: #bdbdbd;
}

.light p,
.light .input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.light .input {
  color: #fff;
  border-bottom: 3px solid rgba(255, 255, 255, 0.5);
}

.light .input:focus {
  border-bottom: 3px solid rgba(255, 255, 255, 1);
}
</style>
