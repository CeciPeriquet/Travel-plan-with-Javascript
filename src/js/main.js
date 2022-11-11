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
function renderCharactersList (card) {
    
    for (const card of characters) {
        cardsList.innerHTML = renderCards(card);
        console.log(charactersList);
    }
  }

//Función para pintar la tarjeta en sí, con sus elementos de html (aún no funciona)
function renderCards(character) {
    
    const card = `<li class="cards-list-item">
    <article class="card">
      <img src="${character.img}" alt="" class="card-img" />
      <h2 class="card-name">${character.name}</h2>
      <p class="card-status">${character.status}</p>
    </article>
  </li>;`
    return card;
}


//Pido los datos a la API mediante Fetch (compruebo que me genera un array de objetos)
fetch ('https://breakingbadapi.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        charactersList = data.results;
        console.log(charactersList);
        /* renderCharactersList (data.results); */

    })

function handleSearch (){

}

//EVENTOS

//Evento para cuando quiera escuchar al botón (aún no)
searchBtn.addEventListener('click', handleSearch);
