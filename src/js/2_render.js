'use strict';

//Función para pintar la tarjeta en sí, con sus elementos de html
function renderCards(character) {
  let card = `<li class='cards-list-item'>
      <article class='card js-card' id='${character.char_id}'>
        <img src='${character.img}' alt='Picture of ${character.name}' title='${character.name}' class='card-img' />
        <h3 class='card-name'>${character.name}</h3>
        <p class='card-status'>${character.status}</p>
      </article>
    </li>`;

  return card;
}

//Función para pintar la lista completa de tarjetas de cada personaje
function renderCharactersList() {
  let characterCardList = '';
  for (const card of charactersList) {
    characterCardList += renderCards(card);
  }
  cardsList.innerHTML = characterCardList;
  cardListeners();
}
