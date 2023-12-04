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
console.log(numberToGuess);

checkBtn.addEventListener("click", function () {
  const guess = Number(inputGuess.value);
  if (!guess) {
    message.textContent = "Insert a number...";
  } else if (guess === numberToGuess) {
    message.textContent = "Correct number. You won!";
    backgroundColor.style.backgroundColor = "#60b347";
    secretNumber.style.width = "30rem";
    secretNumber.textContent = numberToGuess;

    if (pointsLeft > highScore) {
      highScore = pointsLeft;
      highScoreL.textContent = highScore;
    }
  } else if (guess > numberToGuess) {
    if (pointsLeft > 1) {
      message.textContent = "Too high!";
      pointsLeft--;
      score.textContent = pointsLeft;
    } else {
      message.textContent = "You lost!";
      score.textContent = 0;
    }
  } else if (guess < numberToGuess) {
    if (pointsLeft > 1) {
      message.textContent = "Too low!";
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
  console.log(numberToGuess);

  inputGuess.value = "";
  message.textContent = "Start guessing...";
  backgroundColor.style.backgroundColor = "#222";
  secretNumber.textContent = "?";
  secretNumber.style.width = "15rem";
});
