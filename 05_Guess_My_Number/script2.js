'use strict';
document.querySelector('body').style.backgroundColor = '#ce8c8cff';


console.log(document.querySelector('.check').textContent);

let score =20;
const secretNumber = Math.trunc(Math.random() * 20 +1);
console.log(secretNumber);
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.number').value = secretNumber;


document.querySelector('.check').addEventListener('click', function()
{
   const guess = Number(document.querySelector('.guess').value);  
   console.log(guess);

   if(!guess)
   {
    document.querySelector('.message').textContent = 'No Number isnterted';
   }

   else if(guess === secretNumber)
   {
    document.querySelector('.message').textContent = ' 👍 Number Matched 👍';
    document.querySelector('body').style.backgroundColor = '#57e52cff';
    document.querySelector('.number').textContent = secretNumber;
    
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
    }
 
   }

})


