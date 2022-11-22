
export function double_triplePack(){


  const contrataSecondContainer = document.createElement('div');
  contrataSecondContainer.classList.add('contrata-second-container');

  const buttonTriplePack = document.createElement('button');
  buttonTriplePack .classList.add('button-triple');
  buttonTriplePack .textContent = 'Triple Pack';

  const buttonDoublePack = document.createElement('button');
  buttonDoublePack.classList.add('button-double');
  buttonDoublePack.textContent = 'Doble Pack';

  contrataSecondContainer.append(buttonTriplePack, buttonDoublePack);

  return contrataSecondContainer

}
