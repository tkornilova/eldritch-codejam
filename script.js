//import ancientsData from "./ancients";

const ancientsList = document.querySelectorAll('.main-card__item');
const difficultyList = document.querySelectorAll('.difficulty__item');
const resetButton = document.querySelector('.reset');
let parameters = {
  ancient: '',
  difficulty: '',
}
console.log(ancientsData);

ancientsList.forEach(value => {
  value.addEventListener('click', () => {
    ancientsList.forEach(v => {
      v.classList.remove('main-card__item--active');
    })
    value.classList.toggle('main-card__item--active');
    resetButton.style.border = 'none';
    //parameters.ancient = ancientsData[id];
    console.log(parameters);
  })
})

difficultyList.forEach(value => {
  value.addEventListener('click', () => {
    difficultyList.forEach(v => {
      v.classList.remove('difficulty__item--active');
    })
    value.classList.toggle('difficulty__item--active');
    resetButton.style.border = 'none';
  })
})

resetButton.addEventListener('click', () => {
  ancientsList.forEach(v => {
    v.classList.remove('main-card__item--active');
  })
  difficultyList.forEach(v => {
    v.classList.remove('difficulty__item--active');
  })
  resetButton.style.border = '2px solid var(--basic-white)';
})

