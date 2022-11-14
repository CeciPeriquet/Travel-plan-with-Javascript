'use strict';

//CONSTANTES GLOBALES

//Traigo los elementos de html y los guardo en variables
const searchInput = document.querySelector('.js-input');
const searchBtn = document.querySelector('.js-btn');
const cardsList = document.querySelector('.js-list');
const favCardsList = document.querySelector('.js-fav-list');

// Declaro un array vacío donde luego irán los datos de la API
let charactersList = [];

//Array de favoritos (también vacío) a partir de las tarjetas seleccionadas
let favouriteCharacters = [];

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

'use strict';

//Función para pintar la tarjeta en sí, con sus elementos de html
function renderCards(character) {
  let card = `<li class="cards-list-item">
      <article class="card js-card" id="${character.char_id}">
        <img src="${character.img}" alt="Picture of ${character.name}" title="${character.name}" class="card-img" />
        <h3 class="card-name">${character.name}</h3>
        <p class="card-status">${character.status}</p>
      </article>
    </li>`;

  return card;
}

//Función para pintar la lista completa de tarjetas de cada personaje
function renderCharactersList() {
  let characterCardList = '';
  for (const card of charactersList) {
    characterCardList += renderCards(card);
  }
  cardsList.innerHTML = characterCardList;
  cardListeners();
}

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
  console.log('clicki');

  //Elimino la línea de código que me pintaba la tarjeta en el listado general, sólo la quiero pintada en favoritos
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
    console.log(favouriteCharacters);
    //guardo el listado de favoritas en localStorage
    localStorage.setItem('favourites', JSON.stringify(favouriteCharacters));
  }

  renderFavCharacters();
}

'use strict';

//Función para pintar la tarjeta en sí, esta vez para los personajes favoritos
function renderFavCard(favCharacter) {
  let favCard = `<li class='cards-list-item'>
      <article class='card js-fav-card selected' id='${favCharacter.char_id}'>
        <i class='fa-solid fa-square-xmark'></i>  
        <img src='${favCharacter.img}' alt='Picture of ${favCharacter.name}' title='${favCharacter.name}' class='card-img' />
        <h3 class='card-name'>${favCharacter.name}</h3>
        <p class='card-status'>${favCharacter.status}</p>
      </article>
    </li>`;

  return favCard;
}

//Función para pintar el listado de tarjetas de mis FAVORITOS
function renderFavCharacters() {
  let favCharacterCardList = '';
  for (const card of favouriteCharacters) {
    favCharacterCardList += renderFavCard(card);
  }
  favCardsList.innerHTML = favCharacterCardList;
  favCardListeners();
}

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
  //Añado de nuevo la función cardListeners porque si no no me dejaba marcar como favoritas los resultados de búsqueda
  cardListeners();
}

//Evento para escuchar al botón de buscar
searchBtn.addEventListener('click', handleSearch);

'use strict';

//Función para eliminar la tarjeta de favoritos, al clickarla
function handleClickFavCard(event) {
  const current = parseInt(event.currentTarget.id);
  const selectedCard = favouriteCharacters.find(
    (eachCardObj) => eachCardObj.char_id === current
  );

  const cardFavouriteIndex = favouriteCharacters.findIndex(
    (eachCardObj) => eachCardObj.char_id === current
  );
  if (cardFavouriteIndex !== -1) {
    favouriteCharacters.splice(cardFavouriteIndex, 1);
  }

  renderFavCharacters();
  localStorage.setItem('favourites', JSON.stringify(favouriteCharacters));
}

//Bucle que recorre el array, esta vez para añadir listeners a las tarjetas favoritas
function favCardListeners() {
  const favCharacterCards = document.querySelectorAll('.js-fav-card');

  for (const eachCard of favCharacterCards) {
    eachCard.addEventListener('click', handleClickFavCard);
  }
}

'use strict';

//# sourceMappingURL=main.js.map
