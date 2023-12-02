const checkBtn = document.querySelector(".check");
const restartBtn = document.querySelector(".again");
const inputGuess = document.querySelector(".guess");
const message = document.querySelector(".message");
const secretNumber = document.querySelector(".number");
const score = document.querySelector(".score");
const backgroundColor = document.querySelector("body");

let pointsLeft = 20;

let numberToGuess = Math.floor(Math.random() * 20) + 1;
console.log(numberToGuess);

restartBtn.addEventListener("click", function () {
  //window.location.reload();
  score.textContent = 20;
  numberToGuess = Math.floor(Math.random() * 20) + 1;

  inputGuess.value = "";
  message.textContent = "Start guessing...";
  backgroundColor.style.backgroundColor = "#222";
  secretNumber.textContent = "?";
  secretNumber.style.width = "15rem";
});

checkBtn.addEventListener("click", function () {
  const guess = Number(inputGuess.value);
  if (!guess) {
    message.textContent = "Insert a number...";
  } else if (guess === numberToGuess) {
    message.textContent = "Correct number. You won!";
    backgroundColor.style.backgroundColor = "#60b347";
    secretNumber.style.width = "30rem";
    secretNumber.textContent = numberToGuess;
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
