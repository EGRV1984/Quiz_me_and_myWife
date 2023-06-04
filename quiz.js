// создаем 5 объектов, содержащих утверждение, ответ и объяснение
const factOne = {
  statement: "they have met each other 1st of march,2014",
  answer: false,
  explanation:
    "they were studying in one university from 2009 and definetly see each other during these 5 years",
};

const factTwo = {
  statement: "first place they lived together was close to zoo",
  answer: true,
  explanation:
    "first place they lived on Zhuravleva street was really close to zoo and it smelt, of corse",
};

const factThree = {
  statement: "Sasha made his proposal 11.11.16",
  answer: false,
  explanation:
    "it was 6.11.16 - this is polindrom word, that's the way he had remembered it",
};

const factFour = {
  statement: "they got wedding in Georgia",
  answer: true,
  explanation:
    "actually juridical it was in Chita and in The Shanti later, but they think that Georgia is correct answer",
};

const factFive = {
  statement:
    "they got dog named Arya and she love Masha 3-4 times more than Sasha",
  answer: false,
  explanation:
    "Sasha always say like this, but actually these are just his stupid thoughts",
};
// создаем массив вопросов и помещаем туда все наши объекты
const questionsArray = [factOne, factTwo, factThree, factFour, factFive];
// создаем 5 переменных для каждого скора, и помещаем их всех в массив
const scoreOne = document.querySelector(".scoreOne");
const scoreTwo = document.querySelector(".scoreTwo");
const scoreThree = document.querySelector(".scoreThree");
const scoreFour = document.querySelector(".scoreFour");
const scoreFive = document.querySelector(".scoreFive");
const scoreArray = [scoreOne, scoreTwo, scoreThree, scoreFour, scoreFive];
// создаем переменные и соотносим их со всеми нужными нам элементами на странице
const options = document.querySelectorAll(".options button");
const buttonTrue = document.querySelector(".true");
const buttonFalse = document.querySelector(".false");
const buttonNext = document.querySelector(".next");
const explanation = document.querySelector(".explanation");
// отключаю кнопку next  чтобы она была не активной до момента, пока не получен ответ, придаю ей другой цвет и hover, чтобы пользователь не думал о ее нажатии
buttonNext.setAttribute("disabled", "");
// создадим переменную questionNumber в которой будем держать индекс объекта, вопрос которого сейчас на экране
let questionNumber = 0;
// создаем переменную, куда будем помещать значение утверждения, она будет изменяться по ходу изменения вопросов
let statement = document.querySelector(".statement");
// при загрузке страницы первое утверждение уже должно быть на странице
statement.textContent = questionsArray[questionNumber].statement;
// этот цикл и есть наша основная функция, наша инициализация всего квиза, вешаем слушателя на каждую кнопку и ждем реакции
const init = () => {
  for (let button of options) {
    button.addEventListener("click", (event) => {
      isEqual(event);
    });
  }
};
// объявляем init
init();
// создадим функцию, которая выключает и включает кнопки true и false
const disabled = () => {
  for (let button of options) {
    button.setAttribute("disabled", "");
  }
};
const enabled = () => {
  for (let button of options) {
    button.removeAttribute("disabled");
    button.classList.remove("correct", "incorrect");
  }
};
// создадим функцию enableNext и disableNext которые будут включать и выключать кнопку следующий вопрос
const enableNext = () => {
  buttonNext.removeAttribute("disabled");
};
const disableNext = () => {
  buttonNext.setAttribute("disabled", "");
};
// создадим функцию explanationShow, которая будет снимать невидимость из объяснения
const explanationShow = () => {
  explanation.textContent = questionsArray[questionNumber].explanation;
  explanation.classList.remove("explanation-hide");
};
const explanationHide = () => {
  explanation.classList.add("explanation-hide");
};
// создадим функцию isEqual, которая сравнит значение ответа в объекте с ответом в слушателе, добавит очки в наши бары прогресса, а также отключит кнопки ответов и включит кнопку следующий вопрос
const isEqual = (event) => {
  if (
    event.target.textContent ===
    questionsArray[questionNumber].answer.toString()
  ) {
    event.target.classList.add("correct");
  } else {
    event.target.classList.add("incorrect");
  }
  addScores(event.target.textContent);
  disabled();
  enableNext();
  explanationShow();
};
// создаем функцию которая будет добавлять зеленые и красные блоки (бары прогресса) в зависимости от того, как ты отвечаешь на все вопросы
const addScores = (answer) => {
  if (answer === questionsArray[questionNumber].answer.toString()) {
    scoreArray[questionNumber].classList.add("correct");
  } else {
    scoreArray[questionNumber].classList.add("incorrect");
  }
};
// поставим слушателя на кнопку next
buttonNext.addEventListener("click", () => {
  nextQuestion();
});
// мы создадим функцию nextQuestion которая будет передавать новое значение в statement и заново запускать слушателей на все кнопки и обнулять всё, также добавляем финальные титры, когда закончатся вопросы
const nextQuestion = () => {
  if (questionNumber === 4) {
    statement.textContent = "Thats all folks!";
    enabled();
    disabled();
    explanationHide();
    disableNext();
  } else {
    statement.textContent = questionsArray[questionNumber + 1].statement;
    questionNumber += 1;
    enabled();
    disableNext();
    explanationHide();
    init();
  }
};
