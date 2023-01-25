'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// PROJECTS - DISPLAY MORE INFORMATION

const moreDetBtn1 = document.getElementById('btn-pr1');
const moreDetBtn1Back = document.getElementById('btn-pr1-back');
const card1MoreDet = document.getElementById("card1-more-detail")
const card1MoreDetBack = document.getElementById("card1-more-detail-back")

const moreDetBtn3 = document.getElementById('btn-pr3');
const moreDetBtn3Back = document.getElementById('btn-pr3-back');
const card3MoreDet = document.getElementById("card3-more-detail")
const card3MoreDetBack = document.getElementById("card3-more-detail-back")

const moreDetBtn4 = document.getElementById('btn-pr4');
const moreDetBtn4Back = document.getElementById('btn-pr4-back');
const card4MoreDet = document.getElementById("card4-more-detail")
const card4MoreDetBack = document.getElementById("card4-more-detail-back")

moreDetBtn1.addEventListener('click', function() {
  card1MoreDet.style.display = 'none'
  card1MoreDetBack.style.display = 'block'
})

moreDetBtn1Back.addEventListener('click', function() {
  card1MoreDet.style.display = 'block'
  card1MoreDetBack.style.display = 'none'
})

moreDetBtn3.addEventListener('click', function() {
  card3MoreDet.style.display = 'none'
  card3MoreDetBack.style.display = 'block'
})

moreDetBtn3Back.addEventListener('click', function() {
  card3MoreDet.style.display = 'block'
  card3MoreDetBack.style.display = 'none'
})

moreDetBtn4.addEventListener('click', function() {
  card4MoreDet.style.display = 'none'
  card4MoreDetBack.style.display = 'block'
})

moreDetBtn4Back.addEventListener('click', function() {
  card4MoreDet.style.display = 'block'
  card4MoreDetBack.style.display = 'none'
})

