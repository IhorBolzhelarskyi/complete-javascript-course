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

  if (!guess) {
    document.querySelector('.message').textContent = `Not a number❗`;
  } else if (guess === secretNumber) {
    document.querySelector(
      `.message`
    ).textContent = `Congratulation you are a winner!`;
  } else if (guess > secretNumber) {
    document.querySelector(`.message`).textContent = `Too high`;
    document.querySelector(`.score`).textContent = score;
    score--;
  } else if (guess < secretNumber) {
    document.querySelector(`.message`).textContent = `Too low`;
    document.querySelector(`.score`).textContent = score;
    score--;
  }
});
