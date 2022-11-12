"use strict";

//CONSTANTES

//Me traigo los elementos de html y los meto en variables
const searchInput = document.querySelector(".js-input");
const searchBtn = document.querySelector(".js-btn");
const cardsList = document.querySelector(".js-list");
const favCardsList = document.querySelector(".js-fav-list");

// Declaro un array vacío donde luego meteré los datos de la API
let charactersList = [];

let favouriteCharacters = [];

//FUNCIONES

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

//Función para pintar las tarjetas de cada personaje
function renderCharactersList () {
    let characterCardList ='';
    for (const card of charactersList) {
        characterCardList += renderCards(card);
    }
    cardsList.innerHTML = characterCardList;
    cardListeners ();
    
  }

//Función para pintar la tarjeta en sí, esta vez para los personajes favoritos
function renderFavCard(favCharacter) {
    let favCard = `<li class="cards-list-item">
    <article class="card js-card" id="${favCharacter.char_id}">
      <img src="${favCharacter.img}" alt="Picture of ${favCharacter.name}" title="${favCharacter.name}" class="card-img" />
      <h3 class="card-name">${favCharacter.name}</h3>
      <p class="card-status">${favCharacter.status}</p>
    </article>
  </li>`;
    console.log(favCard);
    console.log(favCharacter.name);
  return favCard;
}

//Función para pintar las tarjetas de mis favoritos

function renderFavCharacters(){
let favCharacterCardList = "";
  for (const card of favouriteCharacters) {
    favCharacterCardList += renderFavCard(card);
  }
  favCardsList.innerHTML = favCharacterCardList;
  console.log(favCardsList);
}




// Función para buscar los obj seleccionados y generar un nuevo array con ellos
function handleClickCard(event) {
  event.currentTarget.classList.toggle("selected");
  const current = parseInt(event.currentTarget.id);

  const selectedCard = charactersList.find(
    (eachCardObj) => eachCardObj.char_id === current
    //Busco el problema y era que una era string y otra number, uso typeof, por eso creo una variable donde recoger el nuevo valor (en nº) para comparar
  );

  console.log(selectedCard);
  favouriteCharacters.push(selectedCard);
  console.log(favouriteCharacters);
  renderFavCharacters();
}

//Función que crea un bucle para recorrer los elementos del array generado con QSA y así nos permite aplicarle el eventListener
function cardListeners() {
  const allCharacterCards = document.querySelectorAll(".js-card");
  for (const eachCard of allCharacterCards) {
    eachCard.addEventListener("click", handleClickCard);
  }
}

//Pido los datos a la API mediante Fetch (compruebo que me genera un array de objetos)
function getData() {
  fetch("https://breakingbadapi.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      charactersList = data;
      //no me estaba leyendo bien las funciones porque le pedía data.results y en este caso era solo data
      renderCharactersList();
    });
}

function handleSearch() {}

//EVENTOS

//Evento para cuando quiera escuchar al botón (aún no)
searchBtn.addEventListener("click", handleSearch);

//Al abrir la página, quiero los datos del API
getData();
