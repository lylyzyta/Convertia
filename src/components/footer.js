export function footer(){

    const footerContainer = document.createElement('FOOTER');
    footerContainer.classList.add('footer-container');

    const footerTerm = document.createElement('div');
    footerTerm.classList.add('footer-term');
    const footerLogo = document.createElement('img')
    footerLogo.classList.add('footer-logo')
    footerLogo.src =  '../assets/megacable.png';
    const footerDataFirst= document.createElement('p');
    footerDataFirst.classList.add('footer-data')
    footerDataFirst.textContent = 'Términos y Condiciones';
    const footerDataSecond= document.createElement('p');
    footerDataSecond.classList.add('footer-data')
    footerDataSecond.textContent = 'Aviso de Privacidad';
    const footerDataThird= document.createElement('p');
    footerDataThird.classList.add('footer-data')
    footerDataThird.textContent = 'Política y Seguridad';

    
    const footerInfo = document.createElement('div');
    footerInfo.classList.add('footer-info');
    
    const footerInfoPOne = document.createElement('div');
    footerInfoPOne.classList.add('footer-infoP-one');
    const footerContactPOne= document.createElement('p');
    footerContactPOne.classList.add('footer-contact-one')
    footerContactPOne.textContent = 'Para contratar déjanos tu número';
    const footerContactPTwo= document.createElement('p');
    footerContactPTwo.classList.add('footer-contact-two')
    footerContactPTwo.textContent = 'y te marcaremos en segundos.';

    const footerConactInput = document.createElement('input');
    footerConactInput.classList.add('footer-contact-input');
    footerConactInput.type = "txt"; footerConactInput.value = "55 1234 5678";

    const  footerContactAcceptCheck = document.createElement('input');
    footerContactAcceptCheck.classList.add('footer-accept-check');
    footerContactAcceptCheck.setAttribute("type", "checkbox");

    const  footerContactAcceptP = document.createElement('p');
    footerContactAcceptP.classList.add('footer-contact-acceptP');
    footerContactAcceptP.textContent='He leído y acepto las políticas de privacidad.';
    
    const buttonSolicit = document.createElement('button');
    buttonSolicit.classList.add('button-call');
    buttonSolicit.textContent = 'SOLICITAR';

    footerInfoPOne.append(footerContactPOne, footerContactPTwo)
    footerInfo.append(footerInfoPOne, footerConactInput,
        footerContactAcceptCheck, footerContactAcceptP, buttonSolicit)
    footerTerm.append(footerLogo, footerDataFirst, footerDataSecond, footerDataThird);
    footerContainer.append(footerTerm, footerInfo)
   

    return footerContainer;
}