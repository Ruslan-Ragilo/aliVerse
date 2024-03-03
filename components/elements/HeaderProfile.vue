<template>
  <div ref="profileRef" class="wrapper-profile">
    <img
      class="avatar"
      alt="Avatar"
      :src="
        getImageUrl(
          userStore.userData?.avatarUser
            ? userStore.userData?.avatarUser
            : 'svg/iconProfile/defaultAvatar.svg',
        )
      "
    />
    <div class="profile-info">
      <ElementsText class-name="text" themes="secondary" size="s">
        {{ userStore.userData?.nameUser }}
      </ElementsText>
      <ElementsText class-name="text" themes="mustard" size="xs">
        {{ userStore.userData?.balanceUser }} ALICOINS
      </ElementsText>
      <NuxtLink @click="authStore.logout">
        <ElementsText themes="secondary" size="xs" transform="upper">
          Выйти
        </ElementsText>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isScrollingUp: boolean;
}>();
const userStore = useUserData();
const authStore = useAuth();

const profileRef = ref();

watch(
  () => props.isScrollingUp,
  () => {
    if (props.isScrollingUp) {
      profileRef.value.style.top = "30px";
    } else {
      profileRef.value.style.top = "-300px";
    }
  },
);
</script>

<style scoped lang="scss">
.wrapper-profile {
  position: fixed;
  top: 30px;
  right: 60px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 14px;
  padding: 14px;
  border: 3px solid #fff;
  background-color: rgba(12, 2, 45, 0.8);
  z-index: 4;
  transition: all 0.3s;

  a {
    cursor: pointer;
  }

  @include media(800px) {
    right: 30px;
    padding: 7px 10px;
  }
}

.logout {
  color: white;
  font-size: 10px;
  margin-top: 10px;
}

.avatar {
  width: 54px;
  height: 54px;
}

.profile-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}
.profile-info p:nth-of-type(1) {
  @include media(1200px) {
    font-size: 16px;
  }

  @include media(700px) {
    font-size: 12px;
  }
}
.profile-info p:nth-of-type(2) {
  @include media(1200px) {
    font-size: 14px;
  }

  @include media(700px) {
    font-size: 10px;
  }
}
</style>
