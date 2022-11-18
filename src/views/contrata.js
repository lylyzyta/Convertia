function contact() {
    const startButtons = document.createElement('div');
    startButtons.classList.add('startContainer');
    const startDoll = document.createElement('div');
    startDoll.classList.add('startdoll');
    const startLogo = document.createElement('img');
    startLogo.classList.add('logoMuñe');
    startLogo.src = './assets/mochilero_-orig.png';
    const titleStart = document.createElement('img');
    titleStart.classList.add('titleStart');
    titleStart.src = './assets/Paseito.png';
    const startInputs = document.createElement('div');
    startInputs.classList.add('startInputs');
    const loginButton = document.createElement('button');
    loginButton.classList.add('loginButton');
    loginButton.textContent = 'Login';
    loginButton.addEventListener('click', () => {
      onNavigate('/login');
    });
    const registerButton = document.createElement('button');
    registerButton.classList.add('loginButton');
    registerButton.textContent = 'Registrar';
    registerButton.addEventListener('click', () => {
      onNavigate('/account');
    });
    startButtons.append(startDoll, startInputs);
    startInputs.append(loginButton, registerButton);
    startDoll.append(startLogo, titleStart);
    return startButtons;
  }
  export {contact}