
function popupcober() {
    const sectionOverlay = document.createElement('section');
    sectionOverlay.classList.add('overlay');
  
    const divPopup = document.createElement('div');
    divPopup.classList.add('popup');
  
    const btnClose = document.createElement('a');
    btnClose.text = 'X';
    btnClose.classList.add('btn-close-popup');
    btnClose.id = 'btnClosePopup';
    
    const titlePopData= document.createElement('h3');
    titlePopData.classList.add('popup-title-data');
    titlePopData.setAttribute('style', 'white-space: pre;');
    titlePopData.textContent = 'CONSULTA TU  \r\n';
    titlePopData.textContent += 'COBERTURA';
      
    const dataPopParagraph = document.createElement('p');
    dataPopParagraph.classList.add('popup-data-paragraph');
    dataPopParagraph.textContent = 'TV INTERACTIVA + TELEFONÍA FIJA A UN PRECIO INCREÍBLE';

  
    const formPopupInput = document.createElement('input');
    formPopupInput.classList.add('popup-form-input');
    formPopupInput .type = "txt"; formPopupInput.value = "Tu teléfono";
    
    const  formPopupAcceptCheck = document.createElement('input');
    formPopupAcceptCheck.classList.add('popup-form-accept-check');
    formPopupAcceptCheck.setAttribute("type", "checkbox");
    const  formPopupAcceptP = document.createElement('p');
    formPopupAcceptP.classList.add('popup-form-acceptP');
    formPopupAcceptP.textContent='He leído y acepto las políticas de privacidad.';
    const buttonCallMe = document.createElement('button');
    buttonCallMe.classList.add('button-call-me');
    buttonCallMe.textContent = 'Llámenme';
     
    divPopup.append(titlePopData, dataPopParagraph,formPopupInput,
      formPopupAcceptCheck, formPopupAcceptP, buttonCallMe);
  
  
     btnClose.addEventListener('click', () => {
      sectionOverlay.style.display = 'none';
    });
  
   
    sectionOverlay.append(btnClose, divPopup);
  
    return sectionOverlay;
  }
  
  
  export{popupcober}
  