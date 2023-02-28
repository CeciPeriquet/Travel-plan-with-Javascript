'use strict';

//Función para pintar la tarjeta en sí, esta vez para los personajes favoritos
function renderFavCard(favCountry) {
  //Cambio la función para renderizar las tarjetas de favoritos con DOM avanzado

  const liElement = document.createElement('li');
  liElement.classList.add('cards-list-item');

  const articleElement = document.createElement('article');
  articleElement.classList.add('favcard', 'js-fav-card', 'selected');
  articleElement.setAttribute('id', favCountry.id);

  const crossElement = document.createElement('i');
  crossElement.classList.add('fa-solid', 'fa-square-xmark');

  const imgElem = document.createElement('img');
  imgElem.setAttribute('src', favCountry.img);
  imgElem.setAttribute('alt', favCountry.alt);
  imgElem.setAttribute('title', favCountry.name);
  imgElem.classList.add('card-img');

  const nameElement = document.createElement('h3');
  nameElement.classList.add('card-name');
  const textNameElement = document.createTextNode(favCountry.name);

  const continentElement = document.createElement('p');
  continentElement.classList.add('card-continent', 'favcard-text');
  const textContinentElement = document.createTextNode(
    `Continent: ${favCountry.continent}`
  );

  const capitalElement = document.createElement('p');
  capitalElement.classList.add('card-capital', 'favcard-text');
  const textCapitalElement = document.createTextNode(
    `Capital: ${favCountry.capital[0]}`
  );

  nameElement.appendChild(textNameElement);
  continentElement.appendChild(textContinentElement);
  capitalElement.appendChild(textCapitalElement);

  articleElement.appendChild(crossElement);
  articleElement.appendChild(imgElem);
  articleElement.appendChild(nameElement);
  articleElement.appendChild(continentElement);
  articleElement.appendChild(capitalElement);

  liElement.appendChild(articleElement);

  const favCard = liElement;
  return favCard;
}

function paintFavSection() {
  if (favouriteCountries.length !== 0) {
    favsSection.classList.remove('hidden');
  } else {
    favsSection.classList.add('hidden');
  }
  //Llamo a la función para pintar el reset
  paintReset();
}

//Función para pintar el listado de tarjetas de mis favoritos, ahora con DOM
function renderFavCountries() {
  favCardsList.innerHTML = '';

  for (const favCard of favouriteCountries) {
    favCardsList.appendChild(renderFavCard(favCard));
  }
  //Si tenemos favoritos en el listado, llamo a la función para pintar la sección de fav
  paintFavSection();
  favCardListeners();
}
