const paintings = [
  {
    id: 1,
    title: "Звездная ночь",
    artist: "Винсент Ван Гог",
    year: 1889,
    description: "Одна из самых известных картин Ван Гога, изображающая ночной вид из окна его приюта в Сен-Реми-де-Прованс.",
    genre: ["Пейзаж", "Постимпрессионизм"],
    medium: "Масло, холст",
    dimensions: {
      width: 73.7,
      height: 92.1,
      unit: "см"
    },
    price: 95000000,
    imageUrl: "https://example.com/images/starry-night.jpg",
    isFeatured: true,
    createdAt: "2023-01-15"
  },
  {
    id: 2,
    title: "Девочка с персиками",
    artist: "Валентин Серов",
    year: 1887,
    description: "Портрет Веры Мамонтовой, дочери известного промышленника и мецената Саввы Мамонтова.",
    genre: ["Портрет", "Реализм"],
    medium: "Масло, холст",
    dimensions: {
      width: 91,
      height: 85,
      unit: "см"
    },
    price: 0,
    imageUrl: "https://example.com/images/girl-with-peaches.jpg",
    isFeatured: true,
    createdAt: "2023-01-20"
  },
  {
    id: 3,
    title: "Черный квадрат",
    artist: "Казимир Малевич",
    year: 1915,
    description: "Самое известное произведение Казимира Малевича, икона супрематизма и современного искусства.",
    genre: ["Абстракция", "Супрематизм"],
    medium: "Масло, холст",
    dimensions: {
      width: 79.5,
      height: 79.5,
      unit: "см"
    },
    price: 20000000,
    imageUrl: "https://example.com/images/black-square.jpg",
    isFeatured: false,
    createdAt: "2023-02-05"
  },
  {
    id: 4,
    title: "Утро в сосновом лесу",
    artist: "Иван Шишкин",
    year: 1889,
    description: "Знаменитая картина с медведями, хотя медведей написал Константин Савицкий.",
    genre: ["Пейзаж", "Анималистика"],
    medium: "Масло, холст",
    dimensions: {
      width: 139,
      height: 213,
      unit: "см"
    },
    price: 35000000,
    imageUrl: "https://example.com/images/morning-in-pine-forest.jpg",
    isFeatured: true,
    createdAt: "2023-02-10"
  },
  {
    id: 5,
    title: "Купание красного коня",
    artist: "Кузьма Петров-Водкин",
    year: 1912,
    description: "Одна из самых знаковых картин русского символизма, предвещающая грядущие перемены в России.",
    genre: ["Символизм"],
    medium: "Масло, холст",
    dimensions: {
      width: 160,
      height: 186,
      unit: "см"
    },
    price: 0,
    imageUrl: "https://example.com/images/bathing-of-red-horse.jpg",
    isFeatured: false,
    createdAt: "2023-02-15"
  },
  {
    id: 6,
    title: "Неравный брак",
    artist: "Василий Пукирев",
    year: 1862,
    description: "Социальная драма, изображающая брак по расчету между молодый девушкой и стариком.",
    genre: ["Жанровая живопись", "Реализм"],
    medium: "Масло, холст",
    dimensions: {
      width: 173,
      height: 136.5,
      unit: "см"
    },
    price: 18000000,
    imageUrl: "https://example.com/images/unequal-marriage.jpg",
    isFeatured: false,
    createdAt: "2023-02-20"
  },
  {
    id: 7,
    title: "Богатыри",
    artist: "Виктор Васнецов",
    year: 1898,
    description: "Самая известная картина Васнецова, изображающая трех былинных богатырей: Илью Муромца, Добрыню Никитича и Алешу Поповича.",
    genre: ["Былинный жанр", "Историческая живопись"],
    medium: "Масло, холст",
    dimensions: {
      width: 295.3,
      height: 446,
      unit: "см"
    },
    price: 0,
    imageUrl: "https://example.com/images/bogatyrs.jpg",
    isFeatured: true,
    createdAt: "2023-03-01"
  },
  {
    id: 8,
    title: "Апофеоз войны",
    artist: "Василий Верещагин",
    year: 1871,
    description: "Антивоенное произведение, изображающее пирамиду из человеческих черепов в пустыне.",
    genre: ["Батальная живопись", "Критический реализм"],
    medium: "Масло, холст",
    dimensions: {
      width: 127,
      height: 197,
      unit: "см"
    },
    price: 25000000,
    imageUrl: "https://example.com/images/apotheosis-of-war.jpg",
    isFeatured: false,
    createdAt: "2023-03-05"
  },
  {
    id: 9,
    title: "asd",
    artist: "dsa",
    year: 2001,
    description: "text",
    genre: ["Пейзаж", "Постимпрессионизм"],
    medium: "Масло, холст",
    dimensions: {
      width: 100,
      height: 200,
      unit: "см"
    },
    price: 950,
    imageUrl: "https://example.com/images/starry-night.jpg",
    isFeatured: true,
    createdAt: "2001-07-30"
  },
  {
    id: 10,
    title: "qwerty",
    artist: "ytrewq",
    year: 2004,
    description: "anothertext",
    genre: ["Батальная живопись", "Критический реализм"],
    medium: "Масло, холст",
    dimensions: {
      width: 122,
      height: 50,
      unit: "см"
    },
    price: 500,
    imageUrl: "https://example.com/images/bogatyrs.jpg",
    isFeatured: true,
    createdAt: "2004-11-03"
  }
];

module.exports = paintings;