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
      question: "Какая тень тебе ближе по настроению?",
      image: "quiz3/1.jpg",
      answers: [
        { text: "Тёплая и рассеянная", type: "a" },
        { text: "Графичная и уверенная", type: "b" },
        { text: "Тянущаяся и задумчивая", type: "c" },
        { text: "Острая и драматичная", type: "d" },
        { text: "Ломкая, живая и изменчивая", type: "e" }
      ]
    },
    {
      question: "Что для тебя делает тень особенной?",
      image: "quiz3/2.jpg",
      answers: [
        { text: "Она хранит в себе тайну", type: "a" },
        { text: "Она подчёркивает суть вещей", type: "b" },
        { text: "Она меняет пространство", type: "c" },
        { text: "Она обостряет эмоции", type: "d" },
        { text: "Она создаёт движение", type: "e" }
      ]
    },
    {
      question: "Когда ты замечаешь тени чаще всего?",
      image: "quiz3/3.jpg",
      answers: [
        { text: "На рассвете", type: "a" },
        { text: "В яркий полдень", type: "b" },
        { text: "На закате", type: "c" },
        { text: "В ночном свете фонарей", type: "d" },
        { text: "В пасмурный день", type: "e" }
      ]
    },
    {
      question: "Какой тип теней вызывает у тебя интерес?",
      image: "quiz3/4.jpg",
      answers: [
        { text: "Лёгкая полутень", type: "a" },
        { text: "Резкая отбрасываемая тень", type: "b" },
        { text: "Глубокая тень в углу комнаты", type: "c" },
        { text: "Плотная драматическая тень", type: "d" },
        { text: "Бегущая по стенам и полу", type: "e" }
      ]
    },
    {
      question: "Когда тени в искусстве тебе нравятся больше всего?",
      image: "quiz3/5.jpg",
      answers: [
        { text: "Когда они создают настроение", type: "a" },
        { text: "Когда подчёркивают структуру и форму", type: "b" },
        { text: "Когда вплетаются в композицию", type: "c" },
        { text: "Когда задают остроту сюжета", type: "d" },
        { text: "Когда нарушают привычное", type: "e" }
      ]
    },
    {
      question: "Если бы тень была образом, что бы это было?",
      image: "quiz3/6.jpg",
      answers: [
        { text: "Тихий шёпот на закате", type: "a" },
        { text: "Чёткий силуэт в полдень", type: "b" },
        { text: "Тонкая грань между светом и тьмой", type: "c" },
        { text: "Эмоциональный штрих картины", type: "d" },
        { text: "Игра пятен на старой стене", type: "e" }
      ]
    },
    {
      question: "Какую тень ты хотела бы поймать на снимке?",
      image: "quiz3/7.jpg",
      answers: [
        { text: "Лёгкую, мягкую, почти невидимую", type: "a" },
        { text: "Контрастную и уверенную", type: "b" },
        { text: "Длинную и зыбкую", type: "c" },
        { text: "Жёсткую и драматичную", type: "d" },
        { text: "Необычную и живую", type: "e" }
      ]
    },
    {
      question: "Для чего тебе тень?",
      image: "quiz3/8.jpg",
      answers: [
        { text: "Чтобы создать атмосферу", type: "a" },
        { text: "Чтобы выделить важное", type: "b" },
        { text: "Чтобы добавить глубину", type: "c" },
        { text: "Чтобы усилить эмоцию", type: "d" },
        { text: "Чтобы нарушить привычное", type: "e" }
      ]
    },
    {
      question: "Что для тебя значит тень?",
      image: "quiz3/9.jpg",
      answers: [
        { text: "Вечный спутник света", type: "a" },
        { text: "Грани формы и объёма", type: "b" },
        { text: "Пространство для размышлений", type: "c" },
        { text: "Средство для выражения чувств", type: "d" },
        { text: "Материал для игры и эксперимента", type: "e" }
      ]
    },
    {
      question: "Если бы твоя тень заговорила, какой бы она была?",
      image: "quiz3/10.jpg",
      answers: [
        { text: "Тихим голосом из полумрака", type: "a" },
        { text: "Чётким эхом за спиной", type: "b" },
        { text: "Шёпотом дальнего заката", type: "c" },
        { text: "Громким драматичным аккордом", type: "d" },
        { text: "Быстрой, живой и дерзкой", type: "e" }
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
    text: "Ты — наблюдатель утончённых переходов. Для тебя тень — не отсутствие света, а его тихая, едва заметная дыхание. Ты ценишь мягкость, плавные очертания, размытые контуры. Там, где другие видят затемнение, ты замечаешь игру полутонов, намёк, трепетную границу между явным и скрытым. В твоём мире теней живёт меланхолия утра и задумчивость закатных минут.",
    image: "result3/1.jpg"
  },
  b: {
    text: "Ты — человек формы и ясности. Чёткая тень для тебя — как восклицание в визуальной фразе. Ты любишь ясность, акцент, графичность, когда свет и тьма выстраивают композицию в резких, уверенных линиях. В тебе живёт архитектор пространства, который умеет подчёркивать форму и выделять главное. Ты ценишь драму, но не в её размытых силуэтах, а в точности и силе.",
    image: "result3/2.jpg"
  },
  c: {
    text: "Ты — искатель глубины и тайны. Тебя влекут длинные, таинственные тени, протянувшиеся по земле на закате или растворяющиеся в туманном сумраке. Для тебя тень — это нечто большее, чем физическое явление. Это символ перемен, пространство для загадки и воображения. Ты словно читаешь между строк, видишь, что скрыто за границами света.",
    image: "result3/3.jpg"
  },
  d: {
    text: "Ты — художник драматических решений. Яркий свет, густая тень, контраст и напряжение форм — вот твоя стихия. Для тебя тень не просто сопутствует свету, а вступает с ним в напряжённый диалог. Ты любишь подчёркнутую выразительность, резкие акценты и театральную постановку кадра или полотна. Ты смело работаешь с визуальной драматургией.",
    image: "result3/4.jpg"
  },
  e: {
    text: "Ты — создатель движения и ритма. Пёстрые, неоднородные тени, отражения, пятна света — всё это для тебя не случайность, а живая ткань мира. Ты воспринимаешь тень как источник вдохновения, как игру и постоянное движение. В твоих работах или мыслях тень становится художественным элементом, а не только служебным инструментом. Ты открыт эксперименту и видишь прекрасное там, где другие пройдут мимо.",
    image: "result3/5.jpg"
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
