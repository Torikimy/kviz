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
    question: "Что мягко убаюкивает твою душу в минуты тишины?",
    image: "quiz6/1.jpg",
    answers: [
      { text: "Шёпот волн, что ласкают берег", type: "water" },
      { text: "Треск костра — тепло живого огня", type: "fire" },
      { text: "Свежий ветер — дыхание свободы", type: "air" },
      { text: "Шорох листьев — голос земли", type: "earth" },
      { text: "Тёплый солнечный свет — свет надежды", type: "light" }
    ]
  },
  {
    question: "Какое качество отражает твою суть?",
    image: "quiz6/2.jpg",
    answers: [
      { text: "Глубокое спокойствие — тихое море внутри", type: "water" },
      { text: "Пламенная энергия — искра жизни", type: "fire" },
      { text: "Лёгкость бытия — полёт мысли", type: "air" },
      { text: "Устойчивость и опора — крепость корней", type: "earth" },
      { text: "Теплота и свет — светящийся маяк души", type: "light" }
    ]
  },
  {
    question: "Какая погода наполняет тебя вдохновением?",
    image: "quiz6/3.jpg",
    answers: [
      { text: "Дождливый день — музыка капель на стекле", type: "water" },
      { text: "Жаркое солнце — пульс огненного света", type: "fire" },
      { text: "Прохладный ветерок — нежный поцелуй воздуха", type: "air" },
      { text: "Тёплый весенний день — пробуждение жизни", type: "earth" },
      { text: "Яркий, но мягкий солнечный свет — золотое сияние", type: "light" }
    ]
  },
  {
    question: "Какая стихия будит в тебе вдохновение?",
    image: "quiz6/4.jpg",
    answers: [
      { text: "Вода — поток жизни и перемен", type: "water" },
      { text: "Огонь — пламя творчества и страсти", type: "fire" },
      { text: "Воздух — свобода и легкость мысли", type: "air" },
      { text: "Земля — оплот стабильности и роста", type: "earth" },
      { text: "Свет — тепло, что озаряет путь", type: "light" }
    ]
  },
  {
    question: "Какой цвет говорит с твоей душой на одном языке?",
    image: "quiz6/5.jpg",
    answers: [
      { text: "Глубокий синий — глубина океана и мечты", type: "water" },
      { text: "Ярко-оранжевый — огненный зов и страсть", type: "fire" },
      { text: "Небесно-голубой — простор и лёгкость", type: "air" },
      { text: "Зелёный — жизнь, рост и покой", type: "earth" },
      { text: "Золотистый — свет и вдохновение", type: "light" }
    ]
  },
  {
    question: "Как ты обычно воплощаешь свои намерения в жизнь?",
    image: "quiz6/6.jpg",
    answers: [
      { text: "Спокойно и обдуманно — как тихая вода", type: "water" },
      { text: "Импульсивно и страстно — пылающим пламенем", type: "fire" },
      { text: "Легко и спонтанно — подобно ветру", type: "air" },
      { text: "Надёжно и стабильно — словно земля под ногами", type: "earth" },
      { text: "Добро и мягко — словно нежный свет", type: "light" }
    ]
  },
  {
    question: "Что в людях трогает твоё сердце глубже всего?",
    image: "quiz6/7.jpg",
    answers: [
      { text: "Умение слышать без слов — мудрость воды", type: "water" },
      { text: "Настоящие эмоции — пламя страсти", type: "fire" },
      { text: "Лёгкость и юмор — ветер радости", type: "air" },
      { text: "Надёжность — крепкий фундамент земли", type: "earth" },
      { text: "Доброта — теплый свет души", type: "light" }
    ]
  },
  {
    question: "Как проведёшь свободный день, чтобы наполниться энергией?",
    image: "quiz6/8.jpg",
    answers: [
      { text: "Прогулка у воды — общение с бескрайней стихией", type: "water" },
      { text: "Активное приключение — огонь новых открытий", type: "fire" },
      { text: "Поездка без плана — ветер перемен и свободы", type: "air" },
      { text: "Поход в лес — объятия земли и покой", type: "earth" },
      { text: "Лежать на солнце — наслаждаться светом жизни", type: "light" }
    ]
  },
  {
    question: "О какой мечте ты хранишь трепет в сердце?",
    image: "quiz6/9.jpg",
    answers: [
      { text: "Побывать на берегу океана — встретиться с бесконечностью", type: "water" },
      { text: "Совершить безумный поступок — воспламенить свою страсть", type: "fire" },
      { text: "Полетать на воздушном шаре — подняться выше обыденности", type: "air" },
      { text: "Построить уютный дом — создать крепость души", type: "earth" },
      { text: "Путешествовать по солнечным странам — ловить свет и тепло", type: "light" }
    ]
  },
  {
    question: "С каким словом ты себя больше всего ассоциируешь?",
    image: "quiz6/10.jpg",
    answers: [
      { text: "Гармония — плавность водного потока", type: "water" },
      { text: "Страсть — пламя огня внутри", type: "fire" },
      { text: "Свобода — ветер, что несёт мечты", type: "air" },
      { text: "Спокойствие — устойчивость земли", type: "earth" },
      { text: "Радость — свет, что озаряет путь", type: "light" }
    ]
  }
];


  let currentQuestionIndex = 0;
  let answersCount = {
    water: 0, fire: 0, air: 0, earth: 0, light: 0
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
  water: {
    text: "Ты — Вода. Гибкая и нежная, ты умеешь плыть по течению жизни, принимая её со всеми изменениями. Твоя глубина скрывает внутренний мир, полный спокойствия и силы. Ты умеешь убаюкивать своим присутствием и находить гармонию в каждом моменте, словно тихий ручей, несущий мир и свежесть.",
    image: "result6/1.jpg"
  },
  fire: {
    text: "Ты — Огонь. Пламенная, страстная и неудержимая натура, которая зажигает сердца и вдохновляет на свершения. В тебе пульсирует энергия, способная превращать обычное в яркое и незабываемое. Ты — искра, что пробуждает мир, наполняя его теплом и движением.",
    image: "result6/2.jpg"
  },
  air: {
    text: "Ты — Воздух. Лёгкая и свободная, ты порхаешь между мирами, будто ветер, что приносит перемены и свежие идеи. Твоя непредсказуемость — это твоя сила, а движение и свобода питают твою душу. Ты — дыхание жизни, наполняющее пространство лёгкостью и вдохновением.",
    image: "result6/3.jpg"
  },
  earth: {
    text: "Ты — Земля. Надёжная и крепкая, ты — опора и защита для окружающих. В тебе живёт спокойствие и забота, ты умеешь создавать уют и комфорт, словно плодородная почва, дарящая жизнь и поддержку. Твоя устойчивость — источник силы и безопасности.",
    image: "result6/4.jpg"
  },
  light: {
    text: "Ты — Свет. Тёплый, добрый и лучезарный, ты наполняешь сердца радостью и надеждой. Твой свет согревает даже самые холодные уголки, а твоя доброта словно солнечный луч пробивается сквозь тьму. Ты — вдохновение и источник позитива для тех, кто рядом.",
    image: "result6/5.jpg"
  }
};


    resultText.textContent = results[maxType].text;
    resultImage.src = results[maxType].image;
    resultImage.alt = "Иллюстрация результата";
  }

  restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    answersCount = { water: 0, fire: 0, air: 0, earth: 0, light: 0 };
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    showQuestion();
  });

  homeBtn.addEventListener('click', () => {
    window.location.href = 'quiz-list.html';
  });

  showQuestion();
});
