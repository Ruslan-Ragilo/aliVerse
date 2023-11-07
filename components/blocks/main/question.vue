<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="wrapper">
    <img class="cloud" src="@/assets/images/png/cloudQuestion.png" alt="" />
    <div class="wrapper-main">
      <ElementsText transform="upper" themes="secondary" size="heading"
        >Вопросы<br />
        и ответы</ElementsText
      >
      <div class="accordion-wrapper">
        <ElementsAccordion v-for="item in questionsData" :key="item.question">
          <template #question>
            <div class="question" v-html="item.question"></div>
          </template>
          <template #answer>
            <div class="answer" v-html="item.answer"></div>
          </template>
        </ElementsAccordion>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const questionsData = ref({
  1: {
    question: "Как выиграть мерч?",
    answer:
      "Всё просто – ежедневно зарабатывай Ali Coins, играй в мини-игры и крути Колесо Фортуны. Каждый день у тебя будет <b>1 попытка</b>, чтобы сыграть в каждую игру и покрутить колесо. А ещё не забывай заглядывать в Ali Verse по средам – в этот день у тебя есть дополнительная возможность заработать баллы. Обменять свои баллы на мерч и подарки ты сможешь, начиная <b>с 18 ноября</b>. ",
  },
  2: {
    question: "Когда я смогу приобрести и забрать подарки?",
    answer:
      "Добавить товар из витрины в корзину и оформить заказ ты сможешь <b>с 18 ноября</b>. До этого момента зарабатывай Ali Coins и копи на мерч. Кстати, купить можно <b>не более 3 товаров</b> в одни руки. Забрать свой подарок можно в любом из наших офисов, о старте выдачи призов мы оповестим дополнительно.",
  },
  3: {
    question: "Я живу за границей, как мне забрать подарок?",
    answer:
      "Подарки можно забрать в наших офисах в Москве, Ташкенте и Нижнем Новгороде, главное – выбрать товар на витрине в соответствии с удобной локацией. Приехать в офис за подарком ты можешь самостоятельно или попросив друзей/родственников помочь тебе – для этого оформи получателю гостевой пропуск в passbot при необходимости и предупреди <b>Машу Измайлову</b> о визите. Если ты приобрёл онлайн-подарок, он придёт тебе на корпоративную электронную почту в ближайшее время.",
  },
  4: {
    question: "Где я могу посмотреть полные правила активации?",
    answer: `Полные правила активации “Ali Verse” доступны <b><a href="/conditions.pdf" target="_blank" class="link">по ссылке</a></b>`,
  },
  5: {
    question: "К кому я могу обращаться с вопросами по активации?",
    answer:
      "По всем вопросам, связанным с активацией Ali Verse, можно обращаться на почту aer_news@alibaba-inc.com",
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 150px;
  padding: 16px;
}
.cloud {
  position: absolute;
  right: 0;
  z-index: -1;

  @include media(800px) {
    width: 30vw;
    transform: translateY(-60px);
  }
}
.accordion-wrapper {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  padding-bottom: 20px;
}
.link {
  text-decoration: underline;
  color: #000;
}
.wrapper-main p {
  @include media(670px) {
    font-size: 26px;
  }
}
.question {
  @include media(670px) {
    font-weight: 700;
  }
}
.answer {
  @include media(670px) {
    font-size: 14px;
  }
}
</style>
