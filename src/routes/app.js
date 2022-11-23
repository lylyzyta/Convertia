import {home} from "../views/home.js";
import {contrata} from "../views/contrata.js";
import {atc} from "../views/atc.js";

const routes = { /*objeto con distintas propiedades *///eslint-disable-line
  '/': home,
  '/contrata': contrata,
  '/atc': atc,
};

const rootDiv = document.getElementById('root');
const onNavigate = (pathname) => {
  window.history.pushState(            /* anexa un registro a nuestro historial de navegacion  */ //eslint-disable-line
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
};

window.onpopstate = () => {       /*actualiza url localizacion *///eslint-disable-line
  rootDiv.appendChild(routes[window.location.pathname]());
};
const component = routes[window.location.pathname];

window.onload = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(component());
};
export {onNavigate}