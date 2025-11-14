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
    question: "Какое время суток кажется тебе самым близким сердцу?",
    image: "quiz7/1.jpg",
    answers: [
      { text: "Тихий рассвет — момент пробуждения мира", type: "a" },
      { text: "Яркий полдень — солнце в зените", type: "b" },
      { text: "Тёплый закат — прощание с днем", type: "c" },
      { text: "Глубокая ночь — время тайн и снов", type: "d" },
      { text: "После дождя — свежесть и обновление", type: "e" }
    ]
  },
  {
    question: "Где ты чувствуешь себя наполненной счастьем?",
    image: "quiz7/2.jpg",
    answers: [
      { text: "В саду, окутанном ароматом цветов", type: "a" },
      { text: "На солнечном пляже, убаюканная морем", type: "b" },
      { text: "В уютной кофейне, где время течёт медленно", type: "c" },
      { text: "На восточном рынке специй — взрыв красок и запахов", type: "d" },
      { text: "В лесу после дождя — свежесть и тишина", type: "e" }
    ]
  },
  {
    question: "Какой напиток отражает твоё настроение?",
    image: "quiz7/3.jpg",
    answers: [
      { text: "Розовый чай с лепестками — нежность и романтика", type: "a" },
      { text: "Освежающий лимонад — лёгкость и бодрость", type: "b" },
      { text: "Какао с корицей — тепло и уют", type: "c" },
      { text: "Пряный чай масала — огонь и загадка", type: "d" },
      { text: "Чистая родниковая вода — чистота и свежесть", type: "e" }
    ]
  },
  {
    question: "Какая эмоция чаще всего живёт в твоём сердце?",
    image: "quiz7/4.jpg",
    answers: [
      { text: "Нежность — мягкость души", type: "a" },
      { text: "Бодрость — энергия жизни", type: "b" },
      { text: "Спокойная радость — лёгкость бытия", type: "c" },
      { text: "Страсть — огонь внутри", type: "d" },
      { text: "Спокойствие и умиротворение — гармония мира", type: "e" }
    ]
  },
  {
    question: "Какую стихию ты чувствуешь близкой своей натуре?",
    image: "quiz7/5.jpg",
    answers: [
      { text: "Земля — опора и стабильность", type: "a" },
      { text: "Огонь — энергия и движение", type: "b" },
      { text: "Воздух — свобода и лёгкость", type: "c" },
      { text: "Специи и жара — страсть и экзотика", type: "d" },
      { text: "Дождь и свежесть — обновление и покой", type: "e" }
    ]
  },
  {
    question: "Что для тебя — идеальный отдых?",
    image: "quiz7/6.jpg",
    answers: [
      { text: "Прогулка в цветущем саду — гармония с природой", type: "a" },
      { text: "Поездка к морю — встреча с бескрайней стихией", type: "b" },
      { text: "Вечер с книгой и свечами — уют и тишина", type: "c" },
      { text: "Ночь танцев и приключений — вихрь эмоций", type: "d" },
      { text: "Прогулка после ливня — свежесть и покой", type: "e" }
    ]
  },
  {
    question: "Какой сезон наполняет тебя вдохновением?",
    image: "quiz7/7.jpg",
    answers: [
      { text: "Весна — пробуждение жизни", type: "a" },
      { text: "Лето — яркость и полнота света", type: "b" },
      { text: "Осень — тёплые оттенки и созерцание", type: "c" },
      { text: "Жаркое лето — страсть и жара", type: "d" },
      { text: "Дождливая весна — свежесть и надежда", type: "e" }
    ]
  },
  {
    question: "Что приносит тебе успокоение и покой?",
    image: "quiz7/8.jpg",
    answers: [
      { text: "Запах свежих цветов — дыхание природы", type: "a" },
      { text: "Звон бокалов и радостный смех — праздник жизни", type: "b" },
      { text: "Уютный плед и мерцание свечей — тепло дома", type: "c" },
      { text: "Аромат специй и жар — тепло и загадка", type: "d" },
      { text: "Запах мокрой травы — свежесть земли", type: "e" }
    ]
  },
  {
    question: "Какой цвет кажется тебе самым родным?",
    image: "quiz7/9.jpg",
    answers: [
      { text: "Нежный розовый — мягкость и тепло", type: "a" },
      { text: "Яркий жёлтый — свет и радость", type: "b" },
      { text: "Бежевый — спокойствие и уют", type: "c" },
      { text: "Глубокий бордовый — страсть и сила", type: "d" },
      { text: "Голубой — свобода и лёгкость", type: "e" }
    ]
  },
  {
    question: "Какой комплимент тронул бы тебя до глубины души?",
    image: "quiz7/10.jpg",
    answers: [
      { text: "Ты такая нежная — словно весенний цветок", type: "a" },
      { text: "Ты — заряд энергии и света", type: "b" },
      { text: "Ты создаёшь уют и тепло вокруг", type: "c" },
      { text: "Ты невероятно притягательная и загадочная", type: "d" },
      { text: "С тобой спокойно и легко — как дома", type: "e" }
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
    text: "Ты — аромат розы: тонкая и изысканная, словно лепестки, окутывающие мягким благоуханием. Ты несёшь в себе нежность и романтику, умеешь создавать вокруг атмосферу света и тепла, наполняя сердца окружающих светлыми эмоциями и вдохновением.",
    image: "result7/1.jpg"
  },
  b: {
    text: "Ты — аромат цитруса: свежая, бодрая и жизнерадостная, словно взрыв солнечного света и энергии. В тебе живёт лёгкая дерзость и искрящаяся свежесть, которая заряжает окружающих оптимизмом и желанием двигаться вперёд.",
    image: "result7/2.jpg"
  },
  c: {
    text: "Ты — аромат ванили и какао: уютная и тёплая, словно мягкое объятие в холодный вечер. Твой характер приносит ощущение спокойствия и безопасности, дарит комфорт и умиротворение, словно дом, куда всегда хочется возвращаться.",
    image: "result7/3.jpg"
  },
  d: {
    text: "Ты — аромат восточных специй: загадочная и страстная, окутанная чарующей магией и харизмой. Твой образ оставляет после себя яркий и запоминающийся след, как пламя, что согревает и манит за собой.",
    image: "result7/4.jpg"
  },
  e: {
    text: "Ты — аромат свежести после дождя: чистая и спокойная, словно лёгкий прохладный бриз, который приносит облегчение и умиротворение. Ты создаёшь вокруг себя атмосферу лёгкости и гармонии, даря окружающим вдохновение и покой.",
    image: "result7/5.jpg"
  },
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
