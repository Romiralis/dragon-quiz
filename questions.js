/**
 * Данные вопросов для викторины «Как приручить дракона»
 * Три уровня сложности: Дракончик, Викинг, Вождь
 * ~120 вопросов по книгам Крессиды Коуэлл
 */

const QUESTIONS = {
  easy: {
    label: 'Дракончик',
    subtitle: 'для малышей 3-4',
    icon: '🐲',
    questions: [
      // === TEXT CHOICE ===
      {
        type: 'choice',
        question: 'Как зовут главного героя?',
        answers: ['Иккинг', 'Сморкала', 'Рыбьеног', 'Стоик'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Какого цвета дракончик Беззубик?',
        answers: ['Зелёный', 'Красный', 'Чёрный', 'Синий'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Кто папа Иккинга?',
        answers: ['Стоик', 'Плевака', 'Могадон', 'Элвин'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Кто лучший друг Иккинга?',
        answers: ['Рыбьеног', 'Сморкала', 'Камикадза', 'Пёсьедух'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Чем особенный Беззубик?',
        answers: ['У него нет зубов', 'Он самый большой', 'Он умеет петь', 'Он невидимый'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Где живут викинги Иккинга?',
        answers: ['На острове Олух', 'В замке', 'В пещере', 'На корабле'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Что умеют драконы?',
        answers: ['Летать', 'Петь песни', 'Готовить еду', 'Читать книги'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Кто написал книги про Иккинга?',
        answers: ['Крессида Коуэлл', 'Иккинг', 'Беззубик', 'Стоик'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Какое животное Беззубик?',
        answers: ['Дракон', 'Кот', 'Собака', 'Птица'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Кем хочет стать Иккинг?',
        answers: ['Героем', 'Поваром', 'Рыбаком', 'Садовником'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Что делают викинги?',
        answers: ['Плавают на кораблях', 'Летают на самолётах', 'Ездят на машинах', 'Катаются на лыжах'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Какого размера Беззубик в начале книг?',
        answers: ['Маленький', 'Огромный', 'Средний', 'Как дом'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Как Иккинг разговаривает с драконами?',
        answers: ['На драконьем языке', 'Жестами', 'Он не умеет', 'Через волшебную палочку'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Что носят викинги на голове?',
        answers: ['Шлемы', 'Короны', 'Шапки', 'Ничего'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Где живут драконы?',
        answers: ['В пещерах', 'В домах', 'В школе', 'В магазине'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Иккинг — храбрый или трусливый?',
        answers: ['Храбрый', 'Трусливый', 'Злой', 'Сонный'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Чем питаются драконы?',
        answers: ['Рыбой', 'Конфетами', 'Пиццей', 'Мороженым'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Сколько лап у дракона?',
        answers: ['Четыре', 'Две', 'Шесть', 'Восемь'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Что есть у дракона на спине?',
        answers: ['Крылья', 'Рюкзак', 'Седло', 'Книга'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Стоик — это кто?',
        answers: ['Вождь племени', 'Учитель', 'Дракон', 'Кот'],
        correct: 0
      },
      // === IMAGE QUESTIONS ===
      {
        type: 'image',
        question: 'Найди Беззубика!',
        images: [
          { src: './assets/toothless.jpg', label: 'Беззубик' },
          { src: './assets/fireworm.jpg', label: 'Огневица' },
          { src: './assets/stormfly.jpg', label: 'Буримуха' },
          { src: './assets/berk.jpg', label: 'Остров' }
        ],
        correct: 0
      },
      {
        type: 'image',
        question: 'Где живут викинги? Найди остров!',
        images: [
          { src: './assets/berk.jpg', label: 'Остров Олух' },
          { src: './assets/hiccup.jpg', label: 'Иккинг' },
          { src: './assets/toothless.jpg', label: 'Беззубик' },
          { src: './assets/stormfly.jpg', label: 'Буримуха' }
        ],
        correct: 0
      },
      {
        type: 'image',
        question: 'Найди Иккинга!',
        images: [
          { src: './assets/hiccup.jpg', label: 'Иккинг' },
          { src: './assets/fishlegs.jpg', label: 'Рыбьеног' },
          { src: './assets/snotlout.jpg', label: 'Сморкала' },
          { src: './assets/stoick.jpg', label: 'Стоик' }
        ],
        correct: 0
      },
      {
        type: 'image',
        question: 'Найди большого дракона! Кто дышит огнём?',
        images: [
          { src: './assets/fireworm.jpg', label: 'Огневица' },
          { src: './assets/berk.jpg', label: 'Остров' },
          { src: './assets/hiccup.jpg', label: 'Иккинг' },
          { src: './assets/fishlegs.jpg', label: 'Рыбьеног' }
        ],
        correct: 0
      },
      {
        type: 'image',
        question: 'Кто здесь папа Иккинга? Найди Стоика!',
        images: [
          { src: './assets/stoick.jpg', label: 'Стоик' },
          { src: './assets/gobber.jpg', label: 'Плевака' },
          { src: './assets/snotlout.jpg', label: 'Сморкала' },
          { src: './assets/hiccup.jpg', label: 'Иккинг' }
        ],
        correct: 0
      },
      {
        type: 'image',
        question: 'Найди разноцветного дракона!',
        images: [
          { src: './assets/stormfly.jpg', label: 'Буримуха' },
          { src: './assets/toothless.jpg', label: 'Беззубик' },
          { src: './assets/stoick.jpg', label: 'Стоик' },
          { src: './assets/berk.jpg', label: 'Остров' }
        ],
        correct: 0
      },
      {
        type: 'image',
        question: 'Найди мальчика, который дружит с Иккингом!',
        images: [
          { src: './assets/fishlegs.jpg', label: 'Рыбьеног' },
          { src: './assets/snotlout.jpg', label: 'Сморкала' },
          { src: './assets/stoick.jpg', label: 'Стоик' },
          { src: './assets/gobber.jpg', label: 'Плевака' }
        ],
        correct: 0
      },
      {
        type: 'image',
        question: 'Кто здесь самый хвастливый мальчик?',
        images: [
          { src: './assets/snotlout.jpg', label: 'Сморкала' },
          { src: './assets/hiccup.jpg', label: 'Иккинг' },
          { src: './assets/fishlegs.jpg', label: 'Рыбьеног' },
          { src: './assets/camicazi.jpg', label: 'Камикадза' }
        ],
        correct: 0
      },
      {
        type: 'image',
        question: 'Найди храбрую девочку!',
        images: [
          { src: './assets/camicazi.jpg', label: 'Камикадза' },
          { src: './assets/fishlegs.jpg', label: 'Рыбьеног' },
          { src: './assets/snotlout.jpg', label: 'Сморкала' },
          { src: './assets/hiccup.jpg', label: 'Иккинг' }
        ],
        correct: 0
      },
      {
        type: 'image',
        question: 'Найди учителя маленьких викингов!',
        images: [
          { src: './assets/gobber.jpg', label: 'Плевака' },
          { src: './assets/stoick.jpg', label: 'Стоик' },
          { src: './assets/hiccup.jpg', label: 'Иккинг' },
          { src: './assets/toothless.jpg', label: 'Беззубик' }
        ],
        correct: 0
      },
      {
        type: 'image',
        question: 'Найди маленького чёрного дракончика!',
        images: [
          { src: './assets/toothless.jpg', label: 'Беззубик' },
          { src: './assets/stormfly.jpg', label: 'Буримуха' },
          { src: './assets/fireworm.jpg', label: 'Огневица' },
          { src: './assets/gobber.jpg', label: 'Плевака' }
        ],
        correct: 0
      },
      {
        type: 'image',
        question: 'Кто из них — дракон?',
        images: [
          { src: './assets/fireworm.jpg', label: 'Огневица' },
          { src: './assets/hiccup.jpg', label: 'Иккинг' },
          { src: './assets/stoick.jpg', label: 'Стоик' },
          { src: './assets/camicazi.jpg', label: 'Камикадза' }
        ],
        correct: 0
      }
    ]
  },

  medium: {
    label: 'Викинг',
    subtitle: 'для детей 5-6',
    icon: '⚔️',
    questions: [
      // === TEXT CHOICE ===
      {
        type: 'choice',
        question: 'Как зовут дракониху Камикадзы?',
        answers: ['Буримуха', 'Огневица', 'Жутьздорова', 'Слизняк'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'К какому племени принадлежит Иккинг?',
        answers: ['Лохматые Хулиганы', 'Бой-бабы', 'Отщепенцы', 'Остолопы'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Что умеет дракониха Буримуха?',
        answers: ['Менять цвет', 'Дышать огнём', 'Становиться невидимой', 'Плавать под водой'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Кто такой Плевака Крикливый?',
        answers: ['Учитель новобранцев', 'Вождь племени', 'Отец Иккинга', 'Злодей'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Кем приходится Сморкала Иккингу?',
        answers: ['Двоюродный брат', 'Лучший друг', 'Учитель', 'Враг'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Чем уникален Иккинг среди всех викингов?',
        answers: ['Понимает драконий язык', 'Самый сильный', 'Самый высокий', 'Умеет летать'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Как называется остров, где живёт Иккинг?',
        answers: ['Остров Олух', 'Остров Драконов', 'Остров Сокровищ', 'Остров Мечты'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Какое полное имя Стоика?',
        answers: ['Стоик Обширный', 'Стоик Грозный', 'Стоик Великий', 'Стоик Храбрый'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Как звать маму Камикадзы?',
        answers: ['Большегрудая Берта', 'Экселиннор', 'Валгалларама', 'Аделаида'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Что нужно сделать, чтобы приручить дракона в книге?',
        answers: ['Крикнуть на него', 'Подарить рыбу', 'Поиграть с ним', 'Спеть песню'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'С каким племенем враждуют Лохматые Хулиганы?',
        answers: ['Остолопы', 'Бой-бабы', 'Миролюбы', 'Магманьяки'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Какой дракон — Ужасное Чудовище?',
        answers: ['Огневица', 'Беззубик', 'Буримуха', 'Жутьздорова'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Как зовут вождя Остолопов?',
        answers: ['Могадон Остолоп', 'Элвин Вероломный', 'Стоик Обширный', 'Норберт Сумасброд'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Кто самый худой мальчик в племени?',
        answers: ['Рыбьеног', 'Иккинг', 'Сморкала', 'Плевака'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Сколько слов для дождя знают жители Олуха?',
        answers: ['28', '10', '5', '100'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Какое племя состоит только из женщин?',
        answers: ['Бой-бабы', 'Остолопы', 'Отщепенцы', 'Миролюбы'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Кем является Камикадза?',
        answers: ['Храброй девочкой из племени Бой-баб', 'Драконихой', 'Мамой Иккинга', 'Учительницей'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Какого дракона поймал Иккинг в Пещере дракона?',
        answers: ['Беззубика', 'Огневицу', 'Буримуху', 'Жутьздорову'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Чем Иккинг отличается от других мальчиков племени?',
        answers: ['Он маленький и худой', 'Он самый сильный', 'Он самый высокий', 'У него борода'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Кто лучший воин среди маленьких викингов?',
        answers: ['Сморкала', 'Иккинг', 'Рыбьеног', 'Камикадза'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Что Рыбьеног любит больше всего?',
        answers: ['Читать книги о драконах', 'Воевать', 'Плавать', 'Бегать'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Как ведёт себя Сморкала?',
        answers: ['Хвастается и задирается', 'Тихий и скромный', 'Добрый и заботливый', 'Всегда спит'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Что едят драконы в книгах?',
        answers: ['Рыбу', 'Конфеты', 'Хлеб', 'Суп'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Кем работает Плевака в племени?',
        answers: ['Учителем новобранцев', 'Поваром', 'Рыбаком', 'Лекарем'],
        correct: 0
      },
      // === IMAGE ===
      {
        type: 'image',
        question: 'Найди Камикадзу — храбрую девочку из племени Бой-баб!',
        images: [
          { src: './assets/camicazi.jpg', label: 'Камикадза' },
          { src: './assets/hiccup.jpg', label: 'Иккинг' },
          { src: './assets/fishlegs.jpg', label: 'Рыбьеног' },
          { src: './assets/gobber.jpg', label: 'Плевака' }
        ],
        correct: 0
      },
      {
        type: 'image',
        question: 'Найди Стоика Обширного — вождя Лохматых Хулиганов!',
        images: [
          { src: './assets/stoick.jpg', label: 'Стоик' },
          { src: './assets/snotlout.jpg', label: 'Сморкала' },
          { src: './assets/gobber.jpg', label: 'Плевака' },
          { src: './assets/fishlegs.jpg', label: 'Рыбьеног' }
        ],
        correct: 0
      },
      {
        type: 'image',
        question: 'Найди Рыбьенога — самого худого мальчика в племени!',
        images: [
          { src: './assets/fishlegs.jpg', label: 'Рыбьеног' },
          { src: './assets/hiccup.jpg', label: 'Иккинг' },
          { src: './assets/snotlout.jpg', label: 'Сморкала' },
          { src: './assets/stoick.jpg', label: 'Стоик' }
        ],
        correct: 0
      },
      {
        type: 'image',
        question: 'Найди Буримуху — дракониху, которая меняет цвет!',
        images: [
          { src: './assets/stormfly.jpg', label: 'Буримуха' },
          { src: './assets/toothless.jpg', label: 'Беззубик' },
          { src: './assets/fireworm.jpg', label: 'Огневица' },
          { src: './assets/berk.jpg', label: 'Остров' }
        ],
        correct: 0
      },
      {
        type: 'image',
        question: 'Найди Плеваку — грозного учителя викингов!',
        images: [
          { src: './assets/gobber.jpg', label: 'Плевака' },
          { src: './assets/stoick.jpg', label: 'Стоик' },
          { src: './assets/hiccup.jpg', label: 'Иккинг' },
          { src: './assets/snotlout.jpg', label: 'Сморкала' }
        ],
        correct: 0
      },
      {
        type: 'image',
        question: 'Где остров Олух? Найди его!',
        images: [
          { src: './assets/berk.jpg', label: 'Остров Олух' },
          { src: './assets/fireworm.jpg', label: 'Огневица' },
          { src: './assets/stormfly.jpg', label: 'Буримуха' },
          { src: './assets/toothless.jpg', label: 'Беззубик' }
        ],
        correct: 0
      },
      {
        type: 'image',
        question: 'Найди Сморкалу Мордоворота!',
        images: [
          { src: './assets/snotlout.jpg', label: 'Сморкала' },
          { src: './assets/fishlegs.jpg', label: 'Рыбьеног' },
          { src: './assets/hiccup.jpg', label: 'Иккинг' },
          { src: './assets/camicazi.jpg', label: 'Камикадза' }
        ],
        correct: 0
      },
      // === IMAGE_TEXT ===
      {
        type: 'image_text',
        question: 'Это дракон Огневица — Ужасное Чудовище. Чей это дракон?',
        showImage: './assets/fireworm.jpg',
        answers: ['Сморкалы', 'Иккинга', 'Рыбьенога', 'Камикадзы'],
        correct: 0
      },
      {
        type: 'image_text',
        question: 'Смотри на этого персонажа. Кто это?',
        showImage: './assets/hiccup.jpg',
        answers: ['Иккинг', 'Сморкала', 'Рыбьеног', 'Стоик'],
        correct: 0
      },
      {
        type: 'image_text',
        question: 'Посмотри на дракониху. Что она умеет?',
        showImage: './assets/stormfly.jpg',
        answers: ['Менять цвет', 'Дышать льдом', 'Становиться гигантской', 'Плавать под водой'],
        correct: 0
      },
      {
        type: 'image_text',
        question: 'Этот большой викинг — вождь! Как его зовут?',
        showImage: './assets/stoick.jpg',
        answers: ['Стоик', 'Плевака', 'Могадон', 'Элвин'],
        correct: 0
      },
      {
        type: 'image_text',
        question: 'Этот мальчик — двоюродный брат Иккинга. Кто он?',
        showImage: './assets/snotlout.jpg',
        answers: ['Сморкала', 'Рыбьеног', 'Камикадза', 'Стоик'],
        correct: 0
      }
    ]
  },

  hard: {
    label: 'Вождь',
    subtitle: 'для детей 7+',
    icon: '👑',
    questions: [
      // === TEXT CHOICE ===
      {
        type: 'choice',
        question: 'Кем на самом деле оказался Беззубик?',
        answers: ['Молодой Моредраконус Гигантикус Максимус', 'Обычный Коричный', 'Громмель', 'Грубык'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Кто главный злодей серии?',
        answers: ['Элвин Вероломный', 'Норберт Сумасброд', 'Могадон Остолоп', 'Стоик'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Кто мать Элвина Вероломного?',
        answers: ['Экселиннор', 'Валгалларама', 'Большегрудая Берта', 'Камикадза'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Как называется племя Камикадзы?',
        answers: ['Бой-бабы', 'Лохматые Хулиганы', 'Отщепенцы', 'Истероиды'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Какой дракон у Рыбьенога в начале серии?',
        answers: ['Жутьздорова', 'Беззубик', 'Огневица', 'Слизняк'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Кто дедушка Иккинга?',
        answers: ['Старый Сморчок', 'Чернобород Оголтелый', 'Толстопуз Пивобрюх', 'Элвин'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Какой дракон является единственным вегетарианцем?',
        answers: ['Жутьздорова', 'Беззубик', 'Огневица', 'Буримуха'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Кто такой Неимоверный Крутняк?',
        answers: ['Телохранитель Иккинга', 'Вождь Отщепенцев', 'Дедушка Иккинга', 'Учитель'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Как зовут прапрадеда Иккинга?',
        answers: ['Чернобород Оголтелый', 'Старый Сморчок', 'Толстопуз Пивобрюх', 'Элвин'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Кто такой Норберт Сумасброд?',
        answers: ['Вождь племени Истероидов', 'Вождь Остолопов', 'Отец Камикадзы', 'Друг Иккинга'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Какое племя самое опасное и кровожадное?',
        answers: ['Отщепенцы', 'Остолопы', 'Миролюбы', 'Лохматые Хулиганы'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Где Чернобород Оголтелый спрятал сокровища?',
        answers: ['На Острове Черепушников', 'На Острове Олух', 'В Пещере дракона', 'На дне моря'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Какое полное имя Иккинга?',
        answers: ['Иккинг Кровожадный Карасик III', 'Иккинг Великий', 'Иккинг Храбрый', 'Иккинг Обширный'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Как называется самое жестокое племя Варварского Архипелага?',
        answers: ['Племя Страхолюдов', 'Отщепенцы', 'Душегубы', 'Темняки'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Что такое Драконий Язык?',
        answers: ['Язык, на котором говорят драконы', 'Название острова', 'Вид оружия', 'Имя дракона'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Какое племя промышляет рыболовством?',
        answers: ['Миролюбы', 'Остолопы', 'Отщепенцы', 'Бой-бабы'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Где находится Истерия?',
        answers: ['На юго-западе от Олуха', 'На севере от Олуха', 'На востоке от Олуха', 'Рядом с Олухом'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Как ведёт себя племя Гостедавов (Гостеприимцев)?',
        answers: ['Крайне опасное, хотя не кажется', 'Очень дружелюбное', 'Всегда воюет', 'Самое мирное'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Сколько книг в серии «Как приручить дракона»?',
        answers: ['12', '8', '6', '20'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Что произошло с Драконами к концу серии книг?',
        answers: ['Они ушли в скрытый мир', 'Они стали домашними', 'Они все погибли', 'Они научились говорить'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Какое племя враждует со ВСЕМИ другими племенами?',
        answers: ['Отщепенцы', 'Бой-бабы', 'Лохматые Хулиганы', 'Остолопы'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Что значит «Олух» — название острова?',
        answers: ['Остров назван «Мокрым» из-за дождей', 'Остров огромный', 'Остров тёплый', 'Остров маленький'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Кем хочет стать Иккинг, когда вырастет?',
        answers: ['Великим героем и вождём', 'Рыбаком', 'Учителем', 'Драконоведом'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Как называется первая книга серии?',
        answers: ['Как приручить дракона', 'Как стать пиратом', 'Как разговаривать по-драконьи', 'Как стать берсерком'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Какой вид дракона Беззубик в начале?',
        answers: ['Обычный Коричный', 'Ужасное Чудовище', 'Мальтийский', 'Громмель'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Кто написал «Неполный Справочник Драконов» в книгах?',
        answers: ['Профессор Горбот', 'Иккинг', 'Рыбьеног', 'Стоик'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Какой остров находится на западе от Олуха и необитаем?',
        answers: ['Остров Черепушников', 'Остров Остолопов', 'Миролюбивая страна', 'Истерия'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Как звать вторую знаменитую предшественницу Иккинга?',
        answers: ['Иккинг Кровожадный Карасик II', 'Аделаида', 'Валгалларама', 'Экселиннор'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Какое племя сумасшедшее и избегалось только Хулиганами?',
        answers: ['Истероиды', 'Драчуны', 'Негодяи', 'Шандарахайки'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'С кем враждуют Драчуны?',
        answers: ['С Отщепенцами, Остолопами и Бой-Бабами', 'Со всеми', 'Ни с кем', 'Только с Хулиганами'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Как выглядит остров Олух?',
        answers: ['Покрыт вереском, скудный рельеф', 'Тропический с пальмами', 'Пустынный и жаркий', 'Горный с вулканами'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Что разделяет Истерию от остальных островов?',
        answers: ['Проклятие Злокогтя', 'Огромный океан', 'Ледяная стена', 'Драконья завеса'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Какое настоящее имя Рыбьенога?',
        answers: ['Рыбьеног Безымянный', 'Рыбьеног Сильный', 'Рыбьеног Храбрый', 'Рыбьеног Мудрый'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Кто такая Валгалларама?',
        answers: ['Мать Иккинга', 'Мать Камикадзы', 'Мать Сморкалы', 'Мать Рыбьенога'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Какое важное качество есть у Иккинга, которого нет у других?',
        answers: ['Умение разговаривать с драконами', 'Огромная сила', 'Умение летать', 'Бессмертие'],
        correct: 0
      },
      {
        type: 'choice',
        question: 'Что такое «Сумасшедший Лабиринт»?',
        answers: ['Остров и подземный лабиринт', 'Название книги', 'Игра викингов', 'Вид дракона'],
        correct: 0
      },
      // === IMAGE ===
      {
        type: 'image',
        question: 'Найди Плеваку Крикливого — учителя маленьких викингов!',
        images: [
          { src: './assets/gobber.jpg', label: 'Плевака' },
          { src: './assets/stoick.jpg', label: 'Стоик' },
          { src: './assets/snotlout.jpg', label: 'Сморкала' },
          { src: './assets/hiccup.jpg', label: 'Иккинг' }
        ],
        correct: 0
      },
      {
        type: 'image',
        question: 'Найди Сморкалу Мордоворота — хвастливого кузена Иккинга!',
        images: [
          { src: './assets/snotlout.jpg', label: 'Сморкала' },
          { src: './assets/hiccup.jpg', label: 'Иккинг' },
          { src: './assets/fishlegs.jpg', label: 'Рыбьеног' },
          { src: './assets/stoick.jpg', label: 'Стоик' }
        ],
        correct: 0
      },
      {
        type: 'image',
        question: 'Найди Огневицу — Ужасное Чудовище!',
        images: [
          { src: './assets/fireworm.jpg', label: 'Огневица' },
          { src: './assets/toothless.jpg', label: 'Беззубик' },
          { src: './assets/stormfly.jpg', label: 'Буримуха' },
          { src: './assets/berk.jpg', label: 'Остров' }
        ],
        correct: 0
      },
      {
        type: 'image',
        question: 'Найди Камикадзу — лучшего вора среди Бой-баб!',
        images: [
          { src: './assets/camicazi.jpg', label: 'Камикадза' },
          { src: './assets/fishlegs.jpg', label: 'Рыбьеног' },
          { src: './assets/gobber.jpg', label: 'Плевака' },
          { src: './assets/snotlout.jpg', label: 'Сморкала' }
        ],
        correct: 0
      },
      {
        type: 'image',
        question: 'Кто из них — дракон Моредраконус Гигантикус Максимус?',
        images: [
          { src: './assets/toothless.jpg', label: 'Беззубик' },
          { src: './assets/fireworm.jpg', label: 'Огневица' },
          { src: './assets/stormfly.jpg', label: 'Буримуха' },
          { src: './assets/hiccup.jpg', label: 'Иккинг' }
        ],
        correct: 0
      },
      // === IMAGE_TEXT ===
      {
        type: 'image_text',
        question: 'Это дракониха Буримуха. Что она умеет?',
        showImage: './assets/stormfly.jpg',
        answers: ['Менять цвет', 'Дышать льдом', 'Становиться гигантской', 'Читать мысли'],
        correct: 0
      },
      {
        type: 'image_text',
        question: 'Это Рыбьеног. Какой у него дракон?',
        showImage: './assets/fishlegs.jpg',
        answers: ['Жутьздорова', 'Беззубик', 'Огневица', 'Буримуха'],
        correct: 0
      },
      {
        type: 'image_text',
        question: 'Это Стоик. Кем он является в племени?',
        showImage: './assets/stoick.jpg',
        answers: ['Вождём', 'Учителем', 'Кузнецом', 'Лекарем'],
        correct: 0
      },
      {
        type: 'image_text',
        question: 'Это Камикадза. К какому племени она принадлежит?',
        showImage: './assets/camicazi.jpg',
        answers: ['Бой-бабы', 'Лохматые Хулиганы', 'Остолопы', 'Отщепенцы'],
        correct: 0
      },
      {
        type: 'image_text',
        question: 'Это Плевака. Кем он работает?',
        showImage: './assets/gobber.jpg',
        answers: ['Учителем новобранцев', 'Вождём', 'Кузнецом', 'Лекарем'],
        correct: 0
      }
    ]
  }
};

// Question count per difficulty (increased for 4x questions)
const QUESTION_COUNTS = {
  easy: 15,
  medium: 20,
  hard: 25
};
