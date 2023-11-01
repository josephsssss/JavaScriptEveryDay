'use strict';

let targetNumber = Math.floor(Math.random() * 20) + 1;
let guess = document.querySelector('.guess').textContent;
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

function checkGuess(targetNumber, guess) {
  let right = targetNumber === guess;
  if (right) {
    displayMessage('Correct 👌');
    document.querySelector('.number').textContent = targetNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (parseInt(document.querySelector('.highscore').textContent) < score) {
      document.querySelector('.highscore').textContent = score;
    }
  }

  if (!right) {
    document.querySelector('.message').textContent =
      targetNumber < guess ? 'the answer is lower' : 'the answer is higher';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
    }
  }
}

// Event listener for checking the guess
document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No number 👀');
  } else {
    checkGuess(targetNumber, guess);
  }
});

const highscore = document.querySelector('.label-highscore').textContent;

const resetGame = function () {
  targetNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
};

document.querySelector('.again').addEventListener('click', function () {
  resetGame();
});
