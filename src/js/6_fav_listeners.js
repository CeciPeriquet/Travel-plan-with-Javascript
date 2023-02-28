'use strict';

//Función para eliminar la tarjeta de favoritos, al clickarla
function handleClickFavCard(event) {
  const current = parseInt(event.currentTarget.id);
  let cardFromWholeList = '';

  const cardFavouriteIndex = favouriteCountries.findIndex(
    (eachCardObj) => eachCardObj.id === current
  );

  favouriteCountries.splice(cardFavouriteIndex, 1);
  const findInWholeList = countriesList.find(
    (eachCardObj) => eachCardObj.id === current
  );

  cardFromWholeList = renderCards(findInWholeList);
  cardFromWholeList.classList.remove('selected');

  renderFavCountries();
  renderCountriesList();

  localStorage.setItem('favourites', JSON.stringify(favouriteCountries));
}

//Bucle que recorre el array, esta vez para añadir listeners a las tarjetas favoritas
function favCardListeners() {
  const favCountriesCards = document.querySelectorAll('.js-fav-card');

  for (const eachCard of favCountriesCards) {
    eachCard.addEventListener('click', handleClickFavCard);
  }
}
