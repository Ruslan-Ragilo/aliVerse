<script setup>
defineProps({
  urlImg: {
    type: String,
    default: "svg/iconProfile/defaultAvatar.svg",
  },
});

const isActive = ref(false);

const inputsData = ref([
  {
    name: 1,
    value: "",
  },
  {
    name: 2,
    value: "",
  },
  {
    name: 3,
    value: "",
  },
  {
    name: 4,
    value: "",
  },
]);

const handlePin = (e, index) => {
  const valueInput = e.target.value;
  const inspectNumber = valueInput.replace(/[^\d.-]+/g, ""); // replace letters and symbol
  const currentInput = inputsData.value[index];

  if (index === 3 && inspectNumber.length > 1) {
    currentInput.value = inspectNumber.slice(0, 1);
  } else {
    currentInput.value = inspectNumber;
  }

  if (e.code === "Backspace" && index !== 0) {
    if (index === 3) {
      if (currentInput.value.length === 0) {
        e.target.previousSibling.disabled = false;
        e.target.disabled = true;
        e.target.previousSibling.focus();
      }
    } else {
      e.target.previousSibling.disabled = false;
      e.target.disabled = true;
      e.target.previousSibling.focus();
    }
  } else if (currentInput.value.length === 1 && index !== 3) {
    e.target.nextSibling.disabled = false;
    e.target.disabled = true;
    e.target.nextSibling.focus();
  } else {
    return null;
  }
};
</script>

<template>
  <div class="wrapper-card">
    <div class="border-y bg-third top1">
      <div class="dot bg-secondary"></div>
      <div class="dot bg-secondary"></div>
    </div>
    <div class="border-y bg-secondary top2">
      <div class="dot bg-primary"></div>
      <div class="dot bg-primary"></div>
    </div>
    <div class="border-y top3">
      <div class="bg-primary"></div>
    </div>
    <div class="border-y bg-third bottom1">
      <div class="dot bg-primary"></div>
      <div class="dot bg-primary"></div>
    </div>
    <div class="border-y bottom2">
      <div class="bg-primary"></div>
    </div>
    <div class="border-x border-right"></div>
    <div class="border-x border-left"></div>
    <div class="dot bg-third dot1"></div>
    <div class="dot bg-third dot2"></div>
    <div class="dot bg-secondary dot3"></div>
    <div class="dot bg-secondary dot4"></div>
    <div class="wrapper-content">
      <div class="left-col">
        <ElementsText themes="red">ВЫБЕРИ АВАТАРКУ</ElementsText>
        <div class="top">
          <div class="wrapper-avatar">
            <img :src="getImageUrl(urlImg)" alt="" />
          </div>
          <img class="line" src="@/assets/images/svg/lineDecor.svg" />
        </div>
      </div>
      <div class="right-col">
        <ElementsText class="text" font-family="Barcade" themes="secondary"
          >Космическое <br />
          удостоверение</ElementsText
        >
        <form action="">
          <input type="text" class="input" placeholder="ТВОЕ ИМЯ" />
          <input type="email" class="input" placeholder="ТВОЙ E-MAIL" />
          <div class="wrapper">
            <input
              v-for="(item, index) of inputsData"
              :key="index"
              v-model="item.value"
              :name="item.name"
              :class="['input-pin', { active: isActive && item.name === 1 }]"
              placeholder="0"
              :disabled="index !== 0"
              @keydown.delete="handlePin($event, index)"
              @click="
                item.name === 1
                  ? ((isActive = true), item.focus === true)
                  : null
              "
              @input="handlePin($event, index)"
            />
            <ElementsText class="sub-text" size="xxs"
              >придумай <br />
              pin код</ElementsText
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper-card {
  position: relative;
  padding: 30px;
  background-color: #fff;
  max-width: 588px;

  @include media(744px) {
    padding: 30px 10px;
    width: 100%;
  }

  .wrapper-content {
    display: flex;
    justify-content: space-between;
    gap: 30px;

    @include media(744px) {
      flex-direction: column;

      .top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
      }
    }
    .left-col {
      .wrapper-avatar {
        margin-top: 10px;
        box-sizing: content-box;
        border: 10px solid $red-primary;
        background-color: #ffc8c7;
        width: 160px;
        height: 160px;
        display: flex;
        justify-content: center;
        align-items: center;

        @include media(500px) {
          // max-width: 137px;
          // max-height: 13px;
          width: 117px;
          height: 117px;
        }

        img {
          margin: 0 auto;
          @include media(500px) {
            width: 117px;
          }
        }
      }

      .line {
        margin-top: 20px;
      }
    }
    .right-col {
      .text {
        padding: 14px;
        padding-right: 50px;
        background-color: $red-primary;
      }

      form {
        margin-top: 20px;
        input {
          outline: none;
          font-size: $font-size-xs;
          font-family: $font-family-main;
          color: $red-primary;

          &::placeholder {
            color: #cca09f;
          }
        }
        .input {
          border: none;
          margin-top: 25px;
          border-bottom: 5px solid $red-primary;
          padding-bottom: 6px;
          font-size: $font-size-xs;
          font-family: $font-family-main;

          @include media(744px) {
            display: block;
            width: 100%;
            padding-bottom: 10px;
          }
        }

        .wrapper {
          display: flex;
          margin-top: 30px;
          gap: 8px;

          .input-pin {
            height: 40px;
            width: 40px;
            border: 5px solid $red-primary;
            caret-color: transparent;
            -moz-appearance: textfield;
            padding: 0 8.9px;

            &.active::placeholder {
              color: $red-primary;
            }
          }

          .input-pin::-webkit-outer-spin-button,
          .input-pin::-webkit-inner-spin-button {
            -webkit-appearance: none;
          }

          .sub-text {
            text-transform: uppercase;
            color: #cca09f;
          }
        }
      }
    }
  }
}

.border-x {
  height: 100%;
  width: 10px;
  background-color: #710f0d;
  position: absolute;
  top: 0;
}

.bg-primary {
  background-color: #710f0d;
}

.border-right {
  right: -10px;
}

.border-left {
  left: -10px;
}

.dot {
  width: 10px;
  height: 10px;
  background-color: #710f0d;
}

.dot1 {
  top: 10px;
  left: 0;
}
.dot2 {
  top: 10px;
  right: 0;
}
.dot3 {
  bottom: 0px;
  right: 0;
}
.dot4 {
  bottom: 0px;
  left: 0;
}

.wrapper-card > .dot {
  position: absolute;
}

.bg-secondary {
  background-color: #983937;
}

.bg-third {
  background-color: #dd7c7a;
}

.border-y {
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
}

.top1 {
  top: 0;
}

.top2 {
  top: -10px;
}
.top3 {
  top: -20px;
  padding: 0 10px;
}
.top3 div {
  width: 100%;
  height: 100%;
}
.bottom1 {
  bottom: -10px;
}
.bottom2 {
  bottom: -20px;
  padding: 0 10px;
}
.bottom2 div {
  width: 100%;
  height: 100%;
}
</style>
