'use strict';

//Función para qeu el botón de reset aparezca sólo cuando hay favoritos
function paintReset() {
  if (favouriteCountries.length !== 0) {
    resetButton.classList.remove('hidden');
  } else {
    resetButton.classList.add('hidden');
  }

  function handleResetButton() {
    favCardsList.innerHTML = '';
    favouriteCountries = [];
    localStorage.removeItem('favourites');
    resetButton.classList.add('hidden');
    favsSection.classList.add('hidden');
    const allCountriesCards = document.querySelectorAll('.js-card');
    for (const eachCard of allCountriesCards) {
      eachCard.classList.remove('selected');
    }
  }

  resetButton.addEventListener('click', handleResetButton);
}
