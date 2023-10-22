<script setup>
defineProps(["cartItem"]);

const userStore = useUserData();
</script>

<template>
  <div class="wrapper-item">
    <div class="wrapperCheckbox">
      <label class="container-checkbox">
        <input type="checkbox" checked="checked" />
        <span class="checkmark"></span>
      </label>
    </div>
    <img
      class="imgItem"
      :src="getImageUrl(`png/merch/${cartItem.product.id}.png`)"
      alt=""
      srcset=""
    />
    <div class="middleCol">
      <div>
        <ElementsText transform="upper" size="xs">
          {{ cartItem?.product?.name }}
        </ElementsText>
        <ElementsText style="color: #afafaf" transform="upper" size="xxs">
          Только
          {{ locationsMap[`${cartItem?.product?.location}`] }}
        </ElementsText>
      </div>
      <ElementsText class="priceCoin" size="xl" themes="mustard">
        {{ cartItem?.product?.ali_price }}
      </ElementsText>
    </div>
    <button style="all: unset" @click="userStore.deleteCartItem(cartItem?.id)">
      <img class="trash" src="@/assets/images/svg/trash.svg" alt="" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
/* Customize the label (the container-checkbox) */
.wrapperCheckbox {
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
.wrapper-item {
  padding: 30px 0;
  border-bottom: 4px solid #e3e3e3;
  display: grid;
  grid-template-columns: 1fr 2fr 5fr 1fr;
  align-items: center;
  @include media(732px) {
    gap: 20px;
  }
  @include media(500px) {
    padding: 15px 0;
    gap: 10px;
  }

  .imgItem {
    width: 65%;

    @include media(732px) {
      width: 100%;
    }
  }

  .middleCol {
    display: flex;
    align-items: center;
    justify-content: space-around;

    @include media(732px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 14px;

      div {
        p:first-child {
          font-size: $font-size-xxs;
          line-height: $line-height-xxs;
        }
        p:last-child {
          font-size: 12px;
          line-height: 15px;
        }
      }

      .priceCoin {
        font-size: 20px;
      }
    }
  }

  .trash {
    cursor: pointer;
  }
}
</style>
