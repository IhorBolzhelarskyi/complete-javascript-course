'use strict';

const modal = document.querySelector(`.modal`);
const closeModal = document.querySelector(`.close-modal`);
const overlay = document.querySelector(`.overlay`);
const showModal = document.querySelectorAll(`.show-modal`);
const closeFunction = () => {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

showModal.forEach(element => {
  element.addEventListener(`click`, () => {
    console.log(`Hi`);
    modal.classList.remove(`hidden`);
    overlay.classList.remove(`hidden`);
  });
});

closeModal.addEventListener(`click`, closeFunction);

overlay.addEventListener(`click`, closeFunction);

document.addEventListener(`keydown`, e => {
  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeFunction();
  }
});

// document.addEventListener(`keydown`, e => {
//   console.log(e.key);
//   if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
//     closeFunction();
//   }
// });
