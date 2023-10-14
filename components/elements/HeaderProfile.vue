<template>
  <button class="wrapper-profile">
    <img
      class="avatar"
      :src="getImageUrl(`svg/iconProfile/${avatarId}.svg`)"
      alt="Avatar"
    />
    <div class="profile-info">
      <ElementsText class-name="text" themes="secondary" size="s">
        {{ name }}
      </ElementsText>
      <ElementsText class-name="text" themes="mustard" size="xs">
        {{ coins }} ALICOINS
      </ElementsText>
    </div>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  coins: number;
  avatarId: number;
}>();
</script>

<style scoped lang="scss">
.wrapper-profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  padding: 14px;
  border: 3px solid #fff;
  background-color: rgba(12, 2, 45, 0.8);
  cursor: pointer;
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

.profile-info p {
  @include media(710px) {
    font-size: 14px;
  }
}
</style>
