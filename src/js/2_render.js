'use strict';

//Función para pintar la tarjeta en sí, con sus elementos de html
function renderCards(country) {
  //Cambio la función para renderizar las tarjetas con DOM avanzado

  const liElement = document.createElement('li');
  liElement.classList.add('cards-list-item');

  const articleElement = document.createElement('article');

  const cardFavouriteIndex = favouriteCountries.findIndex(
    (eachCardObj) => eachCardObj.id === country.id
  );

  if (cardFavouriteIndex !== -1) {
    articleElement.classList.add('card', 'js-fav-card', 'selected');
  } else {
    articleElement.classList.add('card', 'js-card');
  }

  articleElement.setAttribute('id', country.id);

  const imgElem = document.createElement('img');
  imgElem.setAttribute('src', country.img);
  imgElem.setAttribute('alt', country.alt);
  imgElem.setAttribute('title', country.name);
  imgElem.classList.add('card-img');

  const nameElement = document.createElement('h3');
  nameElement.classList.add('card-name');
  const textNameElement = document.createTextNode(country.name);

  const continentElement = document.createElement('p');
  continentElement.classList.add('card-continent');
  const textContinentElement = document.createTextNode(country.continent);

  nameElement.appendChild(textNameElement);
  continentElement.appendChild(textContinentElement);

  articleElement.appendChild(imgElem);
  articleElement.appendChild(nameElement);
  articleElement.appendChild(continentElement);

  liElement.appendChild(articleElement);

  const card = liElement;

  return card;
}

//Función para pintar la lista completa de tarjetas de personajes
function renderCountriesList() {
  cardsList.innerHTML = '';
  for (const card of countriesList) {
    cardsList.appendChild(renderCards(card));
  }

  cardListeners();
}
