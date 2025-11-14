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
    question: "Какой оттенок нежно согревает твою душу в этот момент?",
    image: "quiz5/1.jpg",
    answers: [
      { text: "Сиреневый — как тихий шёпот вечерней нежности", type: "lavender" },
      { text: "Пастельно-розовый — нежность первых рассветов и надежд", type: "peony" },
      { text: "Глубокий синий — бездна мечтаний и глубоких мыслей", type: "iris" },
      { text: "Ярко-красный — пульс страсти и огня сердца", type: "poppy" },
      { text: "Солнечно-жёлтый — тепло света, что пробуждает радость", type: "sunflower" }
    ]
  },
  {
    question: "В каком месте мир кажется тебе наполненным счастьем и смыслом?",
    image: "quiz5/2.jpg",
    answers: [
      { text: "На поле среди колышущихся трав, где время замедляется", type: "sunflower" },
      { text: "В уютном саду, где цветы шепчут о нежности", type: "peony" },
      { text: "На берегу озера — зеркало души и глубина тишины", type: "iris" },
      { text: "В уединённом лесу, где царит мудрая тишина", type: "lavender" },
      { text: "На шумном празднике, где встречаются сердца и смех", type: "poppy" }
    ]
  },
  {
    question: "Какой характер раскрывает тебя настоящего?",
    image: "quiz5/3.jpg",
    answers: [
      { text: "Нежный и заботливый — как лёгкий весенний ветерок", type: "peony" },
      { text: "Спокойный и мудрый — словно тёмная вечерняя сирень", type: "lavender" },
      { text: "Яркий и энергичный — как пылающий закат", type: "poppy" },
      { text: "Мечтательный и задумчивый — как ночное небо в звездных снах", type: "iris" },
      { text: "Весёлый и солнечный — как улыбка летнего дня", type: "sunflower" }
    ]
  },
  {
    question: "Какой аромат пленяет твоё сердце и пробуждает воспоминания?",
    image: "quiz5/4.jpg",
    answers: [
      { text: "Травяной и свежий — дыхание природы и жизни", type: "lavender" },
      { text: "Лёгкий и сладкий — нежность цветущих лепестков", type: "peony" },
      { text: "Тонкий и водяной — прохлада утренней росы", type: "iris" },
      { text: "Яркий и терпкий — огненный зов приключений", type: "poppy" },
      { text: "Медовый и тёплый — ласка солнца и сладость жизни", type: "sunflower" }
    ]
  },
  {
    question: "Какая пора года кажется тебе самой близкой и родной?",
    image: "quiz5/5.jpg",
    answers: [
      { text: "Лето — время света и беззаботных мгновений", type: "sunflower" },
      { text: "Весна — пробуждение и новые начала", type: "peony" },
      { text: "Осень — золотые воспоминания и тихая мудрость", type: "iris" },
      { text: "Поздняя весна — пора нежности и расцвета", type: "poppy" },
      { text: "Начало лета — предвкушение ярких событий", type: "lavender" }
    ]
  },
  {
    question: "Как ты находишь покой и силы после долгого дня?",
    image: "quiz5/6.jpg",
    answers: [
      { text: "Прогуливаюсь на природе — сливаясь с дыханием земли", type: "lavender" },
      { text: "Устраиваю пикник — разделяя радость с близкими", type: "sunflower" },
      { text: "Читаю книгу в саду — погружаясь в тихие истории", type: "peony" },
      { text: "Слушаю музыку у воды — чувствуя ритм волн и сердца", type: "iris" },
      { text: "Танцую или пою — позволяя душе свободно летать", type: "poppy" }
    ]
  },
  {
    question: "Что в тебе является твоей главной силой и вдохновением?",
    image: "quiz5/7.jpg",
    answers: [
      { text: "Ласковость — нежность, способная лечить", type: "peony" },
      { text: "Спокойствие — глубина, в которой рождаются решения", type: "lavender" },
      { text: "Оригинальность — искра, что освещает путь", type: "iris" },
      { text: "Харизма — пламя, притягивающее и согревающее", type: "poppy" },
      { text: "Жизнерадостность — свет, что озаряет даже тёмные дни", type: "sunflower" }
    ]
  },
  {
    question: "Выбери стихию, что откликается в твоём сердце:",
    image: "quiz5/8.jpg",
    answers: [
      { text: "Воздух — свобода и легкость бытия", type: "lavender" },
      { text: "Вода — глубина и спокойствие тайн", type: "iris" },
      { text: "Огонь — страсть и преобразующая сила", type: "poppy" },
      { text: "Земля — устойчивость и мудрость корней", type: "peony" },
      { text: "Солнце — свет и жизнь, что оживляет всё вокруг", type: "sunflower" }
    ]
  },
  {
    question: "Что для тебя — высший смысл и ценность в жизни?",
    image: "quiz5/9.jpg",
    answers: [
      { text: "Внутреннее равновесие — гармония с самим собой", type: "lavender" },
      { text: "Любовь и тепло — силы, что творят чудеса", type: "peony" },
      { text: "Свобода и движение — бесконечный полёт души", type: "poppy" },
      { text: "Тишина и умиротворение — пространство для вдохновения", type: "iris" },
      { text: "Радость и улыбки — светлые мгновения жизни", type: "sunflower" }
    ]
  },
  {
    question: "Какое место ты выберешь, чтобы наполниться новыми силами?",
    image: "quiz5/10.jpg",
    answers: [
      { text: "Поля с ароматными травами — поэзия природы и тишины", type: "lavender" },
      { text: "Уютный сад — укрытие для сердца и души", type: "peony" },
      { text: "Берег озера — место отражений и мечтаний", type: "iris" },
      { text: "Яркий фестиваль — праздник жизни и света", type: "poppy" },
      { text: "Летнее поле под солнцем — бескрайняя радость и свобода", type: "sunflower" }
    ]
  }
];


  let currentQuestionIndex = 0;
  let answersCount = {
    lavender: 0, peony: 0, iris: 0, poppy: 0, sunflower: 0
  };

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
  lavender: {
    text: "Ты — Лаванда. В тебе живёт тёплое умиротворение и нежность. Твой характер словно летний вечер — спокойный, с тонким ароматом доброты. Ты любишь уединение, природу и моменты тишины, где можно услышать свои мысли. Твоя сила — в умении дарить покой, согревать душу и возвращать гармонию тем, кто рядом.",
    image: "result5/1.jpg"
  },
  peony: {
    text: "Ты — Пион. Тонкая, нежная, влюблённая в красоту и уют. Твоё сердце раскрывается навстречу добру, как лепестки под первым утренним светом. Ты умеешь создавать вокруг себя пространство, наполненное теплом, гармонией и заботой. Для тебя важны близкие люди, их улыбки и взаимное понимание.",
    image: "result5/2.jpg"
  },
  iris: {
    text: "Ты — Ирис. Загадочная и глубокая натура, словно отражение звёзд в ночной воде. В твоих глазах — бездонное небо, в сердце — многослойный мир чувств и смыслов. Ты не спешишь открываться, но притягиваешь своей молчаливой силой. Рядом с тобой хочется задуматься, замедлиться и услышать тишину.",
    image: "result5/3.jpg"
  },
  poppy: {
    text: "Ты — Мак. Огонь, живущий в человеке. Яркая, живая, эмоциональная — ты словно вспышка цвета в сером дне. Твоя энергия заражает, твоё сердце бьётся быстрее, а смех легко наполняет пространство. Ты умеешь зажигать, вдохновлять и быть центром притяжения, оставаясь при этом искренней и настоящей.",
    image: "result5/4.jpg"
  },
  sunflower: {
    text: "Ты — Подсолнух. Олицетворение света, радости и тепла. Ты всегда поворачиваешься к жизни лицом, словно ловишь её лучи, и сама излучаешь добрую, солнечную энергию. Люди тянутся к тебе за поддержкой, улыбкой и лёгким взглядом на мир. Ты умеешь радоваться простым вещам и щедро делиться этим с другими.",
    image: "result5/5.jpg"
  }
};


    resultText.textContent = results[maxType].text;
    resultImage.src = results[maxType].image;
    resultImage.alt = "Иллюстрация результата";
  }

  restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    answersCount = { lavender: 0, peony: 0, iris: 0, poppy: 0, sunflower: 0 };
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    showQuestion();
  });

  homeBtn.addEventListener('click', () => {
    window.location.href = 'quiz-list.html';
  });

  showQuestion();
});
