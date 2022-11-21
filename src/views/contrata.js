import {footer} from '../components/footer.js';
import {navbarContrata} from '../components/navbar.js';
import {packageFirst} from '../components/packageFirst.js';
import {packageSecond} from '../components/packageSecond.js';


function contrata() {
  const contrataContainer = document.createElement('div');
  contrataContainer.classList.add('contrata-container');
    
  const contrataFirstContainer = document.createElement('div');
  contrataFirstContainer.classList.add('contrata-first-container');

  const contrataContainerLeft = document.createElement('div');
  contrataContainerLeft.classList.add('contrata-container-left');
  const contrataParagraphOne = document.createElement('p');
  contrataParagraphOne.classList.add('contrata-p-one');
  contrataParagraphOne.textContent = 'Internet INIGUALABLE';
  const contrataParagraphTwo = document.createElement('p');
  contrataParagraphTwo.classList.add('contrata-p-two');
  contrataParagraphTwo.textContent = 'TV interactiva + Telefonía Fija';
  const contrataParagraphTree = document.createElement('p');
  contrataParagraphTree.classList.add('contrata-p-tree');
  contrataParagraphTree.textContent = 'Desde $499 al mes';

  const buttonGet = document.createElement('button');
  buttonGet.classList.add('button-get');
  buttonGet.textContent = 'Lo quiero';
  buttonGet.addEventListener('click', () => {
    onNavigate('/');
  });

  const contrataContainerRight = document.createElement('div');
  contrataContainerRight.classList.add('contrata-container-right');
  const contrataForm = document.createElement('div');
  contrataForm.classList.add('contrata-form');
  const contrataFormTitle = document.createElement('h1');
  contrataFormTitle.classList.add('contrata-form-title');
  contrataFormTitle.textContent='Contrata ahora!'
  const contrataFormParagraph = document.createElement('h1');
  contrataFormParagraph.classList.add('contrata-form-paragraph');
  contrataFormParagraph.textContent='Déjanos tu número   y te llamamos en segundos';
  const contrataFormLabel = document.createElement('label');
  contrataFormLabel.classList.add('contrata-form-label');
  contrataFormLabel.textContent='Si es celular sin el 044 o 045.'
  const contrataFormInput = document.createElement('input');
  contrataFormInput.classList.add('contrata-form-input');
  contrataFormInput.type = "txt"; contrataFormInput.value = "Tu teléfono";
  const contrataFormAccept = document.createElement('div');
  contrataFormAccept.classList.add('contrata-form-accept');
  const  contrataFormAcceptCheck = document.createElement('input');
  contrataFormAcceptCheck.classList.add('contrata-form-accept-check');
  contrataFormAcceptCheck.setAttribute("type", "checkbox");
  const  contrataFormAcceptP = document.createElement('p');
  contrataFormAcceptP.classList.add('contrata-form-acceptP');
  contrataFormAcceptP.textContent='He leído y acepto las políticas de privacidad.';
  const buttonCall = document.createElement('button');
  buttonCall.classList.add('button-call');
  buttonCall.textContent = 'LLÁMAME';
  buttonCall.addEventListener('click', () => {
    onNavigate('/atc');
  });

  const contrataSecondContainer = document.createElement('div');
  contrataSecondContainer.classList.add('contrata-second-container');

  const buttonTriplePack = document.createElement('button');
  buttonTriplePack .classList.add('button-triple');
  buttonTriplePack .textContent = 'Triple Pack';

  const buttonDoublePack = document.createElement('button');
  buttonDoublePack.classList.add('button-double');
  buttonDoublePack.textContent = 'Doble Pack';


  contrataSecondContainer.append(buttonTriplePack, buttonDoublePack);
  contrataForm.append(contrataFormTitle, contrataFormParagraph, contrataFormLabel, 
  contrataFormInput, contrataFormAcceptCheck,contrataFormAcceptP, buttonCall);
  contrataContainerRight.append(contrataForm);
  contrataContainerLeft.append(contrataParagraphOne, contrataParagraphTwo, contrataParagraphTree, buttonGet)
   contrataFirstContainer.append(contrataContainerLeft, contrataContainerRight)
   contrataContainer.append(navbarContrata(), contrataFirstContainer, 
   contrataSecondContainer, packageFirst(), packageSecond(), footer()); 
   return contrataContainer;
}

export{contrata}
