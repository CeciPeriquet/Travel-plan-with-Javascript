'use strict';

//Función para pintar la tarjeta en sí, esta vez para los personajes favoritos
function renderFavCard(favCharacter) {
  //Cambio la función para renderizar las tarjetas de favoritos con DOM avanzado

  const liElement = document.createElement('li');
  liElement.classList.add('cards-list-item');

  const articleElement = document.createElement('article');
  articleElement.classList.add('card', 'js-fav-card', 'selected');
  articleElement.setAttribute('id', favCharacter.char_id);

  const crossElement = document.createElement('i');
  crossElement.classList.add('fa-solid', 'fa-square-xmark');

  const imgElem = document.createElement('img');
  imgElem.setAttribute('src', favCharacter.img);
  imgElem.setAttribute('alt', `Picture of ${favCharacter.name}`);
  imgElem.setAttribute('title', favCharacter.name);
  imgElem.classList.add('card-img');

  const nameElement = document.createElement('h3');
  nameElement.classList.add('card-name');
  const textNameElement = document.createTextNode(favCharacter.name);

  const statusElement = document.createElement('p');
  statusElement.classList.add('card-status');
  const textStatusElement = document.createTextNode(favCharacter.status);

  nameElement.appendChild(textNameElement);
  statusElement.appendChild(textStatusElement);

  articleElement.appendChild(crossElement);
  articleElement.appendChild(imgElem);
  articleElement.appendChild(nameElement);
  articleElement.appendChild(statusElement);

  liElement.appendChild(articleElement);

  const favCard = liElement;
  return favCard;
}

//Función para pintar el listado de tarjetas de mis favoritos, ahora con DOM
function renderFavCharacters() {
  favCardsList.innerHTML = '';
  for (const favCard of favouriteCharacters) {
    favCardsList.appendChild(renderFavCard(favCard));
  }

  favCardListeners();
}
