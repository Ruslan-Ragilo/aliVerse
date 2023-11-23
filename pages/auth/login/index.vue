<script setup>
definePageMeta({
  layout: "auth",
});

const isEventFinished = ref(
  await isToday("11/25/2023 00:00:01", "12/31/2023 23:59:59"),
);
</script>

<template>
  <BlocksEventFinished v-if="isEventFinished" />
  <BlocksAuthLogin v-else />
</template>
