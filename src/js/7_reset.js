'use strict';

//Función manejadora del botón de reset, que borra los favoritos de la web y del localStorage y hace desaparecer al propio botón

function handleResetButton() {
  favCardsList.innerHTML = '';
  localStorage.removeItem('favourites');
  resetButton.classList.add('hidden');
}

resetButton.addEventListener('click', handleResetButton);
