<template>
  <div class="result-wrapper">
    <ElementsText themes="mustard-light" size="xxxl">
      Поздравляем!
    </ElementsText>
    <img
      class="result-image"
      :src="getImageUrl(results[finalResult].image)"
      alt=""
    />
    <ElementsText themes="secondary" size="s" transform="upper" align="center">
      Поздравляем, ты - {{ results[finalResult].linkText
      }}{{ results[finalResult].linkDescription }}!
    </ElementsText>
    <ElementsText
      themes="secondary"
      size="xxs"
      transform="upper"
      align="center"
      >{{ results[finalResult].text }}</ElementsText
    >
    <div class="buttons-wrapper">
      <ElementsPixelButton
        color="red"
        size="large"
        :is-main-page="true"
        @click="handleModalClose"
      >
        На главную
      </ElementsPixelButton>
      <a class="result-link" :href="results[finalResult].link" target="_blank">
        <ElementsPixelButton color="purple" size="large" :is-main-page="true">
          Посмотреть товар
        </ElementsPixelButton>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useTestopolisStore();
const results = computed(() => store.results);
const finalResult = computed(() => store.finalResult || 1);

const handleModalClose = () => {
  store.closeModal();
  store.resetGame();
};
</script>

<style scoped lang="scss">
.result-wrapper {
  max-width: 1300px;
  width: 100%;
  height: 100%;
  padding: 30px 10%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.1fr 0.3fr 0.1fr 1fr 0.2fr;
  grid-row-gap: 20px;
  padding: 10px 34px;
  justify-items: center;
  z-index: 2;

  @media (min-width: 1440px) {
    grid-template-rows: 0.1fr 0.3fr 0.2fr 1fr 0.2fr;

    p:nth-of-type(2) {
      font-size: 22px;
    }

    p:nth-of-type(3) {
      font-size: 18px;
    }
  }

  @include media(900px) {
    padding: 10px 0;
  }

  @include media(500px) {
    padding: 40px 0;
  }

  @include media(600px) {
    p:first-of-type {
      font-size: 24px;
      text-shadow: 1.5px 0 #ffffff;
    }
  }

  @media (max-height: 900px) {
    p:first-of-type {
      font-size: 28px;
      text-shadow: 1.5px 0 #ffffff;
    }

    p:nth-of-type(2) {
      font-size: 18px;
    }

    p:nth-of-type(3) {
      font-size: 16px;
    }
    @include media(500px) {
      gap: 25px;

      p:first-of-type {
        font-size: 22px;
        text-shadow: 1px 0 #ffffff;
      }

      p:nth-of-type(2) {
        font-size: 16px;
      }

      p:nth-of-type(3) {
        font-size: 14px;
      }
    }

    @include media(400px) {
      p:nth-of-type(2) {
        font-size: 14px;
      }

      p:nth-of-type(3) {
        font-size: 10px;
      }
    }
  }

  @media (max-height: 700px) {
    p:first-of-type {
      font-size: 24px;
      text-shadow: 1.5px 0 #ffffff;
    }

    p:nth-of-type(2) {
      font-size: 16px;
    }

    p:nth-of-type(3) {
      font-size: 12px;
    }
  }

  @include media(400px) {
    p:first-of-type {
      font-size: 20px;
      text-shadow: 1px 0 #ffffff;
    }

    p:nth-of-type(2) {
      font-size: 14px;
    }

    p:nth-of-type(3) {
      font-size: 10px;
    }
  }
}

.result-image {
  min-width: 216px;
  width: 25%;
  aspect-ratio: 1/1;
  object-fit: contain;
  margin-bottom: 10px;

  @media (max-height: 900px) {
    min-width: 100px;
    width: 25vh;
  }

  @media (max-height: 900px) {
    min-width: 100px;
    width: 20vh;
  }
}

.result-link {
  text-decoration: none;
}
.buttons-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @include media(500px) {
    gap: 0;
  }
}
</style>
