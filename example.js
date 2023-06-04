const statement = document.getElementById("statement");
const buttons = document.querySelectorAll("#options button");
const explanation = document.getElementById("explanation");
const fact = {
  statement: "JS can be used either frontend and backend",
  answer: "true",
  explanation:
    "JS is very flexible language, so we can use it even in backend using NodeJS",
};
statement.textContent = fact.statement;
const disable = (button) => {
  button.setAttribute("disabled", "");
};
const enable = (button) => {
  button.removeAttribute("disabled");
};
const isCorrect = (guess) => {
  return guess === fact.answer.toString();
};
for (let button of buttons) {
  button.addEventListener("click", (event) => {
    explanation.textContent = fact.explanation;
    if (isCorrect(event.target.textContent)) {
      button.classList.add("correct");
      console.log(button);
    } else {
      button.classList.add("incorrect");
    }
    for (let disButtons of buttons) {
      disable(disButtons);
    }
  });
}
