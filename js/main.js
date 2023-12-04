const checkBtn = document.querySelector(".check");
const restartBtn = document.querySelector(".again");
const inputGuess = document.querySelector(".guess");
const message = document.querySelector(".message");
const secretNumber = document.querySelector(".number");
const score = document.querySelector(".score");
const highScoreL = document.querySelector(".highscore");
const backgroundColor = document.querySelector("body");

let pointsLeft = 20;
let highScore = 0;

let numberToGuess = Math.floor(Math.random() * 20) + 1;

function display(message, background, width, number) {
  message.textContent = message;
  backgroundColor.style.backgroundColor = background;
  secretNumber.style.width = width;
  secretNumber.textContent = number;
}

checkBtn.addEventListener("click", function () {
  const guess = Number(inputGuess.value);
  if (!guess) {
    message.textContent = "Insert a number...";
  } else if (guess === numberToGuess) {
    display("Correct number. You won!", "#60b347", "30rem", numberToGuess);

    if (pointsLeft > highScore) {
      highScore = pointsLeft;
      highScoreL.textContent = highScore;
    }
  } else if (guess !== numberToGuess) {
    if (pointsLeft > 1) {
      guess > numberToGuess
        ? (message.textContent = "Too high!")
        : (message.textContent = "Too low!");
      pointsLeft--;
      score.textContent = pointsLeft;
    } else {
      message.textContent = "You lost!";
      score.textContent = 0;
    }
  }
});

restartBtn.addEventListener("click", function () {
  //window.location.reload();
  pointsLeft = 20;
  score.textContent = pointsLeft;
  numberToGuess = Math.floor(Math.random() * 20) + 1;

  inputGuess.value = "";
  display("Start guessing...", "#222", "15rem", "?");
});
