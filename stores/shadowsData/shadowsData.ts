type shadowType = {
  name: string;
  link: string;
  imageShadow: string;
  imageAnswer: string;
  answers: Record<string, string>;
  right: string;
  wrong: string;
};

export const shadowsData: Record<string, shadowType> = {
  1: {
    name: "скульптура",
    link: "https://aliexpress.ru/item/1005006014505297.html?sku_id=12000035328274175&spm=a2g2w.productlist.search_results.2.61122719FFV5y5",
    imageShadow: "png/shadows/question/1.png",
    imageAnswer: "png/shadows/answer/1.png",
    answers: {
      1: "ночной светильник",
      2: "скульптура",
      3: "электрическая соковыжималка",
    },
    right: "Воу, да ты ценитель прекрасного!",
    wrong: "Не расстраивайся! Я тоже в этом искусстве ничего не понимаю...",
  },
  2: {
    name: "швейная мини-машина",
    link: "https://aliexpress.ru/item/32844273795.html?sku_id=65164426810&spm=a2g2w.productlist.search_results.14.776f63baQMLwMZ",
    imageShadow: "png/shadows/question/2.png",
    imageAnswer: "png/shadows/answer/2.png",
    answers: {
      1: "швейная мини-машина",
      2: "степлер",
      3: 'игрушка-кусачка "голова крокодила"',
    },
    right: "Правильно! Ты, кажется, любишь рукодельничать?",
    wrong: "Согласен, не очень-то и похоже на швейную машинку...",
  },
  3: {
    name: "открывашка для банок",
    link: "https://aliexpress.ru/item/32695039585.html?spm=a2g2w.detail.rcmdprod.5.11404fe5bl69Qg&mixer_rcmd_bucket_id=aerabtestalgoRecommendAbV4_controlRu1&ru_algo_pv_id=052dfd-40a3c7-9fc34d-d8732d&scenario=pcDetailBottomMoreThisSeller&sku_id=64744449660&traffic_source=recommendation&type_rcmd=core",
    imageShadow: "png/shadows/question/3.png",
    imageAnswer: "png/shadows/answer/3.png",
    answers: {
      1: 'форма для запекания "снеговик"',
      2: "открывашка для банок",
      3: "стопер для двери",
    },
    right: "Моя бабуля такой банки с вареньем закатывает!",
    wrong: "Я и сам бы не угадал!",
  },
  4: {
    name: "мини-овощичистка",
    link: "https://aliexpress.ru/item/1005005939712196.html?spm=a2g2w.productlist.0.0.6a804aa68sajEv&sku_id=12000034941763826",
    imageShadow: "png/shadows/question/4.png",
    imageAnswer: "png/shadows/answer/4.png",
    answers: {
      1: "мини-овощичистка",
      2: "флешка",
      3: "скребок для языка",
    },
    right: "Интересно, что за мини-людям нужна такая мини-овощечистка?",
    wrong: "Чего-о-о? Да это было нереально угадать!",
  },
  5: {
    name: "пресс для зубной пасты",
    link: "https://aliexpress.ru/item/1005002598649368.html?spm=a2g2w.detail.rcmdprod.0.68a76994ySVYNw&mixer_rcmd_bucket_id=aerabtestalgoRecommendAbV4_controlRu1&ru_algo_pv_id=052dfd-40a3c7-9fc34d-5a5cd2&scenario=pcDetailBottomMoreThisSeller&sku_id=12000021329147644&traffic_source=recommendation&type_rcmd=core",
    imageShadow: "png/shadows/question/5.png",
    imageAnswer: "png/shadows/answer/5.png",
    answers: {
      1: "лонг-борд",
      2: "пресс для зубной пасты",
      3: "ластик в форме лягушки",
    },
    right: "У меня нет пресса, но есть пресс для пасты! А у тебя?",
    wrong: "Почему эта штука так похожа на моего племянника?!",
  },
  6: {
    name: "точилка для кухонных ножей",
    link: "https://aliexpress.ru/item/1005005246816437.html?sku_id=12000032349311542&spm=a2g2w.productlist.search_results.12.26804aa6Erpo3J",
    imageShadow: "png/shadows/question/6.png",
    imageAnswer: "png/shadows/answer/6.png",
    answers: {
      1: "точилка для кухонных ножей",
      2: "утюг нового поколения",
      3: "кронштейн для циркулярной пилы",
    },
    right: "На твоей кухне ночи всегда заточены!",
    wrong: "По-моему, это бред... Реально на утюг похоже!",
  },
  7: {
    name: "usb-светильник",
    link: "https://aliexpress.ru/item/1005003323435265.html?spm=a2g2w.detail.rcmdprod.0.305d73efNTgMSH&mixer_rcmd_bucket_id=aerabtestalgoRecommendAbV4_controlRu1&ru_algo_pv_id=052dfd-40a3c7-9fc34d-6f25ef&scenario=pcDetailBottomMoreThisSeller&sku_id=12000025210092939&traffic_source=recommendation&type_rcmd=core",
    imageShadow: "png/shadows/question/7.png",
    imageAnswer: "png/shadows/answer/7.png",
    answers: {
      1: "автомобильный ключ для ремонта шин",
      2: "пауэр банк",
      3: "usb-светильник",
    },
    right: "Тебя не проведёшь!",
    wrong: "Мда, Ali Coins заработать не так просто...",
  },
  8: {
    name: "формочка для снежков",
    link: "https://aliexpress.ru/item/1005003578810562.html?spm=a2g2w.detail.rcmdprod.4.17082cc2ZuqFIL&mixer_rcmd_bucket_id=aerabtestalgoRecommendAbV4_controlRu1&ru_algo_pv_id=052dfd-40a3c7-9fc34d-806551&scenario=pcDetailBottomMoreThisSeller&sku_id=12000026355630598&traffic_source=recommendation&type_rcmd=core",
    imageShadow: "png/shadows/question/8.png",
    imageAnswer: "png/shadows/answer/8.png",
    answers: {
      1: "формочка для снежков",
      2: "силиконовая ложка для готовки",
      3: "резак для ветвей",
    },
    right: "Молодец! Скорее бы поиграть в снежки!",
    wrong: "Вы, земляне, правда не можете слепить снежок руками?!",
  },
  9: {
    name: "спинер",
    link: "https://aliexpress.ru/item/1005004077303490.html?sku_id=12000027964497228&spm=a2g2w.productlist.search_results.12.16d44aa6A9m6YU",
    imageShadow: "png/shadows/question/9.png",
    imageAnswer: "png/shadows/answer/9.png",
    answers: {
      1: "заколка-цветочек",
      2: "наклейка на колёсный диск",
      3: "спинер",
    },
    right: "О-о-о, эту штуку вспомнят только легенды...",
    wrong:
      "Объясните мне кто-нибудь, что такое спинер и как им пользоваться???",
  },
  10: {
    name: "многофункциональный фонарик",
    link: "https://aliexpress.ru/item/1005002702723581.html?spm=a2g2w.home.10009201.114.4ab55931oe2gAk&mixer_rcmd_bucket_id=aerabtestalgoRecommendAbV4_testAllShallowLongSerpsInvertRank&ru_algo_pv_id=ac06cb-23d4bc-64eb7b-9725ba&scenario=pcBestMore2Love&sku_id=12000032575195057&traffic_source=recommendation&type_rcmd=affiliate",
    imageShadow: "png/shadows/question/10.png",
    imageAnswer: "png/shadows/answer/10.png",
    answers: {
      1: "закладка для книги",
      2: "якорь для лодки",
      3: "многофункциональный фонарик",
    },
    right: "Ого! Кто-то проходил курсы скаутов?",
    wrong: "Ну и куда с таким фонариком пойдёшь?!",
  },
  11: {
    name: "щётка для лица",
    link: "https://aliexpress.ru/item/1005004210027133.html?sku_id=12000028390239499&spm=a2g2w.productlist.search_results.6.20b94aa6EZpR7h",
    imageShadow: "png/shadows/question/11.png",
    imageAnswer: "png/shadows/answer/11.png",
    answers: {
      1: "портативная колонка",
      2: "плюшевая игрушка брокколи",
      3: "щётка для лица",
    },
    right: "Молодец! Уход за собой - это важно!",
    wrong: "Не знаю, по-моему на брокколи реально похоже",
  },
  12: {
    name: "телефон-туфля",
    link: "https://aliexpress.ru/item/1005005486738931.html?sku_id=12000033274232040&spm=a2g2w.productlist.search_results.10.25ce23e5hyVBUB",
    imageShadow: "png/shadows/question/12.png",
    imageAnswer: "png/shadows/answer/12.png",
    answers: {
      1: "женская туфля",
      2: "телефон-туфля",
      3: "детская горка",
    },
    right: "Алло, это самый умный человек во вселенной?",
    wrong: "Любите вы из обычных вещей сделать какую-то кринжуху...",
  },
  13: {
    name: "ободок для волос",
    link: "https://aliexpress.ru/item/1005004857669059.html?sku_id=12000030770787742&spm=a2g2w.productlist.search_results.15.390d4aa6CW9cLy",
    imageShadow: "png/shadows/question/13.png",
    imageAnswer: "png/shadows/answer/13.png",
    answers: {
      1: "электро-коса",
      2: "позолоченная ручка двери",
      3: "ободок для волос",
    },
    right: "Он наверняка уже лежит у тебя в корзине на AliExpress",
    wrong: "Неверно, но всё равно ты супер!",
  },
  14: {
    name: "электрическая капельница для полива",
    link: "https://aliexpress.ru/item/1005003516631968.html?sku_id=12000026142492904&spm=a2g2w.productlist.search_results.1.77e34aa6HSIwly",
    imageShadow: "png/shadows/question/14.png",
    imageAnswer: "png/shadows/answer/14.png",
    answers: {
      1: "юла",
      2: "роликовый тренажёр для фитнеса",
      3: "электрическая капельница для полива",
    },
    right: "Садоводство - это круто!",
    wrong: "Да уж, прошла любовь, завяли помидоры...",
  },
  15: {
    name: "молоток дробительный",
    link: "https://aliexpress.ru/item/1005005221812242.html?spm=a2g2w.detail.rcmdprod.24.61873297rgx2WR&sku_id=12000032243262327",
    imageShadow: "png/shadows/question/15.png",
    imageAnswer: "png/shadows/answer/15.png",
    answers: {
      1: "молоток дробительный",
      2: "конструктор-башня",
      3: "дрель-шуруповёрт",
    },
    right: "Да ты мастер на все руки!",
    wrong: "Ладно, это было сложно",
  },
  16: {
    name: "подушка-антистресс",
    link: "https://aliexpress.ru/item/1005005825129005.html?spm=a2g2w.detail.rcmdprod.8.680d54cd12uYPg&mixer_rcmd_bucket_id=aerabtestalgoRecommendAbV4_testCisFiltering&ru_algo_pv_id=e605ad-40a3c7-9fc34d-7d79d4&scenario=pcDetailBottomMoreThisSeller&sku_id=12000035070988884&traffic_source=recommendation&type_rcmd=core",
    imageShadow: "png/shadows/question/16.png",
    imageAnswer: "png/shadows/answer/16.png",
    answers: {
      1: "дизайнерское кресло",
      2: "подушка-антистресс",
      3: "детская насадка на унитаз",
    },
    right: "Хотел бы я работать за твоим столом!",
    wrong: "Я вообще решил, что это для массажа",
  },
  17: {
    name: "детская шапка для купания",
    link: "https://aliexpress.ru/item/32830433027.html?spm=a2g2w.detail.rcmdprod.3.2e7135d5058jCc&mixer_rcmd_bucket_id=aerabtestalgoRecommendAbV4_controlRu1&ru_algo_pv_id=052dfd-476f2e-2bf73b-00d343&scenario=pcDetailBottomMoreOtherSeller&sku_id=65039925962&traffic_source=recommendation&type_rcmd=core",
    imageShadow: "png/shadows/question/17.png",
    imageAnswer: "png/shadows/answer/17.png",
    answers: {
      1: "слюнявчик",
      2: "детская шапка для купания",
      3: "фитнес-трекер",
    },
    right: "Я бы такую шапку и не только для купания надел!",
    wrong: "Какая шапка? Это же летающая тарелка, у меня такая же!",
  },
  18: {
    name: "варежка для пары",
    link: "https://aliexpress.ru/item/32933530478.html?sku_id=12000025853754614&spm=a2g2w.productlist.search_results.0.670b4aa6yVOKzx",
    imageShadow: "png/shadows/question/18.png",
    imageAnswer: "png/shadows/answer/18.png",
    answers: {
      1: "подушка для путешествий",
      2: "варежка для пары",
      3: "игрушка мягкая радуга",
    },
    right: "Ой, у нас тут романтики!",
    wrong: "Иу, неудобно как-то...",
  },
  19: {
    name: "чехол на телефон",
    link: "https://aliexpress.ru/item/1005005934716722.html?sku_id=12000034918740819&spm=a2g2w.productlist.search_results.2.22814aa6V2mmDZ",
    imageShadow: "png/shadows/question/19.png",
    imageAnswer: "png/shadows/answer/19.png",
    answers: {
      1: "чехол на телефон",
      2: "пенал",
      3: "кухонный нож",
    },
    right: "Круто таким отпугивать злодеев",
    wrong: "Ой, только не бей меня!",
  },
  20: {
    name: "футляр для зубочисток",
    link: "https://aliexpress.ru/item/1005003356635852.html?sku_id=12000025377250205&spm=a2g2w.productlist.search_results.4.297d4aa6BGOt3E",
    imageShadow: "png/shadows/question/20.png",
    imageAnswer: "png/shadows/answer/20.png",
    answers: {
      1: "губная помада",
      2: "ожерелье-клык",
      3: "футляр для зубочисток",
    },
    right: "Признавайся, у тебя там встроенный рентген?",
    wrong: "Что угодно, только не футляр для зубочисток!",
  },
  21: {
    name: "детский зонт-плащ",
    link: "https://aliexpress.ru/item/1005005557769665.html?sku_id=12000033534382671&spm=a2g2w.productlist.search_results.14.1b164aa63HxKz5",
    imageShadow: "png/shadows/question/21.png",
    imageAnswer: "png/shadows/answer/21.png",
    answers: {
      1: "крышка для блендера",
      2: "детский зонт-плащ",
      3: "силиконовая присоска",
    },
    right: "Ты точно с этой планеты?",
    wrong: "Если это зонт, то я балерина...",
  },
  22: {
    name: "бокал-насадка на бутылку",
    link: "https://aliexpress.ru/item/32980445054.html?sku_id=12000031969731378",
    imageShadow: "png/shadows/question/22.png",
    imageAnswer: "png/shadows/answer/22.png",
    answers: {
      1: "лампочка",
      2: "колокольчик",
      3: "бокал-насадка на бутылку",
    },
    right: "Вот это наш вариант!",
    wrong: "Ой, ну и ладно! Мы из нормальных бокалов пьём",
  },
  23: {
    name: "шпажки для еды в виде муравья",
    link: "https://aliexpress.ru/item/32959866342.html?sku_id=66405499661&spm=a2g2w.productlist.search_results.3.60584aa6JyRmJA",
    imageShadow: "png/shadows/question/23.png",
    imageAnswer: "png/shadows/answer/23.png",
    answers: {
      1: "протестующий муравей",
      2: "шпажки для еды в виде муравья",
      3: "муравей-пылесос",
    },
    right: "Я думал, ты никогда не угадаешь!",
    wrong: "Протестую, прям как этот муравей!",
  },
  24: {
    name: "игрушка брызгалка",
    link: "https://aliexpress.ru/item/1005004288603495.html?sku_id=12000028642902522&spm=a2g2w.productlist.search_results.9.4c7e4aa6d5egxg",
    imageShadow: "png/shadows/question/24.png",
    imageAnswer: "png/shadows/answer/24.png",
    answers: {
      1: "адаптер SD карты",
      2: "зажигалка",
      3: "игрушка брызгалка",
    },
    right: "Угадал! Любишь прикалываться над друзьями??",
    wrong: "Ладно, это был вопрос с подвохом!",
  },
  25: {
    name: "светильник для унитаза",
    link: "https://aliexpress.ru/item/32852573652.html?click_id=9mTZ20vSCwZnSvR&sku_id=10000013682607763&af=2926_Y6Ljx9&cn=2urus20fje606cotwic4tmq2u22xv1sg&cv=2&cv_source=default&dp=2urus20fje606cotwic4tmq2u22xv1sg&utm_campaign=2926_Y6Ljx9&utm_content=2&utm_medium=cpa&utm_source=aerkol&aff_fcid=80fa1545ae034ef298811266ae461b6b-1696432299156-09845-_DmB5Kq7&aff_fsk=_DmB5Kq7&aff_platform=api-new-link-generate&sk=_DmB5Kq7&aff_trace_key=80fa1545ae034ef298811266ae461b6b-1696432299156-09845-_DmB5Kq7&terminal_id=6bf4bce438974899a0c0153f720f1a1c",
    imageShadow: "png/shadows/question/25.png",
    imageAnswer: "png/shadows/answer/25.png",
    answers: {
      1: "радио-няня",
      2: "вай-фай роутер",
      3: "светильник для унитаза",
    },
    right: "Вот ты и спалился, любитель света в унитазе",
    wrong: "Согласен, тут сразу и не угадаешь...",
  },
  26: {
    name: "ножницы-лягушки",
    link: "https://aliexpress.ru/item/4000195796351.html?sku_id=10000000736858513&spm=a2g2w.productlist.search_results.4.15994aa69DICNm",
    imageShadow: "png/shadows/question/26.png",
    imageAnswer: "png/shadows/answer/26.png",
    answers: {
      1: "дверной ключ",
      2: "мухобойка",
      3: "ножницы-лягушки",
    },
    right: "Ты явно выбираешь нестандартные решения!",
    wrong: "Это было слишком, даже для меня!",
  },
  27: {
    name: "крем для рук",
    link: "https://aliexpress.ru/item/1005002977528193.html?sku_id=12000034086781867",
    imageShadow: "png/shadows/question/27.png",
    imageAnswer: "png/shadows/answer/27.png",
    answers: {
      1: "беспроводной микрофон",
      2: "пробирка лабораторная",
      3: "крем для рук",
    },
    right: "Он реально хорошо увлажняет, рекомендую!",
    wrong: "Что за подозрительная форма у этого крема...",
  },
  28: {
    name: "массажёр",
    link: "https://aliexpress.ru/item/1005002068507612.html?spm=a2g2w.home.10009201.112.358f5931ArKEls&mixer_rcmd_bucket_id=aerabtestalgoRecommendAbV4_controlRu3&ru_algo_pv_id=80c1d2-55914f-f1bcc8-9725ba&scenario=aerAppJustForYouNewRuSellTab&sku_id=12000018631899441&traffic_source=recommendation&type_rcmd=core",
    imageShadow: "png/shadows/question/28.png",
    imageAnswer: "png/shadows/answer/28.png",
    answers: {
      1: "водный пистолет",
      2: "фен",
      3: "массажёр",
    },
    right: "Слышал, это может быть даже болезненно...",
    wrong:
      "Даже само название звучит страшно. Я лучше схожу на тайский массаж.",
  },
  29: {
    name: "держатель для напитков",
    link: "https://aliexpress.ru/item/1005003861866990.html?sku_id=12000027353325029&spm=a2g2w.productlist.search_results.7.22c24aa6RtztqM",
    imageShadow: "png/shadows/question/29.png",
    imageAnswer: "png/shadows/answer/29.png",
    answers: {
      1: "держатель для напитков",
      2: "сменные лопасти для блендера",
      3: "органайзер для украшений",
    },
    right: "Да ты зришь в корень!",
    wrong: "До сих пор не понимаю, как это работает",
  },
  30: {
    name: "сотовый телефон",
    link: "https://aliexpress.ru/item/32971687119.html?af=739_50201&cn=2urus1du2sb3lz182dk5m80slyicz4bn&cv=3&cv_source=default&dp=2urus1du2sb3lz182dk5m80slyicz4bn&sub=50201&sub1=47843&utm_campaign=50201&utm_content=47843&utm_medium=cpa&utm_source=admitad&aff_fcid=4e1bd16e119a4bf3acd560c300aba732-1695378052899-04346-_DCfJwLt&aff_fsk=_DCfJwLt&aff_platform=api-new-link-generate&sk=_DCfJwLt&aff_trace_key=4e1bd16e119a4bf3acd560c300aba732-1695378052899-04346-_DCfJwLt&terminal_id=67e89fa63816442893187bf7060decba",
    imageShadow: "png/shadows/question/30.png",
    imageAnswer: "png/shadows/answer/30.png",
    answers: {
      1: "авторучка",
      2: "мужская подвеска-пуля",
      3: "сотовый телефон",
    },
    right: "Тебя не проведёшь!",
    wrong: "Как по такому говорить вообще?",
  },
  31: {
    name: "курительная мини-трубка",
    link: "https://aliexpress.ru/item/1005004778443917.html?sku_id=12000030451398887&spm=a2g2w.productlist.search_results.7.6aca4aa64VTDmq",
    imageShadow: "png/shadows/question/31.png",
    imageAnswer: "png/shadows/answer/31.png",
    answers: {
      1: "карбоновый сифон",
      2: "умная лейка",
      3: "курительная мини-трубка",
    },
    right: "Это уже магия вне Хогвартса, не иначе!",
    wrong: "Сразу видно, кто за ЗОЖ!",
  },
  32: {
    name: "компостный ящик",
    link: "https://aliexpress.ru/item/1005003764436623.html?sku_id=12000027087156560&spm=a2g2w.productlist.search_results.7.29404aa6gnUDfZ",
    imageShadow: "png/shadows/question/32.png",
    imageAnswer: "png/shadows/answer/32.png",
    answers: {
      1: "мини-принтер",
      2: "компостный ящик",
      3: "морозильная камера",
    },
    right: "Главное - не нюхать это",
    wrong: "Нет, такое нам не надо",
  },
  33: {
    name: "транзистор",
    link: "https://aliexpress.ru/item/33042688017.html?sku_id=67369086685&spm=a2g2w.productlist.search_results.3.52f04aa6AXrcJx",
    imageShadow: "png/shadows/question/33.png",
    imageAnswer: "png/shadows/answer/33.png",
    answers: {
      1: "винтажная заколка",
      2: "транзистор",
      3: "подставка для благовоний",
    },
    right: "Почините мой корабль, товарищ инженер?",
    wrong: "Сразу видно - гуманитарий!",
  },
  34: {
    name: "зажим для волос",
    link: "https://aliexpress.ru/item/1005002366090023.html?sku_id=12000020339582811&spm=a2g2w.productlist.search_results.10.5dd84aa6o11k3e",
    imageShadow: "png/shadows/question/34.png",
    imageAnswer: "png/shadows/answer/34.png",
    answers: {
      1: "зажим для волос",
      2: "вантуз трос для чистки труб",
      3: "торшер напольный",
    },
    right: "У тебя, наверное, и шапочка из фольги имеется!",
    wrong: "Ну и ладно! С такой штукой с нами всё равно не свяжешься",
  },
  35: {
    name: "настольный футбол",
    link: "https://aliexpress.ru/item/1005004182926326.html?sku_id=12000030907198533&spm=a2g2w.productlist.search_results.0.2ae04aa6hv1SO0",
    imageShadow: "png/shadows/question/35.png",
    imageAnswer: "png/shadows/answer/35.png",
    answers: {
      1: "квадрокоптер",
      2: "игровой симулятор самолёта",
      3: "настольный футбол",
    },
    right: "Ставлю 50 Ali Coins, что ты не сможешь меня обыграть!",
    wrong: "Да ладно, ну это же вылитый квадрокоптер! Я такой в Сити видел!",
  },
  36: {
    name: "ситечко для чая",
    link: "https://aliexpress.ru/item/1005002347332074.html?sku_id=12000020210054600&spm=a2g2w.productlist.search_results.0.64664aa6HdRbgZ",
    imageShadow: "png/shadows/question/36.png",
    imageAnswer: "png/shadows/answer/36.png",
    answers: {
      1: "детская погремушка",
      2: "ситечко для чая",
      3: "половник",
    },
    right: "Пригласишь меня на чай?",
    wrong: "Да как вообще это можно было угадать?",
  },
  37: {
    name: "очиститель семечек",
    link: "https://aliexpress.ru/item/1005004241649591.html?sku_id=12000028496921813&spm=a2g2w.productlist.search_results.11.11b94aa6FbnmST",
    imageShadow: "png/shadows/question/37.png",
    imageAnswer: "png/shadows/answer/37.png",
    answers: {
      1: "очиститель семечек",
      2: "пресс для чеснока",
      3: "отделитель косточек",
    },
    right: "А вот эта штука реально полезная!",
    wrong: "Из этих вариантов было правда трудно выбрать...",
  },
  38: {
    name: "открывалка для яиц",
    link: "https://aliexpress.ru/item/1005005531151087.html?sku_id=12000033433932141&spm=a2g2w.productlist.search_results.0.15314aa6LZ8mL5",
    imageShadow: "png/shadows/question/38.png",
    imageAnswer: "png/shadows/answer/38.png",
    answers: {
      1: "настольная лампа стальная",
      2: "открывалка для яиц",
      3: "турка для кофе",
    },
    right: "У тебя талант или магические способности!",
    wrong: "Я тоже люблю кофе из турки, но это не она",
  },
  39: {
    name: "умная ушная палочка",
    link: "https://aliexpress.ru/item/1005002484987312.html?sku_id=12000025180461167&spm=a2g2w.productlist.search_results.3.59f44aa6njqjsT",
    imageShadow: "png/shadows/question/39.png",
    imageAnswer: "png/shadows/answer/39.png",
    answers: {
      1: "умная ушная палочка",
      2: "электрическая зубная щётка",
      3: "ирригатор",
    },
    right: "У тебя такая есть и ты поэтому такой умный?",
    wrong: "Даже ушная палочка умная, а ты нет...",
  },
  40: {
    name: "умный корректор осанки",
    link: "https://aliexpress.ru/item/1005001867905202.html?spm=a2g2w.home.10009201.619.43c059315BSWm4&mixer_rcmd_bucket_id=aerabtestalgoRecommendAbV4_testAllShallowLongSerpsInvertRank&ru_algo_pv_id=ac06cb-23d4bc-215ab1-9725ba&scenario=pcBestMore2Love&sku_id=12000017942065124&traffic_source=recommendation&type_rcmd=affiliate",
    imageShadow: "png/shadows/question/40.png",
    imageAnswer: "png/shadows/answer/40.png",
    answers: {
      1: "модель матки",
      2: "домашний телефон",
      3: "умный корректор осанки",
    },
    right: "Ну ты герой! Правильно!",
    wrong: "Эй, не забудь выпрямить спину! Осанка - это важно!",
  },
};
