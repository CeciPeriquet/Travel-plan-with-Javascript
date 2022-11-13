'use strict';

//Función para pintar la tarjeta en sí, esta vez para los personajes favoritos
function renderFavCard(favCharacter) {
  let favCard = `<li class='cards-list-item'>
      <article class='card js-fav-card selected' id='${favCharacter.char_id}'>
        <i class='fa-solid fa-square-xmark'></i>  
        <img src='${favCharacter.img}' alt='Picture of ${favCharacter.name}' title='${favCharacter.name}' class='card-img' />
        <h3 class='card-name'>${favCharacter.name}</h3>
        <p class='card-status'>${favCharacter.status}</p>
      </article>
    </li>`;

  return favCard;
}

//Función para PINTAR el listado de tarjetas de mis FAVORITOS
function renderFavCharacters() {
  let favCharacterCardList = '';
  for (const card of favouriteCharacters) {
    favCharacterCardList += renderFavCard(card);
  }
  favCardsList.innerHTML = favCharacterCardList;
  favCardListeners();
}
