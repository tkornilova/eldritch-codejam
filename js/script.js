import ancientsData from '../data/ancients.js'
import difficulties from '../data/difficulties.js'
import blueCardsData from '../data/mythicCards/blue/index.js';
import brownCardsData from '../data/mythicCards/brown/index.js';
import greenCardsData from '../data/mythicCards/green/index.js';

const ancientsList = document.querySelectorAll('.main-card__item');
const difficultyList = document.querySelectorAll('.difficulty__item');
const resetButton = document.querySelector('.reset');
const cardClosedImg = document.querySelector('.cards__closed img');
const cardOpenedImg = document.querySelector('.cards__opened img');

let greenCardsArr = [];
let brownCardsArr = [];
let blueCardsArr = [];

let parameters = {
  ancientId: '0',
  difficulty: 'very-easy',
}

ancientsList.forEach((value, i) => {
  value.addEventListener('click', () => {
    //Remove active class from all elements
    ancientsList.forEach(v => {
      v.classList.remove('main-card__item--active');
    })

    //Add active class to current element
    value.classList.toggle('main-card__item--active');

    //Change parameters
    parameters.ancientId = i;

    //Update progress
    startCardProgress(parameters.ancientId);

    //Make a set of cards
    makeCardsArr(greenCardsData, greenCardsArr, 'green');
    makeCardsArr(brownCardsData, brownCardsArr, 'brown');
    makeCardsArr(blueCardsData, blueCardsArr, 'blue');

    //Remove first card
    cardOpenedImg.src = 'assets/white-bg.jpeg';

    //Add first card bg
    cardClosedImg.src = 'assets/mythicCardBackground.png';
  })
})

difficultyList.forEach((value, i) => {
  value.addEventListener('click', () => {
    //Remove active class from all elements
    difficultyList.forEach(v => {
      v.classList.remove('difficulty__item--active');
    })

    //Add active class to current element
    value.classList.toggle('difficulty__item--active');

    //Change parameters
    parameters.difficulty = difficulties[i].name;

    //Update progress
    startCardProgress(parameters.ancientId);

    //Make a set of cards
    makeCardsArr(greenCardsData, greenCardsArr, 'green');
    makeCardsArr(brownCardsData, brownCardsArr, 'brown');
    makeCardsArr(blueCardsData, blueCardsArr, 'blue');

    //Remove first card
    cardOpenedImg.src = 'assets/white-bg.jpeg';

    //Add first card bg
    cardClosedImg.src = 'assets/mythicCardBackground.png';
  })
})

resetButton.addEventListener('click', () => {
  //Remove active class from all elements (ancient)
  ancientsList.forEach(v => {
    v.classList.remove('main-card__item--active');
  })

  //Remove active class from all elements (difficulties)
  difficultyList.forEach(v => {
    v.classList.remove('difficulty__item--active');
  })

  //Reset parameters
  parameters.ancientId = '';
  parameters.difficulty = '';

  //Reset progress
  resetCardProgress();

  //Remove first card
  cardOpenedImg.src = 'assets/white-bg.jpeg';

  //Add first card bg
  cardClosedImg.src = 'assets/mythicCardBackground.png';
})

const startCardProgress = (id) => {
  document.querySelector('.progress__stage1 .green').textContent = ancientsData[id].firstStage.greenCards;
  document.querySelector('.progress__stage2 .green').textContent = ancientsData[id].secondStage.greenCards;
  document.querySelector('.progress__stage3 .green').textContent = ancientsData[id].thirdStage.greenCards;
  document.querySelector('.progress__stage1 .brown').textContent = ancientsData[id].firstStage.brownCards;
  document.querySelector('.progress__stage2 .brown').textContent = ancientsData[id].secondStage.brownCards;
  document.querySelector('.progress__stage3 .brown').textContent = ancientsData[id].thirdStage.brownCards;
  document.querySelector('.progress__stage1 .blue').textContent = ancientsData[id].firstStage.blueCards;
  document.querySelector('.progress__stage2 .blue').textContent = ancientsData[id].secondStage.blueCards;
  document.querySelector('.progress__stage3 .blue').textContent = ancientsData[id].thirdStage.blueCards;
}

const resetCardProgress = () => {
  document.querySelector('.progress__stage1 .green').textContent = 0;
  document.querySelector('.progress__stage2 .green').textContent = 0;
  document.querySelector('.progress__stage3 .green').textContent = 0;
  document.querySelector('.progress__stage1 .brown').textContent = 0;
  document.querySelector('.progress__stage2 .brown').textContent = 0;
  document.querySelector('.progress__stage3 .brown').textContent = 0;
  document.querySelector('.progress__stage1 .blue').textContent = 0;
  document.querySelector('.progress__stage2 .blue').textContent = 0;
  document.querySelector('.progress__stage3 .blue').textContent = 0;
}

const makeCardsArr = (cardData, cardArr, color) => {
  cardArr.length = 0;

  //Very easy level
  if (parameters.difficulty === 'very-easy') {
    for (let i = 0; i < cardData.length; i++) {
      if (cardData[i].difficulty === 'easy') {
        cardArr.push(cardData[i]);
      }
    }

    for (let i = 0; i < cardData.length; i++) {
      if (cardData[i].difficulty === 'normal') {
        cardArr.push(cardData[i]);
      }
    }
  }

  //Easy level
  if (parameters.difficulty === 'easy') {
    for (let i = 0; i < cardData.length; i++) {
      if (cardData[i].difficulty === 'easy') {
        cardArr.push(cardData[i]);
      }
    }

    for (let i = 0; i < cardData.length; i++) {
      if (cardData[i].difficulty === 'normal') {
        cardArr.push(cardData[i]);
      }
    }

    cardArr = cardArr.sort(() => Math.random() - 0.5);
  }

  //Normal level
  if (parameters.difficulty === 'normal') {
    for (let i = 0; i < cardData.length; i++) {
      if (cardData[i].difficulty === 'easy') {
        cardArr.push(cardData[i]);
      }
    }

    for (let i = 0; i < cardData.length; i++) {
      if (cardData[i].difficulty === 'normal') {
        cardArr.push(cardData[i]);
      }
    }

    for (let i = 0; i < cardData.length; i++) {
      if (cardData[i].difficulty === 'hard') {
        cardArr.push(cardData[i]);
      }
    }

    cardArr = cardArr.sort(() => Math.random() - 0.5);
  }

  //Hard level
  if (parameters.difficulty === 'hard') {
    for (let i = 0; i < cardData.length; i++) {
      if (cardData[i].difficulty === 'hard') {
        cardArr.push(cardData[i]);
      }
    }

    for (let i = 0; i < cardData.length; i++) {
      if (cardData[i].difficulty === 'normal') {
        cardArr.push(cardData[i]);
      }
    }

    cardArr = cardArr.sort(() => Math.random() - 0.5);
  }

  //Very hard level
  if (parameters.difficulty === 'very-hard') {
    for (let i = 0; i < cardData.length; i++) {
      if (cardData[i].difficulty === 'hard') {
        cardArr.push(cardData[i]);
      }
    }

    for (let i = 0; i < cardData.length; i++) {
      if (cardData[i].difficulty === 'normal') {
        cardArr.push(cardData[i]);
      }
    }
  }

  //Remove not needed elements
  if (color === 'green') {
    greenCardsArr = cardArr.slice(0, ancientsData[parameters.ancientId].sum.greenCards);
    greenCardsArr = greenCardsArr.sort(() => Math.random() - 0.5);
  } else if (color === 'brown') {
    brownCardsArr = cardArr.slice(0, ancientsData[parameters.ancientId].sum.brownCards);
    brownCardsArr = brownCardsArr.sort(() => Math.random() - 0.5);
  } else if (color === 'blue') {
    blueCardsArr = cardArr.slice(0, ancientsData[parameters.ancientId].sum.blueCards);
    blueCardsArr = blueCardsArr.sort(() => Math.random() - 0.5);
  }
}

//Update progress
startCardProgress(parameters.ancientId);

//Make a set of cards
makeCardsArr(greenCardsData, greenCardsArr, 'green');
makeCardsArr(brownCardsData, brownCardsArr, 'brown');
makeCardsArr(blueCardsData, blueCardsArr, 'blue');

cardClosedImg.addEventListener('click', () => {
  let countGreenFirst = document.querySelector('.progress__stage1 .green').textContent;
  let countBrownFirst = document.querySelector('.progress__stage1 .brown').textContent;
  let countBlueFirst = document.querySelector('.progress__stage1 .blue').textContent;

  let countGreenSecond = document.querySelector('.progress__stage2 .green').textContent;
  let countBrownSecond = document.querySelector('.progress__stage2 .brown').textContent;
  let countBlueSecond = document.querySelector('.progress__stage2 .blue').textContent;

  let countGreenThird = document.querySelector('.progress__stage3 .green').textContent;
  let countBrownThird = document.querySelector('.progress__stage3 .brown').textContent;
  let countBlueThird = document.querySelector('.progress__stage3 .blue').textContent;

  if (parameters.ancientId === '') {
    alert('Выберите древнего.');
  } else if (parameters.difficulty === '') {
    alert('Выберите уровень сложности.');
  }

  if (countGreenFirst > 0) {
    //Change card
    cardOpenedImg.src = greenCardsData[greenCardsArr[0].id - 1].cardFace;

    //Remove shown element
    greenCardsArr.shift();

    //Update counter
    countGreenFirst--;
    document.querySelector('.progress__stage1 .green').textContent = countGreenFirst;

  } else if (countBrownFirst > 0) {
    //Change card
    cardOpenedImg.src = brownCardsData[brownCardsArr[0].id - 1].cardFace;

    //Remove shown element
    brownCardsArr.shift();

    //Update counter
    countBrownFirst--;
    document.querySelector('.progress__stage1 .brown').textContent = countBrownFirst;

  } else if (countBlueFirst > 0) {
    //Change card
    cardOpenedImg.src = blueCardsData[blueCardsArr[0].id - 1].cardFace;

    //Remove shown element
    blueCardsArr.shift();

    //Update counter
    countBlueFirst--;
    document.querySelector('.progress__stage1 .blue').textContent = countBlueFirst;

  } else if (countGreenSecond > 0) {
    //Change card
    cardOpenedImg.src = greenCardsData[greenCardsArr[0].id - 1].cardFace;

    //Remove shown element
    greenCardsArr.shift();

    //Update counter
    countGreenSecond--;
    document.querySelector('.progress__stage2 .green').textContent = countGreenSecond;

  } else if (countBrownSecond > 0) {
    //Change card
    cardOpenedImg.src = brownCardsData[brownCardsArr[0].id - 1].cardFace;

    //Remove shown element
    brownCardsArr.shift();

    //Update counter
    countBrownSecond--;
    document.querySelector('.progress__stage2 .brown').textContent = countBrownSecond;

  } else if (countBlueSecond > 0) {
    //Change card
    cardOpenedImg.src = blueCardsData[blueCardsArr[0].id - 1].cardFace;

    //Remove shown element
    blueCardsArr.shift();

    //Update counter
    countBlueSecond--;
    document.querySelector('.progress__stage2 .blue').textContent = countBlueSecond;

  } else if (countGreenThird > 0) {
    //Change card
    cardOpenedImg.src = greenCardsData[greenCardsArr[0].id - 1].cardFace;

    //Remove shown element
    greenCardsArr.shift();

    //Update counter
    countGreenThird--;
    document.querySelector('.progress__stage3 .green').textContent = countGreenThird;

  } else if (countBrownThird > 0) {
    //Change card
    cardOpenedImg.src = brownCardsData[brownCardsArr[0].id - 1].cardFace;

    //Remove shown element
    brownCardsArr.shift();

    //Update counter
    countBrownThird--;
    document.querySelector('.progress__stage3 .brown').textContent = countBrownThird;

  } else if (countBlueThird > 0) {
    //Change card
    cardOpenedImg.src = blueCardsData[blueCardsArr[0].id - 1].cardFace;

    //Remove shown element
    blueCardsArr.shift();

    //Update counter
    countBlueThird--;
    document.querySelector('.progress__stage3 .blue').textContent = countBlueThird;

  } else if (greenCardsArr.length === 0 && brownCardsArr.length === 0 && blueCardsArr.length === 0) {
    cardClosedImg.src = "assets/white-bg.jpeg";
  }

})
