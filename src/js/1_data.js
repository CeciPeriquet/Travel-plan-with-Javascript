'use strict';

//RECOJO DATOS DE LA API. Vuelvo a la primera versión de la función con fetch, porque del localStorage sólo quiero las favoritas, y había guardado todas
function getData() {
  fetch('https://breakingbadapi.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
      charactersList = data;
      renderCharactersList();
    });
}

//Al abrir la página, quiero los datos de la API
getData();

//y mis favoritas guardadas en localStorage
const favouritesInLocalSt = JSON.parse(localStorage.getItem('favourites'));

if (favouritesInLocalSt !== null) {
  favouriteCharacters = favouritesInLocalSt;
  renderFavCharacters();
}

//Si hay algún favorito, el botón de render aparece (si no, no)
if (favCardsList.innerHTML !== '') {
  const resetButtonElement = document.createElement('button');
  const resetButtonText = document.createTextNode('reset');
  resetButtonElement.appendChild(resetButtonText);
  resetButtonElement.classList.add('reset-button', 'js-reset-btn');
  favCardsSection.appendChild(resetButtonElement);

  const resetButton = document.querySelector('.js-reset-btn');

  //Función manejadora del botón de reset, que borra los favoritos de la web y del localStorage y hace desaparecer al propio botón

  function handleResetButton() {
    favCardsList.innerHTML = '';
    localStorage.removeItem('favourites');
    favCardsSection.removeChild(resetButtonElement);
  }

  resetButton.addEventListener('click', handleResetButton);
}
