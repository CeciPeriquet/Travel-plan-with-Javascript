'use strict';

//Función para pintar la tarjeta en sí, con sus elementos de html
function renderCards(character) {
  //Cambio la función para renderizar las tarjetas con DOM avanzado

  const liElement = document.createElement('li');
  liElement.classList.add('cards-list-item');

  const articleElement = document.createElement('article');
  const current = character.char_id;

  const cardFavouriteIndex = favouriteCharacters.findIndex(
    (eachCardObj) => eachCardObj.char_id === current
  );

  if (cardFavouriteIndex !== -1) {
    articleElement.classList.add('card', 'js-fav-card', 'selected');
  } else {
    articleElement.classList.add('card', 'js-card');
  }

  articleElement.setAttribute('id', character.char_id);

  const imgElem = document.createElement('img');
  imgElem.setAttribute('src', character.img);
  imgElem.setAttribute('alt', `Picture of ${character.name}`);
  imgElem.setAttribute('title', character.name);
  imgElem.classList.add('card-img');

  const nameElement = document.createElement('h3');
  nameElement.classList.add('card-name');
  const textNameElement = document.createTextNode(character.name);

  const statusElement = document.createElement('p');
  statusElement.classList.add('card-status');
  const textStatusElement = document.createTextNode(character.status);

  nameElement.appendChild(textNameElement);
  statusElement.appendChild(textStatusElement);

  articleElement.appendChild(imgElem);
  articleElement.appendChild(nameElement);
  articleElement.appendChild(statusElement);

  liElement.appendChild(articleElement);

  const card = liElement;

  return card;
}

//Función para pintar la lista completa de tarjetas de personajes
function renderCharactersList() {
  cardsList.innerHTML = '';
  for (const card of charactersList) {
    cardsList.appendChild(renderCards(card));
  }

  cardListeners();
}
