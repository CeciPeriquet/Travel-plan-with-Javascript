'use strict';

const searchInput = document.querySelector('.js-input');
const searchBtn = document.querySelector('.js-btn');
const cardsList = document.querySelector('.js-list');

let charactersList = [];

function renderCards(charactersList) {
    for (character of charactersList){
    const card = `<li class="cards-list-item">
    <article class="card">
      <img src="${character.img}" alt="" class="card-img" />
      <h2 class="card-name">${character.name}</h2>
      <p class="card-status">${character.status}</p>
    </article>
  </li>;`
    return card;
}}

function renderCharactersList (character){

}

fetch ('https://breakingbadapi.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        charactersList = data.results;
        console.log(charactersList);
        renderCards(charactersList);
    })

function handleSearch (){

}

searchBtn.addEventListener('click', handleSearch);
//# sourceMappingURL=main.js.map
