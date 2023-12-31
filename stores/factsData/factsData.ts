type factType = {
  fact: string;
  isRight: boolean;
  right: string;
  wrong: string;
};

export const factsData: Record<string, factType> = {
  1: {
    fact: "У AliExpress был собственный ЦУМ",
    isRight: true,
    right:
      "Да, это так! В сентябре 2020 года AliExpress открыл фэшн-пространство на улице Петровка, а называлось оно «Центральный универсальный маркетплейс»",
    wrong:
      "Не угадал! В сентябре 2020 года AliExpress действительно открыл фэшн-пространство на улице Петровка, а называлось оно «Центральный универсальный маркетплейс»",
  },
  2: {
    fact: "Рекламным лицом AliExpress был Максим Галкин ",
    isRight: true,
    right: "Ага, всё верно! Ты на Алиии, я на Алиии!",
    wrong:
      "Конечно, это правда! Ты действительно не помнишь эту легендарную рекламу??",
  },
  3: {
    fact: "Про товары с AliExpress рассказывал Веном",
    isRight: false,
    right:
      "Тебя не проведёшь! О наших товарах действительно рассказывал супергерой, но не Веном, а Дэдпул! Точнее, его официальный голос в России - Пётр Гланц. Он зачитывал пользователям описания товаров на специальной горячей линии ",
    wrong:
      "Не совсем так! Однажды участие в нашей культовой акции для покупателей принял Пётр Гланц - официальный голос Дэдпула в России. Он рассказывал пользователям о наших товарах на специально созданной горячей линии",
  },
  4: {
    fact: "Однажды Ozon рекламировал AliExpress",
    isRight: false,
    right:
      "Конечно, это ложь! Ozon никогда не делал нам рекламу, зато мы использовали культовый трек группы O-zone в своей рекламе. Это ещё круче, согласись?",
    wrong:
      'Звучит как-то фантастично, не правда ли? Ozon не рекламировал нас, а вот O-zone рекламировал :) Точнее, мы использовали мелодию их культового хита "Dragostea Din Tei"',
  },
  5: {
    fact: "AliExpress выпустил помаду в своём фирменном оттенке",
    isRight: true,
    right:
      "Да, крутая была коллаборация! Мы вместе с российской лабораторией по изготовлению персонализированной декоративной косметики MAKEUP KITCHEN создали лимитированную губную помаду с матовым эффектом. Её главной особенностью стал фирменный красно-оранжевый цвет нашего бренда",
    wrong:
      "Неожиданно, но это правда! Вместе с российской лабораторией по изготовлению персонализированной декоративной косметики MAKEUP KITCHEN мы создали лимитированную губную помаду с матовым эффектом. А её главной особенностью стал фирменный красно-оранжевый цвет нашего бренда",
  },
  6: {
    fact: "Сумма самого дорогостоящего заказа на AliExpress в период прошлогодней 11/11 составила 1,2 млн рублей",
    isRight: true,
    right:
      "Живут же люди! И правда, рекорд по сумме заказа в прошлом году составил 1,2 млн рублей - именно столько стоит оснащение плантации специальными световыми лампами. Интересно, а что же выращивают на этой плантации?)",
    wrong:
      "Поверить трудно, но стоит попытаться. Рекордная сумма заказа в период прошлогодней 11/11 составила 1,2 млн рублей! Вот столько стоит оснащение плантации специальными световыми лампами. Интересно, а что же выращивают на этой плантации?)",
  },
  7: {
    fact: "Мы рассказывали об игрушках для взрослых в прямом эфире",
    isRight: true,
    right:
      "Вау, да ты подкован в этой теме! Мы действительно проводили совместный прямой эфир с PornHub, на котором рассказывали об эротических игрушках на нашей площадке. Было жарко!",
    wrong:
      "Не думал, что мы на такое способны?! Хах! Это был не просто прямой эфир, а коллаба с PornHub! Вместе с ребятами мы рассказывали об эротических игрушках на AliExpress",
  },
  8: {
    fact: "Основатель AliExpress, Джек Ма, раньше работал учителем математики",
    isRight: false,
    right:
      "Ты хорошо знаешь нашу историю! Джек Ма действительно получил педагогическое образование и долгое время работал по профессии. Только вот преподавал он не математику, а английский язык",
    wrong:
      "Почти угадал, но есть нюанс - до создания AliExpress Джек Ма действительно работал учителем, только вот преподавал он не математику, а английский язык",
  },
  9: {
    fact: "Cеллеры AliExpress однажды снялись в нашей рекламной кампании",
    isRight: true,
    right:
      'Это действительно так! Рекламная кампания была оформлена в стилистике сериала "Sex Education", а участие в ней приняли наши действующие селлеры',
    wrong:
      'К сожалению, ты ошибся. Мы действительно привлекали селлеров к участию в рекламной кампании, а оформлена она была в стилистике сериала "Sex Education"',
  },
  10: {
    fact: "В нашем московском офисе когда-то бывал известный TikTok-блогер Даня Милохин",
    isRight: true,
    right:
      "Даня не просто приходил к нам в гости, но даже успел подремать под знаменитым пледом-лавашом",
    wrong:
      "И не такое бывало! Даня не просто приходил к нам в гости, но даже успел подремать под знаменитым пледом-лавашом",
  },
  11: {
    fact: "В нашей команде работает 10 сотрудников с фамилией Орлов/Орлова",
    isRight: false,
    right:
      "А ты внимательный! Сейчас в нашей команде есть только 7 сотрудников с такой фамилией, а когда-то было больше!",
    wrong: "Неверно! С такой фамилией работает всего 7 человек в нашей команде",
  },
  12: {
    fact: "В прошлом году распродажа 11/11 длилась 10 дней, а в этом - 8",
    isRight: false,
    right:
      "Тебя не проведёшь! В прошлом году распродажа 11/11 продлилась целых 12 дней, а в этом - только 7. Уверенны, всего за неделю мы сможем установить новые космические рекорды!",
    wrong:
      "Допустим, мы умалчивали, недоговаривали... На самом деле в 2022 году распродажа 11/11 продлилась целых 12 дней, а в этом - только 7",
  },
  13: {
    fact: "Завод «Гусь Хрустальный» являлся одним из наших локальных селлеров",
    isRight: true,
    right:
      "Ну ты просто детектив! Какое-то время на AliExpress действительно можно было приобрести товары от официального производителя - завода «Гусь Хрустальный»",
    wrong:
      "Ты ошибся, тут мы не соврали! Завод «Гусь Хрустальный» и правда когда-то являлся нашим селлером, так что на AliExpress можно было купить товары от официального производителя по классным ценам и с быстрой доставкой",
  },
  14: {
    fact: "Большинство покупателей на AliExpress - женщины",
    isRight: false,
    right:
      "А ты знаток! Большинство наших покупателей - мужчины от 25 до 44 лет. Неожиданно, правда?",
    wrong:
      "Хах, а вот и нет! Согласно нашим данным, бОльшая часть наших покупателей - мужчины в возрасте от 25 до 44 лет",
  },
  15: {
    fact: "AliExpress CIS доставляет товары в 9 стран",
    isRight: false,
    right:
      "Тебе пора выдавать премию за знания AliExpress! Мы осуществляем доставку товаров не в 9, а в 10 стран. А сможешь перечислить. в какие именно?",
    wrong:
      "Ты ошибся, на самом деле стран 10: Россия, Армения, Азербайджан, Беларусь, Грузия, Киргизия, Казахстан, Молдова, Таджикистан, Туркмения и Узбекистан",
  },
  16: {
    fact: "У AliExpress есть собственная курьерская служба",
    isRight: false,
    right:
      "Конечно, это не так. У нас нет собственной курьерской службы, но есть несколько логистических партнёров, которые и осуществляют доставку товаров получателям",
    wrong:
      "Неверно! Собственной курьерской службы у нас нет. Доставку товаров до получателей осуществляют наши логистические партнёры",
  },
  17: {
    fact: "Наши коллеги в Китае работают 6 дней в неделю",
    isRight: false,
    right:
      "Люди в Китае, конечно, трудолюбивые, но не настолько! Рабочая неделя в Китае длится 5 дней, как и у нас! Конечно, случаются и исключения из правил, когда на любимую работу приходится приехать и в субботу - например, в день начала распродажи 11/11 ;)",
    wrong:
      "Больше похоже на страшный сон, чем на реальность! Конечно же, это неправда! Люди в Китае трудолюбивые, но не настолько! Рабочая неделя в Китае длится 5 дней, как и у нас! Конечно, случаются и исключения из правил, когда на любимую работу приходится приехать и в субботу - например, в день начала распродажи 11/11 ;)",
  },
  18: {
    fact: "В канале «Выгода х3» есть товары дороже 500 рублей",
    isRight: false,
    right:
      "Ты прав! В канале 1P NN (он же «Выгода х3») есть товары всего в трёх ценовых категориях: по 185, 312 и 416 рублей, так что на 500 рублей можно купить сразу несколько позиций",
    wrong:
      "Нет, что ты! В канале 1P NN (он же «Выгода х3») есть товары только в трёх ценовых категориях: по 185, 312 и 416 рублей",
  },
  19: {
    fact: "Бондовый склад назван в честь Джеймса Бонда",
    isRight: false,
    right:
      'Тебя не проведёшь! Конечно, Джеймс Бонд тут ни при чём. Слово "bond" переводится с английского языка как "таможенная закладная" и, по сути, отражает основную функцию такого склада - хранение товаров до их таможенного оформления',
    wrong:
      'Хаха, конечно нет! Мы любим Джеймса Бонда, но он здесь ни при чём. На самом деле название склада происходит от английского слова "bond", которое переводится как "таможенная закладная" и отражает основную функцию работы таких складов',
  },
  20: {
    fact: "Максимальное количество заказов, совершённых одним пользователем в период прошлогодней распродажи 11/11, составило 4137",
    isRight: true,
    right:
      "Так это были твои заказы??? Необъяснимо, но факт - в прошлом году рекорд по количеству созданных заказов от одного пользователя действительно составил целых 4137!",
    wrong:
      "В это трудно поверить, но это правда! В прошлом году рекорд по количеству созданных заказов от одного пользователя действительно составил целых 4137!",
  },
  21: {
    fact: "Площадь нашего офиса в Москве составляет 2848 м²",
    isRight: false,
    right:
      "И откуда ты знаешь?? Действительно, мы немного преуменьшили площадь офиса. На самом деле, площадь 2 наших этажей в сумме составляет 3872 м², ты молодец!",
    wrong:
      "Это был вопрос с подвохом :) На самом деле, площадь 2 наших этажей в сумме составляет 3872 м². Ты почти угадал!",
  },
  22: {
    fact: "На AliExpress можно заказать продукты с доставкой от 15 минут",
    isRight: false,
    right:
      "Ты отлично справляешься! Сейчас действительно невозможно заказать продукты с быстрой доставкой на AliExpress, а вот несколько лет назад это и правда было возможно",
    wrong:
      "Ну, это не совсем так... Раньше действительно можно было заказать продукты с быстрой доставкой через приложение AliExpress у нашего партнёра Самоката. Однако сейчас такой возможности уже нет",
  },
  23: {
    fact: "Cергей Лебедев, руководитель GR в нашей компании, однажды продавал памперсы в прямом эфире внутри AliExpress",
    isRight: true,
    right:
      "Ага, это правда! И не только Сергей Лебедев! Участие в этой кампании приняло сразу несколько сотрудников AliExpress, которые в прямом эфире вместе с популярными блогерами рассказывали о самых разных категориях товаров",
    wrong:
      "Мы в AliExpress и не такое умеем, а ты сомневался?? Действительно, сразу несколько наших сотрудников, включая Сергея Лебедева, однажды приняли участие в рекламной кампании, где вместе с популярными блогерами рассказывали о самых разных категориях товаров",
  },
  24: {
    fact: "AliExpress проводил настоящий показ мод с российскими дизайнерами в ЦМТ",
    isRight: true,
    right:
      "А ты застал это крутое событие? В 2020 году мы действительно провели совместный показ мод с российскими дизайнерами. А проходил он в ЦМТ - Центре Международной Торговли",
    wrong:
      "Наверное, ты просто забыл про этот крутой проект! Мы действительно проводили настоящий показ мод вместе с российскими дизайнерами в Центре Международной Торговли, это было в 2020 году",
  },
  25: {
    fact: "Компания AliExpress Россия появилась в 2010 году",
    isRight: false,
    right:
      "Вау, ты круто справляешься! Совершенно верно - локальная компания AliExpress Россия появилась в 2015 году, тогда в её состав входило всего 10 сотрудников",
    wrong:
      "Неееет, это случилось не так давно! Компания AliExpress Россия появилась только в 2015, а в 2010 впервые заработал AliExpress Global",
  },
  26: {
    fact: "В оргструктуре нашей компании есть 14 вертикалей",
    isRight: false,
    right:
      "Да, ты снова нас подловил! Вертикалей в нашей команде действительно не 14, а 12. Наверняка ты знаешь, как называется и чем занимается каждая из них",
    wrong:
      "Упс, ошибочка! У нас действительно много вертикальных команд, но не 14, а всего 12. В следующий раз будь внимательнее!",
  },
  27: {
    fact: "Наше внутреннее мероприятие Demo-Day проходит каждые 2 недели по четвергам и пятницам",
    isRight: true,
    right:
      "Ты явно следишь за анонсами наших встреч! Всё верно, мы действительно собираемся на Demo-Day каждые 2 недели по четвергам и пятницам, чтобы обменяться новостями, достижениями и планами",
    wrong:
      "Кажется, кто-то ни разу не слышал про Demo-Day... А зря! Мы действительно собираемся каждые 2 недели по четвергам и пятницам, чтобы обменяться новостями, достижениями и планами. В следующий раз обязательно приходи!",
  },
  28: {
    fact: "У нас есть собственный офис в Ташкенте",
    isRight: true,
    right:
      "Да, это так. Офис в Ташкенте - небольшой, но очень уютный! А ты когда-нибудь там бывал?",
    wrong:
      "Если ты не слышал про наш ташкентский офис, это не значит, что его не существует! У нас и правда есть небольшой офис в Ташкенте и многие сотрудники работают именно там",
  },
  29: {
    fact: "В прошлом году самой популярной категорией по количеству продаж в период 11/11 стала «Электроника»",
    isRight: false,
    right:
      "Молодец! Самой продаваемой категорией в период распродажи 11/11 в прошлом году стала «Дом и сад» (внезапно), а вовсе не «Электроника»",
    wrong:
      "Ха, а вот и нет! Самой продаваемой категорией в период распродажи 11/11 в прошлом году стала «Дом и сад» (внезапно), а вовсе не «Электроника»",
  },
  30: {
    fact: "Приобрести товары на AliExpress можно в рассрочку, если сумма заказа превышает 10 тыс. рублей",
    isRight: false,
    right:
      "Молодец, тут мы соврали! Никаких специальных условий для оформления рассрочки нет, как и минимальной суммы заказа. Рассрочка доступна на любые категории товаров, вне зависимости от их стоимости",
    wrong:
      "Ты ошибся, это была ложь! Никаких специальных условий для оформления рассрочки нет, как и минимальной суммы заказа. Рассрочка доступна на любые категории товаров, вне зависимости от их стоимости",
  },
  31: {
    fact: 'Аббревиатура OKR расшифровывается как "Objectives and Key Results"',
    isRight: true,
    right: "Всё верно, это чистая правда. Ты молодец!",
    wrong: "Думал, тут есть подвох? Никакого подвоха, это действительно так!",
  },
  32: {
    fact: "На AliExpress можно заказать электромобиль",
    isRight: true,
    right:
      "Гениально! На AliExpress можно купить не только электромобиль, но и электроскутер или даже настоящий складной дом! Как думаешь, сколько составит срок и стоимость доставки такого заказа?",
    wrong:
      "В такое трудно поверить, но это правда. А ещё на AliExpress можно купить гольфкар, электроскутер или даже настоящий дом!",
  },
};
