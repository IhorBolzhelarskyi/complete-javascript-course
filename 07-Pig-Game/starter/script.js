'use strict';

// Selecting elements

const player0score = document.getElementById(`score--0`);
const player1score = document.querySelector(`#score--1`);
const outputPlayer0 = document.querySelector(`#current--0`);
const outputPlayer1 = document.querySelector(`#current--1`);
const sectionPlayer0 = document.querySelector(`.player--0`);
const sectionPlayer1 = document.querySelector(`.player--1`);

const dice = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  sectionPlayer0.classList.toggle(`player--active`);
  sectionPlayer1.classList.toggle(`player--active`);
};

//Starting conditions

player0score.textContent = 0;
player1score.textContent = 0;
dice.classList.add(`hidden`);
let playingCondition = true;

let currentScore = 0;
let activePlayer = 0;
let score = [0, 0];

//Rolling dice functionality
btnRoll.addEventListener(`click`, () => {
  if (playingCondition) {
    // 1. Generating a random number from 1-6
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // 2. Display dice
    dice.classList.remove(`hidden`);
    dice.src = `dice-${randomNumber}.png`;

    //3. Checked for rolled 1
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener(`click`, () => {
  if (playingCondition) {
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
    console.log(score[activePlayer]);

    if (score[activePlayer] >= 100) {
      playingCondition = false;
      dice.classList.add(`hidden`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener(`click`, () => {
  playingCondition = true;
  player0score.textContent = 0;
  player1score.textContent = 0;
  dice.classList.add(`hidden`);
  score = [0, 0];
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove(`player--winner`);
  document.querySelector(`.player--0`).classList.add(`player--active`);
  document.querySelector(`.player--1`).classList.remove(`player--active`);
  activePlayer = 0;
});
