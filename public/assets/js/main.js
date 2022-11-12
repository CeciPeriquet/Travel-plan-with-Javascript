"use strict";

//CONSTANTES GLOBALES

//Traigo los elementos de html y los guardo en variables
const searchInput = document.querySelector(".js-input");
const searchBtn = document.querySelector(".js-btn");
const cardsList = document.querySelector(".js-list");
const favCardsList = document.querySelector(".js-fav-list");

// Declaro un array vacío donde luego irán los datos de la API
let charactersList = [];

//Array de favoritos (también vacío) a partir de las tarjetas seleccionadas
let favouriteCharacters = [];

//FUNCIONES

//Mejoro la función para obtener los datos al abrir la página(localStorage/API)
function getData(){

const charactersListStored = JSON.parse(localStorage.getItem("charactersList"));

if (charactersListStored !== null) {
  //Si existe el listado de personajes en el localStorage, toma los datos de ahí y píntalos
  charactersList = charactersListStored;
  renderCharactersList();
} else {
  //Si no existe el listado de personajes en el localStorage, haz la petición al servidor y luego guarda los datos en localStorage
  fetch("https://breakingbadapi.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      charactersList = data;
      localStorage.setItem("charactersList", JSON.stringify(charactersList));
      renderCharactersList();
    })
}
}

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
  let characterCardList = "";
  for (const card of charactersList) {
    characterCardList += renderCards(card);
  }
  cardsList.innerHTML = characterCardList;
  cardListeners();
}

//Función para pintar la tarjeta en sí, esta vez para los personajes favoritos
function renderFavCard(favCharacter) {
  let favCard = `<li class="cards-list-item">
    <article class="card js-card selected" id="${favCharacter.char_id}">
      <img src="${favCharacter.img}" alt="Picture of ${favCharacter.name}" title="${favCharacter.name}" class="card-img" />
      <h3 class="card-name">${favCharacter.name}</h3>
      <p class="card-status">${favCharacter.status}</p>
    </article>
  </li>`;

  return favCard;
}

//Función para pintar el listado de tarjetas de mis favoritos
function renderFavCharacters() {
  let favCharacterCardList = "";
  for (const card of favouriteCharacters) {
    favCharacterCardList += renderFavCard(card);
  }
  favCardsList.innerHTML = favCharacterCardList;
}



//Función para filtrar según lo que se escriba en el input (una vez dado al botón)
function filterCards() {
  const searchedCharacter = searchInput.value.toLowerCase();
  cardsList.innerHTML = "";

  const filteredCharacters = charactersList
    .filter((character) =>
      character.name.toLowerCase().includes(searchedCharacter)
    )

  for (const character of filteredCharacters) {
     const filteredCard = renderCards(character);
     cardsList.innerHTML += filteredCard;
  }
}


//EVENTOS

//Función que crea un bucle para recorrer los elementos del array generado con QSA y así nos permite aplicarle el eventListener a cada tarjeta
function cardListeners() {
  const allCharacterCards = document.querySelectorAll(".js-card");
  for (const eachCard of allCharacterCards) {
    eachCard.addEventListener("click", handleClickCard);
  }
}

// Función para buscar los obj seleccionados y generar un nuevo array con ellos
function handleClickCard(event) {
  event.currentTarget.classList.toggle("selected");
  const current = parseInt(event.currentTarget.id);

  const selectedCard = charactersList.find(
    (eachCardObj) => eachCardObj.char_id === current
  );
  //Busco el problema y era que una era string y otra number, uso typeof, por eso creo una variable donde recoger el nuevo valor (en nº) para comparar

  const cardFavouriteIndex = favouriteCharacters.findIndex(
    (eachCardObj) => eachCardObj.char_id === current
  );

  //Si no está en favoritos, haz el push, si ya está, elimínala
  if (cardFavouriteIndex === -1) {
    favouriteCharacters.push(selectedCard);
  } else {
    favouriteCharacters.splice(cardFavouriteIndex, 1);
  }

  renderFavCharacters();
}

//Función manejadora del botón de buscar, que nos lleva a la función de filtrado
function handleSearch(event) {
  event.preventDefault();
  filterCards();
}

//Evento para escuchar al botón de buscar
searchBtn.addEventListener("click", handleSearch);

//Al abrir la página, quiero los datos de la API (añado una nueva función para que guarde los datos en localStorage y a futuro sean los que utilice en lugar del fetch)
getData();


//# sourceMappingURL=main.js.map
