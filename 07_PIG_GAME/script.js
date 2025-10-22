'use strict';

// selecting elements
const player0EL = document.querySelector('.playre--0');
const player1EL = document.querySelector('.playre--1');
const score0EL = document.getElementById('score--0');
const score1EL = document.getElementById('score--1'); 

const diceEL = document.querySelector('.dice'); 

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold =document.querySelector('.btn--hold');


//starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden'); 


const scores = [0, 0];
let currentScore  = 0; 
let activePlayer = 0;

const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

//rolling dice functionality
btnRoll.addEventListener('click', function()
{
    // 1. generating a renadom dice roll
    const dice = Number(Math.trunc(Math.random() *6) + 1); 
    //2. display dice
    diceEL.src = 'dice_images/dice-' + dice + '.png';
    // console.log(`pressed ${dice}`);
    diceEL.classList.remove('hidden');
    //. 3. check for rolled 1: if ture, switch to next palyer
    if(dice !==1)
    {
        // add dice to current score
        currentScore = currentScore + dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        // scores[activePlayer]  =  currentScore;

        // winner check
        if(scores[activePlayer] + currentScore >= 10)
        {
            document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer] + currentScore;
            diceEL.classList.add('hidden');
            alert(`Player ${activePlayer + 1} has won the game!`);
        }

    }
    else{
        // switch to next player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        scores[activePlayer] = 0;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //toggle the player highlight
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        activePlayer = activePlayer === 0 ? 1 : 0; 
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
        currentScore = 0;
    }
})

console.log(currentScore);
// hold the score of each player
btnHold.addEventListener('click', function()
{
    // 1. add current score to active players score;
    scores[activePlayer] = Number(scores[activePlayer] + currentScore);
    document.getElementById('current--' +activePlayer).textContent = scores[activePlayer];
    //update the score of players
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    // make the current score to zero
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    //toggle the player highlight
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    diceEL.classList.add('hidden');
    // make the current score for the other player to zero
    currentScore = 0;
})


 // refresh the page. 
btnNew.addEventListener('click', function()
{

    
    // reset all the scores and states
    window.location.reload();

})