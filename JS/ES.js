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
