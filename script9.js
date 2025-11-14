document.addEventListener('DOMContentLoaded', () => {
  const quizContent = document.getElementById('quiz-content');
  const resultContainer = document.getElementById('result');
  const resultText = document.getElementById('result-text');
  const resultImage = document.getElementById('result-image');
  const restartBtn = document.getElementById('restart-btn');
  const homeBtn = document.getElementById('home-btn');
  const progressBar = document.getElementById('progress-bar');
  const quizContainer = document.getElementById('quiz-container');

  const quizData = [
  {
    image: "quiz9/1.jpg",
    question: "Какой запах пробуждает в тебе самые сильные и тёплые эмоции?",
    answers: [
      { text: "Свежескошенная трава, наполняющая воздух лёгкой сладостью лета", type: "a" },
      { text: "Запах старой пыльной книги, в которой хранятся тайны и забытые истории", type: "b" },
      { text: "Нежный аромат детского крема, который возвращает к беззаботному детству", type: "c" },
      { text: "Древесный дым, тянущийся из далёких лесных костров и обещающий уют", type: "d" },
      { text: "Тайна старого сундука с давно забытыми вещами и воспоминаниями", type: "e" }
    ]
  },
  {
    image: "quiz9/2.jpg",
    question: "Какое место способно мгновенно унять твои тревоги и подарить покой?",
    answers: [
      { text: "Бескрайнее летнее поле, залитое солнцем и наполненное звуками природы", type: "a" },
      { text: "Пыльный чердак, где каждый предмет дышит историей и тайнами прошлого", type: "e" },
      { text: "Тёплая кухня дома детства, где запах свежей выпечки согревает сердце", type: "c" },
      { text: "Тихий лес у костра, где пламя создаёт живую игру теней и света", type: "d" },
      { text: "Уютная библиотека — храм тишины, знаний и вдохновения", type: "b" }
    ]
  },
  {
    image: "quiz9/3.jpg",
    question: "Что из прошлого ты бы хотела забрать с собой, сохранив частичку времени?",
    answers: [
      { text: "Старую фотографию, в которой застыл миг особой радости", type: "a" },
      { text: "Детскую игрушку, наполненную детской беззаботностью и счастьем", type: "c" },
      { text: "Старинную брошь — украшение, в котором живёт дух ушедших эпох", type: "e" },
      { text: "Любимую книгу, хранящую мудрость и тепло слов", type: "b" },
      { text: "Щепотку пепла — символ прощания и нового начала", type: "d" }
    ]
  },
  {
    image: "quiz9/4.jpg",
    question: "В какой момент и месте ты чувствуешь себя максимально уютно и спокойно?",
    answers: [
      { text: "Летним вечером, когда воздух наполнен запахами цветов и свежестью", type: "a" },
      { text: "Под тёплым пледом зимой, укутанная в мягкость и тепло", type: "c" },
      { text: "Во время шторма — когда бушуют стихии, а ты в безопасности дома", type: "d" },
      { text: "В доме с историей, где стены помнят множество судеб и тайн", type: "e" },
      { text: "За старым письменным столом, погружённая в мысли и творчество", type: "b" }
    ]
  },
  {
    image: "quiz9/5.png",
    question: "Какой звук оставляет в твоей душе особенный след и отклик?",
    answers: [
      { text: "Жужжание насекомых в высоких травах — тихая музыка природы", type: "a" },
      { text: "Скрип половиц, наполняющий пространство историей и памятью", type: "e" },
      { text: "Весёлый смех ребёнка — лёгкий и искренний, как луч солнца", type: "c" },
      { text: "Треск костра, завораживающий и согревающий в холодный вечер", type: "d" },
      { text: "Шуршание страниц, раскрывающих перед тобой новые миры", type: "b" }
    ]
  },
  {
    image: "quiz9/6.jpg",
    question: "Что из воспоминаний тебе ближе всего — то, что наполняет сердце светом?",
    answers: [
      { text: "Яркие летние каникулы, полные свободы и приключений", type: "a" },
      { text: "Беззаботные детские игры, где всё кажется возможным", type: "c" },
      { text: "Поиски забытого дневника, хранящего тайны и мечты", type: "b" },
      { text: "Тайные беседы ночью — моменты доверия и близости", type: "d" },
      { text: "Старинные легенды, передаваемые из поколения в поколение", type: "e" }
    ]
  },
  {
    image: "quiz9/7.jpg",
    question: "Какой напиток приносит твоей душе тепло и уют в холодные дни?",
    answers: [
      { text: "Травяной отвар, наполненный природной силой и спокойствием", type: "a" },
      { text: "Кофе в библиотеке — бодрящий и вдохновляющий", type: "b" },
      { text: "Домашний компот, сладкий и согревающий, как объятия", type: "c" },
      { text: "Чай, приготовленный на костре, с нотками дыма и леса", type: "d" },
      { text: "Старое вино — напиток воспоминаний и особых моментов", type: "e" }
    ]
  },
  {
    image: "quiz9/8.jpg",
    question: "Что бы ты взяла с собой из прошлого, чтобы сохранить его дыхание?",
    answers: [
      { text: "Незабудку из летнего поля — символ нежности и памяти", type: "a" },
      { text: "Закладку из книги — маленький оберег для мыслей и мечтаний", type: "b" },
      { text: "Детскую фотографию, наполненную светом и радостью", type: "c" },
      { text: "Обгоревшую ветку, словно напоминание о силе и возрождении", type: "d" },
      { text: "Письмо из прошлого века, хранящее тайны и чувства", type: "e" }
    ]
  },
  {
    image: "quiz9/9.jpg",
    question: "Если бы ты могла на мгновение оказаться в любом месте, куда бы ты отправилась?",
    answers: [
      { text: "На цветущий луг в мягком закатном свете, полном тишины", type: "a" },
      { text: "В детскую комнату — оазис воспоминаний и тепла", type: "c" },
      { text: "В старую библиотеку — место мудрости и вдохновения", type: "b" },
      { text: "У костра в глубоком лесу, где треск огня и звёзды над головой", type: "d" },
      { text: "В зал древнего особняка, полный тайн и истории", type: "e" }
    ]
  },
  {
    image: "quiz9/10.jpg",
    question: "Какие воспоминания живут в тебе особенно ярко и глубоко?",
    answers: [
      { text: "О простых летних вечерах, наполненных светом и покоем", type: "a" },
      { text: "О зачитанных книгах, что становились твоими друзьями", type: "b" },
      { text: "О детских шалостях — лёгких и радостных моментах", type: "c" },
      { text: "О таинственных разговорах, полных смысла и доверия", type: "d" },
      { text: "О древних историях твоего рода, хранящих мудрость поколений", type: "e" }
    ]
  }
];


  let currentQuestionIndex = 0;
  let answersCount = { a: 0, b: 0, c: 0, d: 0, e: 0 };

  function showQuestion() {
    if (currentQuestionIndex >= quizData.length) {
      showResult();
      return;
    }

    progressBar.style.width = `${(currentQuestionIndex / quizData.length) * 100}%`;

    const q = quizData[currentQuestionIndex];
    quizContent.innerHTML = `
      <h2>${q.question}</h2>
      <img src="${q.image}" alt="Иллюстрация к вопросу" class="question-image" />
      <div class="answers-list">
        ${q.answers.map(ans =>
          `<button class="answer-btn" data-type="${ans.type}">${ans.text}</button>`
        ).join('')}
      </div>
    `;

    document.querySelectorAll('.answer-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-type');
        answersCount[type]++;
        currentQuestionIndex++;
        showQuestion();
      });
    });
  }

  function showResult() {
    progressBar.style.width = '100%';
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    const maxType = Object.keys(answersCount).reduce((a, b) =>
      answersCount[a] > answersCount[b] ? a : b
    );

    const results = {
  a: {
    text: "Ты — воспоминание о тёплом лете. Ты пахнешь свежескошенной травой и беззаботной свободой. Внутри тебя живёт лёгкость, детская радость и тот светлый момент, когда всё кажется возможным и простым.",
    image: "result9/1.jpg"
  },
  b: {
    text: "Ты — воспоминание о старой книге. Мудрое и спокойное, с лёгким налётом пыли времени. Ты — как родной друг, к которому возвращаешься, чтобы найти настоящую глубину и тепло среди суеты мира.",
    image: "result9/2.jpg"
  },
  c: {
    text: "Ты — воспоминание о беззаботном детстве. Солнечное и звонкое, наполненное наивными открытиями и смехом. В тебе живёт искренность и свет, который напоминает о том, как важно видеть мир глазами ребёнка.",
    image: "result9/3.jpg"
  },
  d: {
    text: "Ты — воспоминание о таинственном вечере. Ты пахнешь дымом костра, прохладным ночным ветром и лёгкой загадкой. В тебе живёт магия момента, когда мир замирает и открывается в своей непостижимой глубине.",
    image: "result9/4.jpg"
  },
  e: {
    text: "Ты — воспоминание древнего рода. Многослойное и вечное, в тебе живёт мудрость поколений, эхо прошлого и надежда на будущее. Ты — хранитель истории, связующий нити времени в единое целое.",
    image: "result9/5.jpg"
  }
};


    resultText.textContent = results[maxType].text;
    resultImage.src = results[maxType].image;
    resultImage.alt = "Иллюстрация результата";
  }

  restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    answersCount = { a: 0, b: 0, c: 0, d: 0, e: 0 };
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    showQuestion();
  });

  homeBtn.addEventListener('click', () => {
    window.location.href = 'quiz-list.html';
  });

  showQuestion();
});
