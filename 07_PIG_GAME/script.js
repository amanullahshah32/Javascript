'use strict';

// selecting elements
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

//rolling dice functionality
btnRoll.addEventListener('click', function()
{
    // 1. generating a renadom dice roll
    const dice = Number(Math.trunc(Math.random() *6) + 1); 
    //2. display dice

    //. 3. check for rolled 1: if ture, switch to next palyer
})