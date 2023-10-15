type QuestionType = {
  question: string;
  answers: {
    [key: number]: string;
  };
};

export const questionsData: Record<string, QuestionType> = {
  1: {
    question: "Какую татуировку ты бы себе сделал(а)?",
    answers: {
      1: "Пф, на спор – что угодно, а какие ставки?",
      2: "Что-то утонченное и незаметное",
      3: "Контура пожирнее, да картинку поярче, пожалуйста",
      4: "Татуировки – это не моё",
    },
  },
  2: {
    question: "Выбери цитату, которая тебе ближе всего",
    answers: {
      1: "С каждым шагом ты на шаг дальше",
      2: "Работа не волк, работа — это ворк",
      3: "Мне этот мир абсолютно понятен…",
      4: "Запомни: одна ошибка, и ты ошибся",
    },
  },
  3: {
    question: "Какой твой любимый сериал?",
    answers: {
      1: "Как я встретил вашу маму",
      2: "Доктор Хаус",
      3: "Игра престолов",
      4: "Во все тяжкие",
    },
  },
  4: {
    question: "О чем ты думаешь перед сном?",
    answers: {
      1: "Представляю, как надо было ответить наглой кассирше в магазине",
      2: "А выключил(а) ли я утюг?...",
      3: "Составляю список рабочих дел на завтра",
      4: "Мне некогда думать – я сразу вырубаюсь",
    },
  },
  5: {
    question: "Кем ты хотел(а) стать в детстве?",
    answers: {
      1: "Космонавтом",
      2: "Футболистом",
      3: "Бухгалтером",
      4: "Программистом",
    },
  },
  6: {
    question: "Как часто ты опаздываешь?",
    answers: {
      1: "Постоянно…",
      2: "Начальство не опаздывает, а задерживается",
      3: "Пунктуальность — мой конёк",
      4: "Ой, извините, мне пора, я опаздываю!",
    },
  },
  7: {
    question: "Имя Ибрагим тебе о чём-нибудь говорит?",
    answers: {
      1: "Я Ибрагим, Ибрагим из Парги…",
      2: "Я прошла Афганскую войну",
      3: "Я знаю парочку Ибрагимов",
      4: "Э-э-э, вы о чём?",
    },
  },
};