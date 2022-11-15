'use strict';

//Función manejadora del botón de reset, que borra los favoritos de la web y del localStorage y hace desaparecer al propio botón

function handleResetButton() {
  favCardsList.innerHTML = '';
  favouriteCharacters = [];
  localStorage.setItem('favourites', favouriteCharacters);
  const allCharacterCards = document.querySelectorAll('.js-card');
  for (const eachCard of allCharacterCards) {
    eachCard.classList.remove('selected');
  }
}

resetButton.addEventListener('click', handleResetButton);
