import {navbarHome} from '../components/navbar.js';
import {onNavigate} from '../routes/app.js';

function home() {
  const homeContainer = document.createElement('div');
  homeContainer.classList.add('home-container');
    
  const homeImgContainer = document.createElement('div');
  homeImgContainer.classList.add('home-img-container');

  const homeImgContainerLeft = document.createElement('div');
  homeImgContainerLeft.classList.add('home-img-container-left');
  const homeContrata = document.createElement('img');
  homeContrata.classList.add('home-img-one');
  homeContrata.src = '../assets/home1.png';
  const homeParagraphOne = document.createElement('p');
  homeParagraphOne.classList.add('home-p-one');
  homeParagraphOne.textContent = 'INIGUALABLE';
  const homeParagraphTwo = document.createElement('p');
  homeParagraphTwo.classList.add('home-p-two');
  homeParagraphTwo.textContent = 'INCOMPARABLE';
  const homeParagraphTree = document.createElement('p');
  homeParagraphTree.classList.add('home-p-tree');
  homeParagraphTree.textContent = 'INCREÍBLE';

  const buttonBuyNow = document.createElement('button');
  buttonBuyNow.classList.add('button-buy');
  buttonBuyNow.textContent = 'CONTRATA HOY';
  buttonBuyNow.addEventListener('click', () => {
    onNavigate('/contrata');
  });



  const homeImgContainerRight = document.createElement('div');
  homeImgContainerRight.classList.add('home-img-container');
  const homeCliente = document.createElement('img');
  homeCliente.classList.add('home-img');
  homeCliente.src = '../assets/home2.png';
  const buttonAtc = document.createElement('button');
  buttonAtc.classList.add('button-atc');
  buttonAtc.textContent = 'ERES CLIENTE Y NECESITAS AYUDA';
  buttonAtc.addEventListener('click', () => {
    onNavigate('/atc');
  });



   homeImgContainerLeft.append(homeContrata,homeParagraphOne,homeParagraphTwo,
    homeParagraphTree,buttonBuyNow);
  homeImgContainerRight.append(homeCliente, buttonAtc);
  homeImgContainer.append(homeImgContainerLeft,homeImgContainerRight);
  homeContainer.append(navbarHome(), homeImgContainer); 
   return homeContainer;
}

export{home}
