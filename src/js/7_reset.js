'use strict';

//Función para qeu el botón de reset aparezca sólo cuando hay favoritos
function paintReset() {
  if (favouriteCharacters.length !== 0) {
    resetButton.classList.remove('hidden');
  } else {
    resetButton.classList.add('hidden');
  }

  function handleResetButton() {
    favCardsList.innerHTML = '';
    favouriteCharacters = [];
    localStorage.setItem('favourites', favouriteCharacters);
    resetButton.classList.add('hidden');
    favsSection.classList.add('hidden');
    const allCharacterCards = document.querySelectorAll('.js-card');
    for (const eachCard of allCharacterCards) {
      eachCard.classList.remove('selected');
    }
  }

  resetButton.addEventListener('click', handleResetButton);
}
