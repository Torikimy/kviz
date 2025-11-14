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
      question: "Какой оттенок преобладает в твоей любимой картине — что первым цепляет твой взгляд и рождает внутри движение чувств?",
      image: "quiz2/1.jpg",
      answers: [
        { text: "Пылающий красный — словно сердце на холсте.", type: "a" },
        { text: "Мягкие пастельные переливы, как шёпот утренней зари.", type: "b" },
        { text: "Тёмные, густые тона — загадочные, как забытые легенды.", type: "c" },
        { text: "Чёрно-белая гамма, где каждое пятно — философия.", type: "d" },
        { text: "Живая зелень и естественные краски природы.", type: "e" }
      ]
    },
    {
      question: "Что в полотне для тебя — главная сила, что трогает душу и заставляет остановиться?",
      image: "quiz2/2.jpg",
      answers: [
        { text: "Безудержные эмоции и настроение картины.", type: "a" },
        { text: "Тонкость и мастерство исполнения.", type: "b" },
        { text: "Сюжет, будто скрытая история между строк.", type: "c" },
        { text: "Абстрактная свобода и право на толкование.", type: "d" },
        { text: "Реалистичные детали, выписанные с любовью.", type: "e" }
      ]
    },
    {
      question: "Какую атмосферу ты предпочитаешь в произведениях живописи?",
      image: "quiz2/3.jpg",
      answers: [
        { text: "Яркую, полную жизни и огня.", type: "a" },
        { text: "Лёгкую, акварельную, будто сон.", type: "b" },
        { text: "С глухими тенями и драмой.", type: "c" },
        { text: "Минималистичную, оставляющую простор мыслям.", type: "d" },
        { text: "Пейзажную, наполненную дыханием природы.", type: "e" }
      ]
    },
    {
      question: "Какая художественная техника ближе тебе по духу?",
      image: "quiz2/4.jpg",
      answers: [
        { text: "Масло — живое и густое, как судьба.", type: "a" },
        { text: "Акварель — лёгкая и непредсказуемая.", type: "b" },
        { text: "Графика и карандаш — точность линий и оттенков мысли.", type: "c" },
        { text: "Цифровое искусство — пластичная современность.", type: "d" },
        { text: "Акрил — свежесть, плотность и насыщенность.", type: "e" }
      ]
    },
    {
      question: "Что способно больше всего восхитить тебя в картине?",
      image: "quiz2/5.jpg",
      answers: [
        { text: "Яркий, доминирующий центр внимания.", type: "a" },
        { text: "Общее настроение и атмосферная аура.", type: "b" },
        { text: "Контраст и драматургия света и тени.", type: "c" },
        { text: "Гармония цвета, как музыка без звука.", type: "d" },
        { text: "Безупречная проработка деталей.", type: "e" }
      ]
    },
    {
      question: "Какая энергия живёт для тебя в картинах?",
      image: "quiz2/6.jpg",
      answers: [
        { text: "Движение, импульс, вихрь страстей.", type: "a" },
        { text: "Спокойствие и умиротворяющее молчание.", type: "b" },
        { text: "Тайна, прячущаяся между мазками.", type: "c" },
        { text: "Ритм формы и линии, как архитектура мысли.", type: "d" },
        { text: "Чистота природы, первозданность и покой.", type: "e" }
      ]
    },
    {
      question: "К какому жанру живописи ты интуитивно тянешься?",
      image: "quiz2/7.jpg",
      answers: [
        { text: "Портрет — лицо как история.", type: "a" },
        { text: "Пейзаж — дыхание природы.", type: "b" },
        { text: "Натюрморт — поэзия вещей.", type: "c" },
        { text: "Абстракция — разговор без слов.", type: "d" },
        { text: "Историческая живопись — сцены прошлого.", type: "e" }
      ]
    },
    {
      question: "На что прежде всего падает твой взгляд?",
      image: "quiz2/8.jpg",
      answers: [
        { text: "На цветовые решения и палитру.", type: "a" },
        { text: "На композиционное решение.", type: "b" },
        { text: "На светотеневые переходы.", type: "c" },
        { text: "На текстуру и движение мазков.", type: "d" },
        { text: "На эмоции, заключённые в работе.", type: "e" }
      ]
    },
    {
      question: "Какое полотно хотелось бы видеть у себя дома?",
      image: "quiz2/9.jpg",
      answers: [
        { text: "Пылающее и экспрессивное.", type: "a" },
        { text: "Светлое и прозрачное.", type: "b" },
        { text: "Темное, наполненное тайной.", type: "c" },
        { text: "Современное и эксцентричное.", type: "d" },
        { text: "Природное, как окно в сад.", type: "e" }
      ]
    },
    {
      question: "Что в живописи для тебя становится смыслом?",
      image: "quiz2/10.jpg",
      answers: [
        { text: "Порыв страсти и чувства.", type: "a" },
        { text: "Гармония и целостность.", type: "b" },
        { text: "Глубина смысла и загадка.", type: "c" },
        { text: "Свобода и отвага эксперимента.", type: "d" },
        { text: "Точная передача мира и деталей.", type: "e" }
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
        painting: "Адольф Хиреми-Хиршль — «Души на берегу Ахерона»",
        text: `«Души на берегу Ахерона» — мрачное и загадочное полотно, где фигуры душ омываются реками забвения. Картина наполнена эмоциональной силой и драмой, она словно зовёт к глубокому переживанию и переосмыслению жизни и смерти.
        
        Ты — художник страсти. В тебе живёт огонь, порыв и желание выражать мир в экспрессивных тонах. Твои картины могли бы говорить без слов, передавая чувства через яркие пятна, динамичные линии и драматические контрасты. Твоя душа — полотно, на котором каждое мгновение оставляет свой мазок.`,
        image: "result2/1.jpg"
      },
      b: {
        painting: "Бруно Лильефорс — «Семья лис»",
        text: `«Семья лис» — тёплое и живое изображение семейного уюта в природе. Мягкий свет и деликатные детали передают атмосферу заботы и защищённости.
        
        Ты — поклонник утончённости. В картинах тебя привлекает нежность, свет и гармония. Твои выборы говорят о стремлении к покою, красоте и тонкому равновесию. Ты умеешь замечать нюансы, слышать молчание цвета и читать между строк, находя в искусстве философский смысл.`,
        image: "result2/2.jpg"
      },
      c: {
        painting: "Айвазовский — «Ночь на Чёрном море»",
        text: `«Ночь на Чёрном море» — величественный и таинственный пейзаж, в котором ночная темнота сочетается с игрой света на воде. Это полотно наполнено ощущением бесконечности и меланхолии.
        
        Ты — ищущий глубину. Тебя манят тайны и полутени, ты ценишь загадочность и драму. В живописи ищешь не только форму, но и подтекст. В твоём мире картины становятся окнами в скрытые слои реальности, в которых всегда остаётся нечто недосказанное. Ты чувствуешь силу теней и умеешь слышать тишину.`,
        image: "result2/3.jpeg"
      },
      d: {
        painting: "Рене Ксавье Прине — «Крейцерова соната»",
        text: `«Крейцерова соната» — динамичное и экспрессивное произведение, наполненное движением и музыкальной драмой. Картина ломает традиционные рамки и заставляет зрителя чувствовать эмоции напрямую.
        
        Ты — свободный исследователь. В искусстве тебя привлекает экспрессия, поиск новых форм и непривычные решения. Ты любишь выходить за рамки, разрушать каноны и задавать зрителю вопросы. Для тебя важно не объяснение, а ощущение, порой абсурдное, порой поэтичное, но всегда живое.`,
        image: "result2/4.jpg"
      },
      e: {
        painting: "Айвазовский — «Берег в лунном свете»",
        text: `«Берег в лунном свете» — спокойный и проникновенный морской пейзаж, где мягкий свет луны озаряет нежные волны и берег. Это произведение словно приглашает к созерцанию и внутреннему покою.
        
        Ты — реалист и созерцатель. Тебе близка природа, фактура, детали и дыхание мира вокруг. В картинах ты ищешь точность, жизнь в мелочах, естественность линий и правду момента. Твоя душа — как озеро, способное отражать любой пейзаж с предельной ясностью и теплом.`,
        image: "result2/5.jpg"
      }
    };

    const result = results[maxType];
    resultText.innerHTML = `<h3>${result.painting}</h3><p>${result.text.replace(/\n/g, '<br>')}</p>`;
    resultImage.src = result.image;
    resultImage.alt = `Результат: ${result.painting}`;
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
