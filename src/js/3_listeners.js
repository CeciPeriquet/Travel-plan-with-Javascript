'use strict';

//Función que crea un bucle para recorrer los elementos del array generado con QSA y así nos permite aplicarle el EVENTLISTENER a cada tarjeta del listado general
function cardListeners() {
  const allCharacterCards = document.querySelectorAll('.js-card');
  for (const eachCard of allCharacterCards) {
    eachCard.addEventListener('click', handleClickCard);
  }
}

// Función para buscar los obj seleccionados y generar un nuevo array con ellos
function handleClickCard(event) {
  //Recupero la línea de código que me pintaba la tarjeta en el listado general (ahora la quiero pintada en ambos listados)
  event.currentTarget.classList.add('selected');
  const current = parseInt(event.currentTarget.id);

  const selectedCard = charactersList.find(
    (eachCardObj) => eachCardObj.char_id === current
  );
  //Busco el problema y era que una era string y otra number, uso typeof, por eso creo una variable donde recoger el nuevo valor (en nº) para comparar

  const cardFavouriteIndex = favouriteCharacters.findIndex(
    (eachCardObj) => eachCardObj.char_id === current
  );

  //Si no está en favoritos, haz el push (cambio condicional para que ya no la elimine desde el listado general, sino desde favoritos, en otra parte del código)
  if (cardFavouriteIndex === -1) {
    favouriteCharacters.push(selectedCard);
  } else {
    //añado la opción de que si el usuario vuelve a hacer click en el listado a una tarjeta favorita, también la quite de favoritos (no sólo clickando en la x de favoritas)
    favouriteCharacters.splice(cardFavouriteIndex, 1);
    event.currentTarget.classList.remove('selected');
  }
  //guardo el listado de favoritas en localStorage, con las actualizaciones del if/if else
  localStorage.setItem('favourites', JSON.stringify(favouriteCharacters));
  renderFavCharacters();
}
