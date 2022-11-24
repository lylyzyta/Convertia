import {footer} from "../components/footer.js";
import {navbarContrata} from "../components/navbar.js";

function atc() {
    const atcContainer = document.createElement('div');
    atcContainer.classList.add('atc-container');

    const atcFirstContainer = document.createElement('div');
    atcFirstContainer.classList.add('atc-first-container');
    const atcFirstP = document.createElement('p');
    atcFirstP.classList.add('atc-p-one');
    atcFirstP.textContent= "Chin,";
    const atcSecondP = document.createElement('p');
    atcSecondP.classList.add('atc-p-two');
    atcSecondP.textContent= "¿algo no va bien?";
    const buttonHelpOne = document.createElement('button');
    buttonHelpOne.classList.add('button-help-one');
    buttonHelpOne.textContent = 'Te ayudamos';

    const atcSecondContainer = document.createElement('div');
    atcSecondContainer.classList.add('atc-second-container');
    const atcThirdP = document.createElement('p');
    atcThirdP.classList.add('atc-p-tree');
    atcThirdP.textContent= "Sabemos que la tecnología no siempre está de nuestro lado y los inconvenientes suceden. Por ello, ponemos a tu disposición nuestros canales de Servicio al Cliente para ayudarte a resolver aquellos fallos o dudas que tengas sobre:";

    const atcThirdContainer = document.createElement('div');
    atcThirdContainer.classList.add('atc-third-container');

    const atcImgOne = document.createElement('img');
    atcImgOne.classList.add('atc-img');
    atcImgOne.src = '../assets/dinero.svg';
    const atcImgOneP = document.createElement('p');
    atcImgOneP.classList.add('atc-img-p');
    atcImgOneP.textContent="Consulta de saldo";
    
    const atcImgTwo = document.createElement('img');
    atcImgTwo.classList.add('atc-img');
    atcImgTwo.src = '../assets/ui.svg';
    const atcImgTwoP = document.createElement('p');
    atcImgTwoP.classList.add('atc-img-p');
    atcImgTwoP.textContent="Soporte Técnico Telefonía";
    
    const atcImgTree = document.createElement('img');
    atcImgTree.classList.add('atc-img');
    atcImgTree.src = '../assets/charla.svg';
    const atcImgTreeP = document.createElement('p');
    atcImgTreeP.classList.add('atc-img-p');
    atcImgTreeP.textContent="Quejas y Sugerencias";
    
    const atcImgFour = document.createElement('img');
    atcImgFour.classList.add('atc-img');
    atcImgFour.src = '../assets/wifi.svg';
    const atcImgFourP = document.createElement('p');
    atcImgFourP.classList.add('atc-img-p');
    atcImgFourP.textContent="Soporte Técnico Internet";
    
    const atcImgFive = document.createElement('img');
    atcImgFive.classList.add('atc-img');
    atcImgFive.src = '../assets/monitor.svg';
    const atcImgFiveP = document.createElement('p');
    atcImgFiveP.classList.add('atc-img-p');
    atcImgFiveP.textContent="Soporte Técnico Televisión";

    const atcFourthContainer = document.createElement('div');
    atcFourthContainer.classList.add('atc-fourth-container');
    const atcEmailImg = document.createElement('img');
    atcEmailImg.classList.add('atc-img-email');
    atcEmailImg.src = '../assets/correo.svg';
    const atcEmailP = document.createElement('p');
    atcEmailP.classList.add('atc-contact-p');
    atcEmailP.textContent="atencionclientes@xxxx.com.mx";
    const atcPhoneImg = document.createElement('img');
    atcPhoneImg.classList.add('atc-img-email');
    atcPhoneImg.src = '../assets/phone_white.png';
    const atcPhoneP = document.createElement('p');
    atcPhoneP.classList.add('atc-contact-p');
    atcPhoneP.textContent="673 690 0100";

    
    const atcFifthContainer = document.createElement('div');
    atcFifthContainer.classList.add('atc-fifth-container');
    const atcAumentaP = document.createElement('p');
    atcAumentaP.classList.add('atc-aumenta-p');
    atcAumentaP.textContent="Aumenta tu velocidad de internet o cambia tu Doble plack por un Triple pack a un precio inigualable.";
    const buttonHelpTwo = document.createElement('button');
    buttonHelpTwo.classList.add('button-help-two');
    buttonHelpTwo.textContent = 'Te ayudamos';


atcFifthContainer.append(atcAumentaP,buttonHelpTwo)
atcFourthContainer.append(atcEmailImg, atcEmailP, atcPhoneImg, atcPhoneP)
atcThirdContainer.append(atcImgOne, atcImgTwo,atcImgTree,
    atcImgFour, atcImgFive, atcImgOneP,  atcImgTwoP,
    atcImgTreeP, atcImgFourP, atcImgFiveP)
atcSecondContainer.append(atcThirdP)
atcFirstContainer.append(atcFirstP, atcSecondP, buttonHelpOne)
atcContainer.append(navbarContrata(),atcFirstContainer, atcSecondContainer,
atcThirdContainer,atcFourthContainer,atcFifthContainer,footer());
   return atcContainer ;
}

export{atc}