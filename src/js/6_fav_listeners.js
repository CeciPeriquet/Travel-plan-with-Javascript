'use strict';

//Función para eliminar la tarjeta de favoritos, al clickarla
function handleClickFavCard(event) {
  const current = parseInt(event.currentTarget.id);

  const selectedCard = favouriteCharacters.find(
    (eachCardObj) => eachCardObj.char_id === current
  );

  const cardFavouriteIndex = favouriteCharacters.findIndex(
    (eachCardObj) => eachCardObj.char_id === current
  );
  if (cardFavouriteIndex !== -1) {
    favouriteCharacters.splice(cardFavouriteIndex, 1);
  }

  renderFavCharacters();
  localStorage.setItem('favourites', JSON.stringify(favouriteCharacters));
}

//Bucle que recorre el array, esta vez para añadir listeners a las tarjetas favoritas
function favCardListeners() {
  const favCharacterCards = document.querySelectorAll('.js-fav-card');

  for (const eachCard of favCharacterCards) {
    eachCard.addEventListener('click', handleClickFavCard);
  }
}
