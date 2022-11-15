'use strict';

//Función para FILTRAR según lo que se escriba en el input (una vez dado al botón)
function filterCards() {
  let searchedCharacter = searchInput.value.toLowerCase();
  cardsList.innerHTML = '';

  const filteredCharacters = charactersList.filter((character) =>
    character.name.toLowerCase().includes(searchedCharacter)
  );

  for (const character of filteredCharacters) {
    cardsList.appendChild(renderCards(character));
  }

  if (searchedCharacter === '') {
    renderCharactersList();
  }
}

//Función manejadora del botón de buscar, que nos lleva a la función de filtrado
function handleSearch(event) {
  event.preventDefault();

  filterCards();
  //Añado de nuevo la función cardListeners porque si no no me dejaba marcar como favoritas los resultados de búsqueda
  cardListeners();
}

//Función manejadora del input, para que al borrar nos enseñe de nuevo todo el listado
function handleResetInput(event) {
  event.preventDefault();
  let inputData = searchInput.value.toLowerCase();
  if (inputData === '') {
    renderCharactersList();
  }
}

//Evento para escuchar al botón de buscar
searchBtn.addEventListener('click', handleSearch);

//Nuevo evento para escuchar al input y que me vuelva a enseñar todas las tarjetas
searchInput.addEventListener('input', handleResetInput);
