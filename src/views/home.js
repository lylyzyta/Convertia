import {onNavigate} from '../routes/app.js';

function home() {
  const homeContainer = document.createElement('div');
  homeContainer.classList.add('container-fluid');
  const homeNavContainer = document.createElement('div');
  homeNavContainer.classList.add('container');
  const homeContacta = document.createElement('img');
  homeContacta.classList.add('img-fluid');
  homeContacta.src = '../assets/telephone-forward.svg';
  const homeLogo = document.createElement('img');
  homeLogo.classList.add('img-fluid');
  homeLogo.src = '../assets/telephone-forward.svg';
  const homeImgContainer = document.createElement('div');
  homeImgContainer.classList.add('col');
  const homeContrata = document.createElement('img');
  homeContrata.classList.add('img-fluid');
  homeContrata.src = '../assets/home1.png';
  const homeCliente = document.createElement('img');
  homeCliente.classList.add('img-fluid');
  homeCliente.src = '../assets/home2.png';
  homeNavContainer.append(homeContacta, homeLogo)
  homeImgContainer.append(homeContrata, homeCliente)
  homeContainer.append(homeNavContainer, homeImgContainer); 
   return homeContainer;
}

export{home}
