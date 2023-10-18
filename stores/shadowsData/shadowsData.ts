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
};
