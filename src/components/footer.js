export function footer(){

    const footerContainer = document.createElement('FOOTER');
    footerContainer.classList.add('footer-container');

    const footerInfo = document.createElement('div');
    footerInfo.classList.add('footer-info');
    const footerLogo = document.createElement('img')
    footerLogo.classList.add('footer-logo')
    footerLogo.src =  '../assets/logo.png';
    const footerDataFirst= document.createElement('p');
    footerDataFirst.classList.add('footer-data')
    footerDataFirst.textContent = 'Términos y Condiciones';
    const footerDataSecond= document.createElement('p');
    footerDataSecond.classList.add('footer-data')
    footerDataSecond.textContent = 'Aviso de Privacidad';
    const footerDataThird= document.createElement('p');
    footerDataThird.classList.add('footer-data')
    footerDataThird.textContent = 'Política y Seguridad';

    footerInfo.append(footerLogo, footerDataFirst, footerDataSecond, footerDataThird);
    footerContainer.append(footerInfo)

    return footerContainer;
}