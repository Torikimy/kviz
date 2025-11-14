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
    question: "Какой звук кажется тебе самым близким и родным?",
    answers: [
      { text: "Тихое, уютное потрескивание дров в камине, словно тепло, которое обволакивает", type: "a" },
      { text: "Лёгкий шорох листвы, который колышется на ветру и напевает свою нежную мелодию", type: "b" },
      { text: "Монотонный, ритмичный звук дождя, стучащего по стеклам и крышам", type: "c" },
      { text: "Мягкий гул в ушах, который возникает перед самым засыпанием — как тихий переход в другой мир", type: "d" },
      { text: "Скрип половиц в старом доме, полный историй и воспоминаний, наполняющих пространство", type: "e" }
    ]
  },
  {
    question: "В какой момент и месте ты ощущаешь настоящее спокойствие?",
    answers: [
      { text: "Сидя у костра, чувствуя тепло огня и слушая его живой шёпот", type: "a" },
      { text: "Лежа на мягкой траве в тени деревьев, под нежным прикосновением ветра", type: "b" },
      { text: "В окружении дождя, когда каждая капля словно смывает заботы и суету", type: "c" },
      { text: "Перед самым сном, когда день заканчивается, и наступает долгожданная тишина", type: "d" },
      { text: "В полном одиночестве, где нет ни звуков, ни мыслей, только глубокий покой", type: "e" }
    ]
  },
  {
    question: "Что для тебя — источник внутреннего покоя и умиротворения?",
    answers: [
      { text: "Пламенеющий огонь, который согревает и даёт силу", type: "a" },
      { text: "Свежий ветер, который уносит тревоги и наполняет лёгкостью", type: "b" },
      { text: "Журчание воды — реки, ручья или моря, бесконечный поток жизни", type: "c" },
      { text: "Ритм собственного пульса, напоминающий о том, что ты жив и здесь", type: "d" },
      { text: "Запах и шелест пыльных книг, в которых спрятаны мудрость и история", type: "e" }
    ]
  },
  {
    question: "Какой момент суток ты любишь больше всего и почему?",
    answers: [
      { text: "Глубокая ночь — когда мир стихает и появляется возможность услышать себя", type: "d" },
      { text: "Рассвет — начало нового дня с нежным светом и свежими надеждами", type: "b" },
      { text: "Закат — последние тёплые лучи солнца, когда день медленно уходит", type: "a" },
      { text: "Дождливое утро — когда всё вокруг кажется мягким и умиротворённым", type: "c" },
      { text: "Сумерки — время перехода, когда свет и тьма сливаются в одно", type: "e" }
    ]
  },
  {
    question: "Какая стихия кажется тебе самой близкой по духу?",
    answers: [
      { text: "Огонь — живой, страстный и непредсказуемый", type: "a" },
      { text: "Земля — надёжная, спокойная и устойчивая", type: "b" },
      { text: "Вода — текучая, меняющаяся и глубоко чувствующая", type: "c" },
      { text: "Эфир — невидимый, загадочный и наполненный тайной", type: "d" },
      { text: "Тьма — таинственная, мягкая и способная скрывать истину", type: "e" }
    ]
  },
  {
    question: "Что бы ты хотела услышать, если бы тишина вдруг заговорила?",
    answers: [
      { text: "Весёлый смех, который оживляет и согревает сердце", type: "a" },
      { text: "Лёгкий шёпот трав, колышущихся на ветру", type: "b" },
      { text: "Мелодичные капли дождя, падающие на землю", type: "c" },
      { text: "Свой собственный ровный и спокойный вдох", type: "d" },
      { text: "Эхо прошлых событий и слов, хранящихся в памяти", type: "e" }
    ]
  },
  {
    question: "Какой сон кажется тебе ближе — тот, что ты видишь чаще всего?",
    answers: [
      { text: "Сон, наполненный тёплым светом и уютом", type: "a" },
      { text: "Сон о лесной дороге, ведущей в неизведанное", type: "b" },
      { text: "Сон с дождём за окном, который убаюкивает", type: "c" },
      { text: "Сон без образов, где главное — ощущения и чувства", type: "d" },
      { text: "Сон, где рядом те, кого давно нет, но память хранит их живыми", type: "e" }
    ]
  },
  {
    question: "Какие чувства посещают тебя чаще всего?",
    answers: [
      { text: "Ностальгия — нежная тоска по ушедшему времени", type: "e" },
      { text: "Спокойствие — внутренний мир и гармония", type: "b" },
      { text: "Удивление — радость открытий и новых взглядов", type: "a" },
      { text: "Тревожность — волнение и беспокойство, иногда навязчивые", type: "d" },
      { text: "Меланхолия — тихая грусть с оттенком красоты", type: "c" }
    ]
  },
  {
    question: "Что способно убаюкать тебя и унести в сон?",
    answers: [
      { text: "Тёплый огонь в печке, ласкающий взгляд и слух", type: "a" },
      { text: "Шелест листьев или ткани, плавный и нежный", type: "b" },
      { text: "Ритмичные капли дождя, словно лёгкая колыбельная", type: "c" },
      { text: "Ритм собственного дыхания и биения сердца", type: "d" },
      { text: "Старые рассказы, которые звучат словно сказка из детства", type: "e" }
    ]
  },
  {
    question: "Какой шёпот кажется тебе самым узнаваемым и близким?",
    answers: [
      { text: "Шёпот костра — живой и теплый, будто он говорит с тобой", type: "a" },
      { text: "Шёпот травы, тихий и едва уловимый", type: "b" },
      { text: "Шёпот дождя, нежный и монотонный", type: "c" },
      { text: "Шёпот мыслей внутри головы — самый личный и загадочный", type: "d" },
      { text: "Шёпот стены в старом доме — хранящий тайны и воспоминания", type: "e" }
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
    text: "Ты — шёпот костра. В тебе горит тихое, но мощное тепло — дикая сила, которая манит и согревает. Ты умеешь создавать уют даже в самые тёмные ночи, словно огонь, за которым хочется укрыться и найти покой.",
    image: "result8/1.jpg"
  },
  b: {
    text: "Ты — шёпот травы. Лёгкий, едва слышный, ты проходишь рядом, не тревожа душу. С тобой мир становится мягче и нежнее, словно касание свежей зелени под ногами, наполняющее покоем и свежестью.",
    image: "result8/2.jpg"
  },
  c: {
    text: "Ты — шёпот дождя. Грустный и задумчивый, ты приходишь, когда нужно отпустить и освободиться. В твоём звуке — глубина эмоций и меланхолия, которая лечит, позволяя прожить каждую каплю и выйти обновлённым.",
    image: "result8/3.jpg"
  },
  d: {
    text: "Ты — шёпот пульса. Интимный и живой, ты звучишь рядом с сердцем. Иногда тревожишь своей силой и ритмом, но всегда честен и искренен, словно живой знак присутствия и энергии.",
    image: "result8/4.jpg"
  },
  e: {
    text: "Ты — шёпот стены. В тебе — эхо прошедших дней, истории, которые хранятся в тишине. Твоя неподвижность словно вечность, в которой можно найти глубокое понимание и покой.",
    image: "result8/5.jpg"
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
