'use strict';
document.querySelector('body').style.backgroundColor = '#ce8c8cff';


console.log(document.querySelector('.check').textContent);
const secretNumber = Math.trunc(Math.random() * 20 +1);
document.querySelector('.number').textContent = secretNumber;


document.querySelector('.check').addEventListener('click', function()
{
   const guess = Number(document.querySelector('.guess').value);  
   console.log(guess);

   if(!guess)
   {
    document.querySelector('.message').textContent = 'No Number isnterted';
   }
   if(guess)
   {
    document.querySelector('.message').textContent = 'Number inserted: ' + guess + ' \n Number doesnt match';
   }
   if(guess === secretNumber)
   {
    document.querySelector('.message').textContent = ' 👍 Number Matched 👍';
   }
})


