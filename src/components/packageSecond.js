export function packageSecond() {
    
    const contrataFifthContainer = document.createElement('div');
    contrataFifthContainer.classList.add('contrata-fifth-container');

    const  contrataPkNineth = document.createElement('div');
    contrataPkNineth.classList.add('contrata-pk-third');
    const  contrataPkNinethP = document.createElement('p');
    contrataPkNinethP.classList.add('contrata-pk-p');
    contrataPkNinethP.textContent='Hasta 50 Mbps de velocidad + Llamadas Ilimitadas';
    const buttonGetNineth = document.createElement('button');
    buttonGetNineth.classList.add('button-get-pk');
    buttonGetNineth.textContent = 'Lo quiero';

    const  contrataPkTenth = document.createElement('div');
    contrataPkTenth.classList.add('contrata-pk-third');
    const  contrataPkTenthP = document.createElement('p');
    contrataPkTenthP.classList.add('contrata-pk-p');
    contrataPkTenthP.textContent='Hasta 100 Mbps de velocidad + Llamadas Ilimitadas';
    const buttonGetTenth = document.createElement('button');
    buttonGetTenth.classList.add('button-get-pk');
    buttonGetTenth.textContent = 'Lo quiero';

    const  contrataPkEleventh = document.createElement('div');
    contrataPkEleventh.classList.add('contrata-pk-third');
    const  contrataPkEleventhP = document.createElement('p');
    contrataPkEleventhP.classList.add('contrata-pk-p');
    contrataPkEleventhP.textContent='Hasta 200 Mbps de velocidad + Llamadas Ilimitadas';
    const buttonGetEleventh = document.createElement('button');
    buttonGetEleventh.classList.add('button-get-pk');
    buttonGetEleventh.textContent = 'Lo quiero';

    const  contrataPkTwelfth = document.createElement('div');
    contrataPkTwelfth.classList.add('contrata-pk-third');
    const  contrataPkTwelfthP = document.createElement('p');
    contrataPkTwelfthP.classList.add('contrata-pk-p');
    contrataPkTwelfthP.textContent='Hasta 350 Mbps de velocidad + Llamadas Ilimitadas';
    const buttonGetTwelfth = document.createElement('button');
    buttonGetTwelfth.classList.add('button-get-pk');
    buttonGetTwelfth.textContent = 'Lo quiero';

    contrataPkTwelfth.append(contrataPkTwelfthP, buttonGetTwelfth)
    contrataPkEleventh.append(contrataPkEleventhP, buttonGetEleventh)
    contrataPkTenth.append(contrataPkTenthP, buttonGetTenth)
    contrataPkNineth.append(contrataPkNinethP, buttonGetNineth)
    contrataFifthContainer.append(contrataPkNineth, contrataPkTenth, contrataPkEleventh, contrataPkTwelfth)
    return contrataFifthContainer;
}