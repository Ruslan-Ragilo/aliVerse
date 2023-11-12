<script setup>
const isAvailable = ref(
  await isToday("11/08/2023 07:59:59", "11/11/2023 10:59:59"),
);

const today = Date.now();
const deadline = Date.parse("November 11 2023 10:59:59 GMT+03:00");
const diff = deadline - today;
</script>

<template>
  <div v-if="isAvailable" class="wrapper-main">
    <div class="wrapper">
      <div class="wrapper-counter">
        <ElementsText
          class="text"
          themes="secondary"
          size="m"
          transform="upper"
          align="center"
        >
          До старта распродажи
        </ElementsText>
        <vue-countdown v-slot="{ days, hours, minutes, seconds }" :time="diff">
          <ElementsText class="counter" themes="mustard" size="heading">
            {{ days ? `${days}`.padStart(2, "0") + ":" : ""
            }}{{ `${hours}`.padStart(2, "0") }}:{{
              `${minutes}`.padStart(2, "0")
            }}:{{ `${seconds}`.padStart(2, "0") }}
          </ElementsText>
        </vue-countdown>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  margin-top: 10px;
  width: 100%;
  height: 320px;
  padding: 20px;
  background-image: url("~/assets/images/png/counter-bg.png");
  background-repeat: no-repeat;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper-counter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
}
.text {
  @include media(600px) {
    font-size: 20px;
  }

  @include media(400px) {
    font-size: 18px;
  }
}
.counter {
  text-shadow: 0px 3px #ff2722;

  @include media(600px) {
    font-size: 42px;
  }

  @include media(400px) {
    font-size: 32px;
  }
}
</style>
