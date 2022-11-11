'use strict';

//CONSTANTES

//Me traigo los elementos de html y los meto en variables
const searchInput = document.querySelector('.js-input');
const searchBtn = document.querySelector('.js-btn');
const cardsList = document.querySelector('.js-list');


// Declaro un array vacío donde luego meteré los datos de la API
let charactersList = [];


//FUNCIONES

//Función para pintar la tarjeta en sí, con sus elementos de html
function renderCards(character) {
    
    let card = `<li class="cards-list-item">
    <article class="card js-card">
      <img src="${character.img}" alt="Picture of ${character.name}" title="${character.name}" class="card-img" />
      <h2 class="card-name">${character.name}</h2>
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


function handleClickCard (event){
    console.log('holi');
}

//Función que crea un bucle para recorrer los elementos del array generado con QSA y así nos permite aplicarle el eventListener
function cardListeners (){
    const allCharacterCards = document.querySelectorAll('.js-card');
    for (const eachCard of allCharacterCards) {
        eachCard.addEventListener('click', handleClickCard);
    }
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
//# sourceMappingURL=main.js.map
