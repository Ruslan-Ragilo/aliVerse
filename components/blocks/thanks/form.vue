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
    <div class="form-item" :class="background !== 'white' ? `light` : ``">
      <ElementsText class="sub-text" size="xxs" transform="upper">
        Текст
      </ElementsText>
      <textarea
        id=""
        v-model="formData.text"
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
const props = defineProps<{
  background: string;
}>();

const formData = ref({
  name: "",
  email: "",
  text: "",
  background: props.background,
});

const handleSubmit = () => {
  // TODO отправлять форму на бек
  formData.value = {
    name: "",
    email: "",
    text: "",
    background: "white",
  };
};

watch(
  () => props.background,
  () => {
    formData.value.background = props.background;
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
