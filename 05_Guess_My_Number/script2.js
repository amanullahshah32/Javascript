'use strict';
document.querySelector('body').style.backgroundColor = '#ce8c8cff';


// console.log(document.querySelector('.check').textContent);
let highScore = 0;
let score =20;
let secretNumber = Math.trunc(Math.random() * 20 +1);
console.log(secretNumber);
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.number').value = secretNumber;
document.querySelector('.number').value ;


// coding challenge
console.log('-------------------    coding challenge -------------------    \n');
// the again button should reset the game
document.querySelector('.again').addEventListener('click', function()
{
    score = 20; 
    secretNumber = Math.trunc(Math.random() * 20 + 1); // Generate new secret number
    console.log('new secret number: ' + secretNumber);
    
    // Reset all game elements (but keep highscore as is)
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ''; // Clear input field
    document.querySelector('body').style.backgroundColor = '#ce8c8cff';
    document.querySelector('.number').style.width = '15rem';
    
    // Note: highscore is NOT reset here, so it persists!
})


document.querySelector('.check').addEventListener('click', function()
{
   const guess = Number(document.querySelector('.guess').value);  
   console.log(guess);

   if(!guess)
   {
    document.querySelector('.message').textContent = 'No Number isnterted';
   }
// when player wins
   else if(guess === secretNumber)
   {
    document.querySelector('.message').textContent = ' 👍 Number Matched 👍';
    document.querySelector('body').style.backgroundColor = '#57e52cff';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if(score > highScore)
    {
        highScore = score;
            document.querySelector('.highscore').textContent = highScore;
    } 
   }
   else if(guess > secretNumber)
   {
    if(score>1)
    {
        document.querySelector('.message').textContent = 'Number is higher';
        score--;
        document.querySelector('.score').textContent = score; 
    }
    else{
        document.querySelector('.message').textContent = '😔 You lost the game 😔';
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#ff0000';
        alert('You lost the game');

    }

    }
   else if(guess < secretNumber)
   {
    if(score>1)
    {
        document.querySelector('.message').textContent = 'Number is lower';
        score--;
        document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.message').textContent = '😔 You lost the game 😔';
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#ff0000';
        alert('You lost the game');
    }
 
   }

})


