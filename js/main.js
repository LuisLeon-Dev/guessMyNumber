const checkBtn = document.querySelector(".check");
const inputGuess = document.querySelector(".guess");
const message = document.querySelector(".message");
const secretNumber = document.querySelector(".number");
const score = document.querySelector(".score");

let pointsLeft = 20;

//TODO: generate a random number
let numberToGuess = Math.floor(Math.random() * 20) + 1;
secretNumber.textContent = numberToGuess;

checkBtn.addEventListener("click", function () {
  const guess = Number(inputGuess.value);
  if (!guess) {
    message.textContent = "Insert a number...";
  } else if (guess === numberToGuess) {
    message.textContent = "Correct number. You won!";
  } else if (guess > numberToGuess) {
    if (pointsLeft > 1) {
      message.textContent = "Your number is higher than the secret number!";
      pointsLeft--;
      score.textContent = pointsLeft;
    } else {
      message.textContent = "You lost!";
      score.textContent = 0;
    }
  } else if (guess < numberToGuess) {
    if (pointsLeft > 1) {
      message.textContent = "Your number is lower than the secret number!";
      pointsLeft--;
      score.textContent = pointsLeft;
    } else {
      message.textContent = "You lost!";
      score.textContent = 0;
    }
  }
});
