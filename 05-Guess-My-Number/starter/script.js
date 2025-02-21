// 'use strict';
// const first = document.querySelector('.message');
// console.log(first);

// document.querySelector('.message').textContent = `Hellow world`;

// document.querySelector('.number').textContent = '52';
// document.querySelector('.score').textContent = 'HELOW';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
const myFunction = function (text) {
  document.querySelector(`.message`).textContent = text;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // no input
  if (!guess) {
    // document.querySelector('.message').textContent = `Not a number❗`;
    myFunction(`Not a number❗`);
    // win condition
  } else if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
    // prettier-ignore
    myFunction(`Congratulation you are a winner!`);
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = secretNumber;

    // when number is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      // document.querySelector(`.message`).textContent = `Too high`;
      myFunction(`Too high`);
      document.querySelector(`.score`).textContent = score;
    } else {
      // document.querySelector(`.message`).textContent = `You lost😈`;
      myFunction(`You lost😈`);
      document.querySelector(`.score`).textContent = 0;
    }
    // when number is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      // document.querySelector(`.message`).textContent = `Too low`;
      myFunction(`Too low`);
      document.querySelector(`.score`).textContent = score;
    } else {
      // document.querySelector(`.message`).textContent = `You lost😈`;
      myFunction(`You lost😈`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  document.querySelector(`.score`).textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(`.number`).textContent = `?`;
  // document.querySelector(`.message`).textContent = `Start guessing...`;
  myFunction(`Start guessing...`);
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.guess`).value = ``;
});
