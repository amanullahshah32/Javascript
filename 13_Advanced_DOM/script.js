'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// Alternatively, using a for loop:
//
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



// selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);


const header = document.querySelector('.header');
console.log(document.querySelector('.header'));
console.log(document.querySelectorAll('.header'));
console.log(document.querySelectorAll('.section'));

console.log(document.getElementById('section--1'));
console.log(document.getElementsByTagName('button'));
console.log(document.getElementsByTagName('button'));

console.log(document.getElementsByClassName('btn'));


// creating and inserting elemenets
// insertAdjacentHTML
const message = document.createElement('div'); // creates a div element
message.classList.add('cookie-message'); // adds a class to the div element
// message.textContent = ' We use cookies for imporved functionality and analytics. '; // adds text content to the div element


message.innerHTML = 'We use cookies for imporved functionality and analytics. <button class="btn btn--close-cookie"> GOT IT! </button>'; // adds HTML content to the div element

header.prepend(message); // adds the message element as the first child of the header element
header.append(message); // moves the message element as the last child of the header element

document.querySelector('.btn--close-cookie').addEventListener('click', function(e){
  e.preventDefault();
  message.remove();
  message.parentElement.removeChild(message); // old way of removing an element
})

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e){
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect(   ));

  console.log('current scroll (x/y', window.pageXOffset, window.pageYOffset  );
  console.log('height/width viewpost', document.documentElement.clientHeight, document.documentElement.clientWidth );

  // // scrooling
  // window.scrollTo(s1coords.left + window.pageXOffset , s1coords.top + window.pageYOffset);

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset ,
  //   top:  s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  // modern way
  section1.scrollIntoView({behavior: 'smooth' }); // scrolls to section1 smoothly and its so easy :)
})