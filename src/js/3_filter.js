'use strict';

//Función para FILTRAR según lo que se escriba en el input (una vez dado al botón)
function filterCards() {
  const searchedCharacter = searchInput.value.toLowerCase();
  cardsList.innerHTML = '';

  const filteredCharacters = charactersList.filter((character) =>
    character.name.toLowerCase().includes(searchedCharacter)
  );

  for (const character of filteredCharacters) {
    const filteredCard = renderCards(character);
    cardsList.innerHTML += filteredCard;
  }
}

//Función manejadora del botón de buscar, que nos lleva a la función de filtrado
function handleSearch(event) {
  event.preventDefault();
  filterCards();
}

//Evento para escuchar al botón de buscar
searchBtn.addEventListener('click', handleSearch);
