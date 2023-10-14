<template>
  <form action="" class="wrapper-form" @submit.prevent="handleSubmit">
    <ElementsCustomInput
      v-model="formData.name"
      input-type="input"
      placeholder="Иван Алексеев"
      required="true"
      type="text"
      :theme="background ? `light` : ``"
    >
      Твое имя
    </ElementsCustomInput>
    <ElementsCustomInput
      v-model="formData.email"
      input-type="input"
      placeholder="petrova@mail.ru"
      required="true"
      type="text"
      :theme="background ? `light` : ``"
    >
      Email получателя
    </ElementsCustomInput>
    <ElementsCustomInput
      v-model="formData.text"
      input-type="textarea"
      placeholder="Напиши спасибку"
      required="true"
      :cols="40"
      :rows="6"
      :theme="background ? `light` : ``"
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
  background: string | null;
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
</script>

<style scoped lang="scss">
.wrapper-form {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.submit-button {
  @include media(450px) {
    margin: 0 auto;
  }
}
</style>
