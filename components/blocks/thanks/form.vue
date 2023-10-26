<template>
  <form action="" class="wrapper-form" @submit.prevent="handleSubmit">
    <ElementsCustomInput
      v-model="formData.name"
      input-type="input"
      placeholder="Иван Алексеев"
      required="true"
      type="text"
      :theme="background !== 'white' ? `light` : ``"
    >
      Твое имя
    </ElementsCustomInput>
    <ElementsCustomInput
      v-model="formData.email"
      input-type="input"
      placeholder="petrova@mail.ru"
      required="true"
      type="text"
      :theme="background !== 'white' ? `light` : ``"
    >
      Email получателя
    </ElementsCustomInput>
    <ElementsCustomInput
      v-model="formData.text"
      input-type="textarea"
      placeholder="Напиши спасибку"
      required="true"
      :cols="40"
      :rows="textareaRows"
      :theme="background !== 'white' ? `light` : ``"
    >
      Текст
    </ElementsCustomInput>
    <ElementsPixelButton color="red" size="middle" class="sumbit-button">
      Отправить
    </ElementsPixelButton>
  </form>
</template>

<script setup lang="ts">
const { background } = defineProps<{
  background: string;
}>();

const formData = ref({
  name: "",
  email: "",
  text: "",
});

const handleSubmit = () => {
  formData.value = {
    name: "",
    email: "",
    text: "",
  };
};

const textareaRows = ref(6);

const updateTextareaRows = () => {
  const windowHeight = window.innerHeight;
  textareaRows.value = windowHeight > 700 ? 6 : 3;
};

onMounted(() => {
  updateTextareaRows();
  window.addEventListener("resize", updateTextareaRows);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateTextareaRows);
});
</script>

<style scoped lang="scss">
.wrapper-form {
  display: flex;
  flex-direction: column;
  gap: 30px;

  @include media(450px) {
    gap: 10px;
  }
}

.submit-button {
  @include media(450px) {
    margin: 0 auto;
  }
}
</style>
