'use strict';

//Función para eliminar la tarjeta de favoritos, al clickarla
function handleClickFavCard(event) {
  const current = parseInt(event.currentTarget.id);
  let cardFromWholeList = '';

  const cardFavouriteIndex = favouriteCharacters.findIndex(
    (eachCardObj) => eachCardObj.char_id === current
  );

  favouriteCharacters.splice(cardFavouriteIndex, 1);
  const findInWholeList = charactersList.find(
    (eachCardObj) => eachCardObj.char_id === current
  );

  console.log(findInWholeList);
  cardFromWholeList = renderCards(findInWholeList);
  cardFromWholeList.classList.remove('selected');
  console.log(cardFromWholeList);

  renderFavCharacters();
  renderCharactersList();

  localStorage.setItem('favourites', JSON.stringify(favouriteCharacters));
}

//Bucle que recorre el array, esta vez para añadir listeners a las tarjetas favoritas
function favCardListeners() {
  const favCharacterCards = document.querySelectorAll('.js-fav-card');

  for (const eachCard of favCharacterCards) {
    eachCard.addEventListener('click', handleClickFavCard);
  }
}
