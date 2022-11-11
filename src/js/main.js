'use strict';

//CONSTANTES

//Me traigo los elementos de html y los meto en variables
const searchInput = document.querySelector('.js-input');
const searchBtn = document.querySelector('.js-btn');
const cardsList = document.querySelector('.js-list');

// Declaro un array vacío donde luego meteré los datos de la API
let charactersList = [];


//FUNCIONES

//Función para pintar las tarjetas de cada personaje (aún no funciona)
function renderCharactersList () {
    let characterCardList ='';
    for (const card of charactersList) {
        characterCardList += renderCards(card);
    }
    cardsList.innerHTML = characterCardList;
  }

//Función para pintar la tarjeta en sí, con sus elementos de html (aún no funciona)
function renderCards(character) {
    
    let card = `<li class="cards-list-item">
    <article class="card">
      <img src="${character.img}" alt="" class="card-img" />
      <h2 class="card-name">${character.name}</h2>
      <p class="card-status">${character.status}</p>
    </article>
  </li>`;
    return card;
}


//Pido los datos a la API mediante Fetch (compruebo que me genera un array de objetos)
function getData () {
fetch ('https://breakingbadapi.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
        charactersList = data;
        //no me estaba leyendo bien las funciones porque le pedía data.results y en este caso era solo data
        renderCharactersList();
    })}

function handleSearch (){

}

//EVENTOS

//Evento para cuando quiera escuchar al botón (aún no)
searchBtn.addEventListener('click', handleSearch);

//Al abrir la página, quiero los datos del API
getData();