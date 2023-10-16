<template>
  <div v-if="isModalOpen" class="wrapper-modal">
    <BlocksTestopolisBorder
      ><div class="modal">
        <ElementsCloseButton @click="handleClose" />
        <BlocksTestopolisClouds />
        <BlocksTestopolisContent />
      </div>
    </BlocksTestopolisBorder>
  </div>
</template>

<script setup lang="ts">
const { onModalClose } = defineProps<{
  isModalOpen: boolean;
  onModalClose: () => void;
}>();

const handleClose = () => {
  onModalClose();
};
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
  width: calc(100% - 48px);
  height: calc(100% - 48px);
  padding: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  background-image: url("~/assets/images/png/testopolis/testopolisBg.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.cloud-left {
  position: absolute;
  top: 0;
  left: 0;
}

.cloud-center {
  position: absolute;
  top: 30%;
  right: 0;
}

.cloud-bottom {
  position: absolute;
  bottom: 0;
  left: 15%;
}
</style>
