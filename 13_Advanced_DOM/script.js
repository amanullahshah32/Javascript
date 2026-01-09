"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
// Alternatively, using a for loop:
//
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
console.log(document.querySelector(".header"));
console.log(document.querySelectorAll(".header"));
console.log(document.querySelectorAll(".section"));

console.log(document.getElementById("section--1"));
console.log(document.getElementsByTagName("button"));
console.log(document.getElementsByTagName("button"));

console.log(document.getElementsByClassName("btn"));

// creating and inserting elemenets
// insertAdjacentHTML
const message = document.createElement("div"); // creates a div element
message.classList.add("cookie-message"); // adds a class to the div element
// message.textContent = ' We use cookies for imporved functionality and analytics. '; // adds text content to the div element

message.innerHTML =
  'We use cookies for imporved functionality and analytics. <button class="btn btn--close-cookie"> GOT IT! </button>'; // adds HTML content to the div element

header.prepend(message); // adds the message element as the first child of the header element
header.append(message); // moves the message element as the last child of the header element

// DEMO: insertAdjacentHTML usage
// This will insert a new paragraph at the top of the header
// header.insertAdjacentHTML('afterbegin', '<p style="color: blue; font-weight: bold;">This is a demo of insertAdjacentHTML!</p> <button class="btn btn--close-cookie"> CLOSE </button>');
// Try changing 'afterbegin' to 'beforeend', 'beforebegin', or 'afterend' to see different results.

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function (e) {
    e.preventDefault();
    message.remove();
    message.parentElement.removeChild(message); // old way of removing an element
  });

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());

  console.log("current scroll (x/y", window.pageXOffset, window.pageYOffset);
  console.log(
    "height/width viewpost",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // // scrooling
  // window.scrollTo(s1coords.left + window.pageXOffset , s1coords.top + window.pageYOffset);

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset ,
  //   top:  s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  // modern way
  section1.scrollIntoView({ behavior: "smooth" }); // scrolls to section1 smoothly and its so easy :)
});

// smooth scrolling on feature links
// document.querySelectorAll(".nav__link").forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     const sectionId = document.querySelector(id);
//     console.log(`clicked: ${this.textContent}`);
//     if (sectionId) {
//       sectionId.scrollIntoView({ behavior: "smooth" });
//     }
//   });
// });

// Event delegation for smooth scrolling on feature links
// 1. add event listener to common parent elements
// 2. determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);
  console.log(this);

  // matching strategy
  if (e.target.classList.contains("nav__link")) {
    // e.preventDefault();
    // console.log(this);
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// element.insertAdjacentHTML('beforeend', '<p>Hello!</p>');

// h1.addEventListener('mouseenter', function(e)
// {
//   alert('You are reading the heading by enterin the mouse:D');
// });

// h1.onmouseenter = function(e)
// {
//   alert('You are reading the heading by onmouseenter property:D');
// }

// const h1Alerts = function(e) {
//   alert('You are reading the heading by addEventListener:D')
//   h1.removeEventListener('mouseenter', h1Alerts);
// };

// h1.addEventListener('mouseenter', h1Alerts);

// setTimeout( ()=> h1.removeEventListener('mouseenter', h1Alerts), 3000);

// random colors

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

console.log(randomColor());

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   console.log("clicked");
//   this.style.backgroundColor = randomColor();
//   // console.log("link", e.target, e.currentTarget);

//   e.stopPropagation(); // stops the event bubbling
// });
// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   // console.log("container", e.target, e.currentTarget);
//   // e.stopPropagation(); // stops the event bubbling
// });
// document.querySelector(".nav").addEventListener("click", function (e) {
//   console.log("clicked");
//   this.style.backgroundColor = randomColor();
//   // console.log("nav", e.target, e.currentTarget);
// }); // 'true' capturing phase)
/////////////////////////////////////////////////////////////////////////

// const h1 = document.querySelector("h1");
// console.log(h1.parentElement);
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = "white";
// h1.lastElementChild.style.color = "orangered";

// // Goind upwards: parent
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // Goind sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el){
//   if(el !== h1)
//     el.style.transform = 'scale(1.1)';
// })
///////////////////////////////////////////////

// Tabbed Component
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

// use event delegation
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  // console.log(clicked.textContent);

  if (!clicked) return;
  // guard against null
  // active tabs
  // remove active state from all tabs
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  // add active state to clicked tab
  clicked.classList.add("operations__tab--active");
  console.log(clicked?.textContent);

  // Activate content areas
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));
  const content = document.querySelector(
    `.operations__content--${clicked.dataset.tab}`
  );
  if (content) content.classList.add("operations__content--active");
  // console.log(content.textContent);
});

////////////////////////////////////////////////
// Menu fade animation

const nav = document.querySelector(".nav");
const handleHover = function (e) {
  const opacity = this; // ← read opacity from 'this'
  // console.log(opacity);

  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach(function (el) {
      if (el !== link) {
        el.style.opacity = opacity;
        logo.style.opacity = opacity;
      }
    });
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// // Sticky Navigation
// window.onscroll = function () {
//   stickyNav();
// };

// // Get the navbar element from the DOM
const navbar = document.querySelector(".nav");
// // Get section 1 element to use its offset position
// const section_1 = document.querySelector("#section--1");
// // get the initial offset position of section 1
// const stickyOffset = section_1.offsetTop;

// console.log(window.pageYOffset);
// // the functions that toggles the sticky class on scroll
// function stickyNav() {
//   if (window.pageYOffset >= stickyOffset) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
/////////////

// Sticky Navigation: Intersection Observer API

const navHeight = navbar.getBoundingClientRect().height;
const options ={
  root: null, // viewport
  threshold: 0.2, // 10% of the section is visible
  rootMargin: `-${navHeight}px`, // margin around the root
};
const obsCallback = function(entries, observer){
  entries.forEach(entry =>{
    console.log(entry);
    if (entry.isIntersecting === false){
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  })
};
const observer = new IntersectionObserver(obsCallback, options);

observer.observe(header);


// Reveal sections on scroll
console.log(`reveal sections on scroll`);
const allSections = document.querySelectorAll('.section')



const revealSection = function(entries, observer){
  const [entry] = entries; // destructuring assignment
  // console.log(entry);
  // console.log(entry);
  if(entry.isIntersecting === false) return; // guard clause
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
  
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.25,
});

allSections.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
})


// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');
// console.log(imgTargets);

const loadingImg = function(entries, observer){
  const [entry] = entries;
  console.log(entry);
  if(entry.isIntersecting === false) return; // guard clause
  // replace src with data-src
  // entry.target.classList.remove('lazy-img');
  entry.target.src = entry.target.dataset.src; // dataset.src gets the value of data-src attribute
  
  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img');
  })
  observer.unobserve(entry.target);


}
const imgOptions = {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
}
const imgObserver = new IntersectionObserver(loadingImg, imgOptions);

imgTargets.forEach( img => imgObserver.observe(img));


// Slider component
const slides = document.querySelectorAll('.slide');
slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${100 * index}%)`
  // 0%, 100%, 200%, 300%
})