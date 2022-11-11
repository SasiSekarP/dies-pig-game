'use strict'

let diceEl = document.getElementById('dice');
let bottomBtnEl = document.getElementById('bottomBtn');
let player1ScoreEl = document.getElementById('player1Score');
let player2ScoreEl = document.getElementById('player2Score');
let current1ScoreEl = document.getElementById('current1Score');
let current2ScoreEl = document.getElementById('current2Score');
let diceImageEl = document.getElementById('dice');
let player1El = document.getElementById('player1');
let player2El = document.getElementById('player2');
let leftEl = document.getElementById('left');
let rightEl = document.getElementById('right');

// Global variable

let diceChoice = 0;
let player = 1;
let player1GlobalScore = 0;
let player2GlobalScore = 0;
let player1currentScore = 0;
let player2currentScore = 0;

// function

function newGame() {
    diceEl.classList.replace('hide', 'visible');
    bottomBtnEl.classList.replace('hide', 'visible');
    diceImageEl.innerHTML = `<img src="./images/dice-1.png" alt="dice_img">`
    diceChoice = 0;
    player = 1;
    player1GlobalScore = 0;
    player2GlobalScore = 0;
    player1currentScore = 0;
    player2currentScore = 0;

    
    current1ScoreEl.innerText = player1currentScore;
    current2ScoreEl.innerText = player2currentScore;
    player1ScoreEl.innerText = player1GlobalScore;
    player2ScoreEl.innerText = player2GlobalScore;
    addClassName('left');
    rightEl.classList.remove('won')
    leftEl.classList.remove('won')
}

function rollDice() {
    diceChoice = Math.round(Math.random() * 5) + 1;
    diceImageEl.innerHTML = `<img src="./images/dice-${diceChoice}.png" alt="dice_img">`;

    if (diceChoice !== 1) {
        if (player === 1) {
            player1currentScore += diceChoice;
            current1ScoreEl.innerText = player1currentScore;
            addClassName('left');
        } else {
            player2currentScore += diceChoice;
            current2ScoreEl.innerText = player2currentScore;
            addClassName('right');
        }
    } else {
        if (player === 1) {
            player = 2;
            player1currentScore = 0;
            current1ScoreEl.innerText = player1currentScore;
        } else {
            player = 1;
            player2currentScore = 0;
            current2ScoreEl.innerText = player2currentScore;
        }
    }
}

function hold() {
    if (player === 1) {
        player1GlobalScore += player1currentScore;
        player1ScoreEl.innerText = player1GlobalScore;
        player1currentScore = 0;
        current1ScoreEl.innerText = player1currentScore;
        player = 2;
        addClassName('right');
    } else {
        player2GlobalScore += player2currentScore;
        player2ScoreEl.innerText = player2GlobalScore;
        player2currentScore = 0;
        current2ScoreEl.innerText = player2currentScore;
        player = 1;
        addClassName('left');
    }
    if(player1GlobalScore>= 100 || player2GlobalScore >= 100){
        diceEl.classList.replace('visible', 'hide');
        bottomBtnEl.classList.replace('visible', 'hide');
    }
    if (player1GlobalScore >= 100) {
        player1El.innerText = `You Won !!`
        leftEl.classList.add('won')
    } else if (player2GlobalScore >= 100) {
        player2El.innerText = `You Won !!`
        rightEl.classList.add('won')
    }
}

function addClassName(container) {
    if (container === 'left') {
        leftEl.classList.add('currentPlayer')
        leftEl.classList.remove('otherPlayer')
        rightEl.classList.add('otherPlayer')
        rightEl.classList.remove('currentPlayer')
    }
    else {
        leftEl.classList.remove('currentPlayer')
        leftEl.classList.add('otherPlayer')
        rightEl.classList.remove('otherPlayer')
        rightEl.classList.add('currentPlayer')
    }
}