<template>
  <form action="" class="wrapper-form" @submit.prevent="handleSubmit">
    <ElementsCustomInput
      v-model="formValues.name"
      input-type="input"
      placeholder="Иван Алексеев"
      required="true"
      type="text"
      :theme="background !== 'white' ? `light` : ``"
    >
      Твое имя
    </ElementsCustomInput>
    <ElementsCustomInput
      v-model="formValues.email"
      input-type="input"
      placeholder="petrova@aliexpress.ru"
      required="true"
      type="text"
      :theme="background !== 'white' ? `light` : ``"
    >
      Email получателя
    </ElementsCustomInput>
    <div class="form-item" :class="background !== 'white' ? `light` : ``">
      <ElementsText class="sub-text" size="xxs" transform="upper">
        Текст
      </ElementsText>
      <textarea
        id=""
        v-model="formValues.text"
        class="textarea"
        name=""
        placeholder="Напиши спасибку"
        required="true"
        cols="40"
        :rows="textareaRows"
        :class="background !== 'white' ? `light` : ``"
      ></textarea>
    </div>
    <ElementsPixelButton color="red" size="middle" class="sumbit-button">
      Отправить
    </ElementsPixelButton>
  </form>
</template>

<script setup lang="ts">
import $api from "~/http";

const props = defineProps<{
  background: string;
}>();

const templates = ["white", "bg1", "bg2", "bg3"];

const formValues = ref({
  name: "",
  email: "",
  text: "",
  background: props.background,
});

const handleSubmit = async () => {
  const formData = new FormData();
  formData.append("author_name", formValues.value.name);
  formData.append("receiver", formValues.value.email);
  formData.append(
    "layout",
    templates.indexOf(formValues.value.background).toString(),
  );
  formData.append("content", formValues.value.text);

  await $api.post("/api/thank/send", formData);

  formValues.value = {
    name: "",
    email: "",
    text: "",
    background: "white",
  };
};

watch(
  () => props.background,
  () => {
    formValues.value.background = props.background;
  },
);

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

.textarea {
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

.textarea:focus {
  outline: none;
  border-bottom: 3px solid #606060;
}

.textarea p {
  color: #bdbdbd;
}

.light p,
.light .textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.light .textarea {
  color: #fff;
  border-bottom: 3px solid rgba(255, 255, 255, 0.5);
}

.light .textarea:focus {
  border-bottom: 3px solid rgba(255, 255, 255, 1);
}
</style>
