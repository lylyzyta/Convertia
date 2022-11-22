import {onNavigate} from '../routes/app.js';

export function navbarHome() {
  const navContainer = document.createElement('nav');
   navContainer.classList.add('navbar-container');

  const navContact = document.createElement('img');
  navContact.classList.add('img-contact');
  navContact.src = '../assets/phone.png';
  navContact.alt = "Telephone";
  navContact.addEventListener('click', () => {
    onNavigate('/contact');
  });
  const navLogo = document.createElement('img');
  navLogo.classList.add('img-logo');
  navLogo.src = '../assets/megacable.png';
  navLogo.alt = 'Logo'
  navLogo.addEventListener('click', () => {
    onNavigate('/');
  });

  navContainer.append(navContact, navLogo);

  return navContainer;
}

export function navbarContrata() {
    const navContainer = document.createElement('nav');
     navContainer.classList.add('navbar-container');
  
    const navContact = document.createElement('img');
    navContact.classList.add('img-contact');
    navContact.src = '../assets/phone.png';
    navContact.alt = "Telephone";
    navContact.addEventListener('click', () => {
      onNavigate('/contact');
    });
    const navLogo = document.createElement('img');
    navLogo.classList.add('img-logo');
    navLogo.src = '../assets/megacable.png';
    navLogo.alt = 'Logo'
    navLogo.addEventListener('click', () => {
      onNavigate('/');
    });
    const navPin = document.createElement('img');
    navPin.classList.add('img-logo');
    navPin.src = '../assets/alfiler.svg';
    navPin.alt = 'Logo';
    navPin.addEventListener('click', () => {
      onNavigate('/');
    });
  
    navContainer.append(navContact, navLogo, navPin);
  
    return navContainer;
    }
