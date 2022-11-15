'use strict';

function paintReset() {
  resetButton.classList.remove('hidden');
  function handleResetButton() {
    favCardsList.innerHTML = '';
    favouriteCharacters = [];
    localStorage.setItem('favourites', favouriteCharacters);
    resetButton.classList.add('hidden');
    const allCharacterCards = document.querySelectorAll('.js-card');
    for (const eachCard of allCharacterCards) {
      eachCard.classList.remove('selected');
    }
  }

  resetButton.addEventListener('click', handleResetButton);
}
