const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo  = document.querySelector('#navbar__logo')

// menu.addEventListener('click', function() {
//   menu.classList.toggle('is-active');
//   menuLinks.classList.toggle('active');
// });

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// closes mobile menu when clicking menu
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 1000 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

/* Home Typing Text ------------------------------------------------------------------- */
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Ethan Kupka", "A Computer Science Major", "A Russian Minor", "Web Developer", "Interested in Cyber Security"];
const typingDelay = 50;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});


/* Fire Typing Text ------------------------------------------------------------------- */
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

// Highlight Menu active when scrolling
// const highlightMenu = () =>{
//   const elem = document.querySelector('.highlight')
//   const homeMenu = document.querySelector('#home')
//   const aboutMenu = document.querySelector('#about')
//   const traitsMenu = document.querySelector('#traits')
//   // const skillsMenu = document.querySelector('#skills')
//   // const projectsMenu = document.querySelector('#projects')
//   //let scrollPos = window.scrollY
//
//   //adds 'highlight' class to navbar
//   if(window.innerWidth > 960 && scrollPos < 600){
//     homeMenu.classList.add('highlight');
//     aboutMenu.classList.remove('highlight');
//     return
//   }
//     else if (window.innerWidth > 960 && scrollPos < 1400) {
//       aboutMenu.classList.add('highlight');
//       homeMenu.classList.remove('highlight');
//       traitsMenu.classList.remove('highlight');
//       return
//     }
//     else if (window.innerWidth > 960 && scrollPos < 2345) {
//       traitsMenu.classList.add('highlight');
//       aboutMenu.classList.remove('highlight');
//       return
//     }
//
//     if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
//       elem.classList.remove('highlight');
//     }
//   };
//
// window.addEventListener('scroll', highlightMenu);
// window.addEventListener('click', highlightMenu);