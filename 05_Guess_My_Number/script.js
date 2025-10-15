'use strict';

console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.message'));
console.log(document.querySelector('h1').textContent );


//----------------

console.log('-------------------    ');

console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.message').textContent = 'Correct Number');
console.log(document.querySelector('.message').textContent);

//------------

console.log(document.querySelector('.number').textContent);
console.log(document.querySelector('.number').textContent= 15);
console.log(document.querySelector('.number').textContent);

//-----------
console.log(document.querySelector('.score').textContent = 25); 
//-----------
// console.log(document.querySelector('.guess').textContent);
// console.log(document.querySelector('.guess').textContent=14);
console.log(document.querySelector('.guess').value);
console.log(document.querySelector('.guess').value = 90);