// 'use strict';
// const first = document.querySelector('.message');
// console.log(first);

// document.querySelector('.message').textContent = `Hellow world`;

// document.querySelector('.number').textContent = '52';
// document.querySelector('.score').textContent = 'HELOW';
const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(`.number`).textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);

  // no input
  if (!guess) {
    document.querySelector('.message').textContent = `Not a number❗`;
    // win condition
  } else if (guess === secretNumber) {
    // prettier-ignore
    document.querySelector(`.message`).textContent = `Congratulation you are a winner!`;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style;
    // when number is too high
  } else if (guess > secretNumber) {
    if (score >= 1) {
      document.querySelector(`.message`).textContent = `Too high`;
      document.querySelector(`.score`).textContent = score;
      score--;
    } else {
      document.querySelector(`.message`).textContent = `You lost😈`;
      document.querySelector(`.score`).textContent = 0;
    }
    // when number is too low
  } else if (guess < secretNumber) {
    if (score >= 1) {
      document.querySelector(`.message`).textContent = `Too low`;
      document.querySelector(`.score`).textContent = score;
      score--;
    } else {
      document.querySelector(`.message`).textContent = `You lost😈`;
      document.querySelector(`.score`).textContent = 0;
    }
    if (score < 1) {
      document.querySelector(`.message`).textContent(`You lost😈`);
    }
  }
});
