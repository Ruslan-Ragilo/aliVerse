<template>
  <div v-if="userStore.userData?.isLoading" class="wrapper-profile">
    <img
      class="avatar"
      alt="Avatar"
      :src="getImageUrl(userStore.userData?.avatarUser)"
    />
    <div class="profile-info">
      <ElementsText class-name="text" themes="secondary" size="s">
        {{ userStore.userData?.nameUser }}
      </ElementsText>
      <ElementsText class-name="text" themes="mustard" size="xs">
        {{ userStore.userData?.balanceUser }} ALICOINS
      </ElementsText>
      <NuxtLink class="logout" @click="authStore.logout">Выйти</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const userStore = useUserData();
const authStore = useAuth();
const isReady = ref(false);

onMounted(() => {
  userStore.fetchUsers().then(() => {
    isReady.value = true;
  });
});
</script>

<style scoped lang="scss">
.wrapper-profile {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 14px;
  padding: 14px;
  border: 3px solid #fff;
  background-color: rgba(12, 2, 45, 0.8);
  cursor: pointer;
}

.logout {
  color: white;
  font-size: 10px;
  margin-top: 10px;
}

.avatar {
  width: 54px;
  height: 54px;

  @include media(1200px) {
    width: 40px;
    height: 40px;
  }
}

.profile-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}

.profile-info p:last-child {
  @include media(1200px) {
    font-size: 14px;
  }
}
.profile-info p:first-child {
  @include media(1200px) {
    font-size: 16px;
  }
}
</style>
