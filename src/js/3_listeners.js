'use strict';

// Función para buscar los obj seleccionados y generar un nuevo array con ellos
function handleClickCard(event) {
  //Recupero la línea de código que me pintaba la tarjeta en el listado general (ahora la quiero pintada en ambos listados)
  event.currentTarget.classList.add('selected');

  const current = parseInt(event.currentTarget.id);

  const selectedCard = countriesList.find(
    (eachCardObj) => eachCardObj.id === current
  );

  //Busco el problema y era que una era string y otra number, uso typeof, por eso creo una variable donde recoger el nuevo valor (en nº) para comparar

  const cardFavouriteIndex = favouriteCountries.findIndex(
    (eachCardObj) => eachCardObj.id === current
  );

  //Si no está en favoritos, haz el push
  if (cardFavouriteIndex === -1) {
    favouriteCountries.push(selectedCard);
  } else {
    //añado la opción de que si el usuario vuelve a hacer click en el listado a una tarjeta favorita, también la quite de favoritos (no sólo clickando en la x de favoritas)
    favouriteCountries.splice(cardFavouriteIndex, 1);
    event.currentTarget.classList.remove('selected');
  }
  //guardo el listado de favoritas en localStorage, con las actualizaciones del if/else
  localStorage.setItem('favourites', JSON.stringify(favouriteCountries));

  renderFavCountries();
}

//Función que crea un bucle para recorrer los elementos del array generado con QSA y así nos permite aplicarle el EVENTLISTENER a cada tarjeta del listado general
function cardListeners() {
  const allCountryCards = document.querySelectorAll('.js-card');
  for (const eachCard of allCountryCards) {
    eachCard.addEventListener('click', handleClickCard);
  }
}
