<template>
  <div class="wrapper-button" :class="className">
    <ElementsPixelButton
      color="red"
      :size="buttonSize"
      @click="navigateTo('/')"
    >
      {{ buttonText }}
    </ElementsPixelButton>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  className?: string;
}>();

const buttonText = ref("");
const buttonSize = ref<"large" | "middle">("large");

const updateButtonText = () => {
  const windowWidth = window.innerWidth;
  buttonText.value = windowWidth > 600 ? "Вернуться на главную" : "На главную";
  buttonSize.value = windowWidth > 600 ? "large" : "middle";
};

onMounted(() => {
  updateButtonText();
  window.addEventListener("resize", updateButtonText);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateButtonText);
});
</script>

<style scoped lang="scss">
.wrapper-button {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 35px 70px;
  margin-bottom: 70px;

  @include media(600px) {
    padding: 35px 20px;
  }
}
.upper-button {
  margin-bottom: 0;
  padding: 20px 70px 0 70px;
}
</style>
