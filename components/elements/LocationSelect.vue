<script setup lang="ts">
import { Product } from "./SwiperSlide.vue";

defineProps<{
  productsArray: Product[];
}>();

const productStore = useProductStore();

const handleLocationChange = (product: Product) => {
  productStore.setSelectedLocation(product.location);

  if (product.in_stock > product.sold) {
    productStore.setStock(true);
  } else {
    productStore.setStock(false);
  }
};
</script>
<template>
  <div v-if="productsArray[0].location !== 4" class="wrapper-select">
    <div
      v-for="product in productsArray"
      :key="product.location"
      class="location-option"
    >
      <div class="wrapper-сheckbox">
        <label class="container-checkbox">
          <input
            :id="`${product.location}`"
            type="radio"
            name="location"
            @input="handleLocationChange(product)"
          />
          <span class="checkmark"></span>
        </label>
      </div>
      <label :for="`${product.location}`">
        <ElementsText size="xs" transform="upper">
          {{ locationsMap[`${product?.location}`] }}
        </ElementsText>
      </label>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper-select {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;

  @include media(530px) {
    margin-right: auto;
  }
}
.location-option {
  display: flex;
  align-items: center;
  gap: 15px;
}
.wrapper-сheckbox {
  width: 22px;
  height: 22px;
}

.container-checkbox {
  display: block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  visibility: hidden;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  background: url("@/assets/images/svg/borderCheckbox.png");
  background-size: contain;
}

/* Create the checkmark/indicator (hidden when not checked) */

/* Show the checkmark when checked */
.container-checkbox input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container-checkbox .checkmark:after {
  content: "";
  width: 100%;
  height: 100%;
  background: url("@/assets/images/svg/checkmark.png") no-repeat;
  background-size: cover;
}
</style>
