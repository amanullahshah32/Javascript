"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

console.log(btnsOpenModal);


// buttons open modal
const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}


//button close modal
const closeModal = () =>
{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);