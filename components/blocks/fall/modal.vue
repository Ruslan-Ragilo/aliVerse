<template>
  <div v-if="isModalOpen" class="wrapper-modal" @click.self="store.closeModal">
    <div class="modal">
      <ElementsSpinner v-if="!isLoaded" />
      <iframe
        v-show="isLoaded"
        :src="src"
        frameborder="0"
        width="100%"
        height="100%"
        @load="handleLoad"
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
const userStore = useUserData();
const store = useFallStore();
const isModalOpen = computed(() => store.isModalOpen);
const token = localStorage.getItem("aliverse_token")?.slice(1, -1);
const src = "https://aliexpress-productfall.codenrock.com/?token=" + token;

const isLoaded = ref(false);

const handleLoad = () => {
  isLoaded.value = true;
};

window.addEventListener("message", (e) => {
  if (e.data === "close") {
    store.closeModal();
    userStore.fetchUsers();
  }
});
</script>

<style scoped lang="scss">
.wrapper-modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 13;
}
.modal {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  background-image: url("~/assets/images/png/shadows/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;

  @include media(800px) {
    width: 100%;
    height: 100%;
  }
}
.modal::-webkit-scrollbar {
  display: none;
}
</style>
