'use strict';

const searchInput = document.querySelector('.js-input');
const searchBtn = document.querySelector('.js-btn');
const cardsList = document.querySelector('.js-list');

let charactersList = [];

function renderCharactersList (card) {
    
    for (const card of characters) {
        cardsList.innerHTML = renderCards(card);
        console.log(charactersList);
    }
  }

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



fetch ('https://breakingbadapi.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        charactersList = data.results;
        console.log(charactersList);
        renderCharactersList (data.results);

    })

function handleSearch (){

}

searchBtn.addEventListener('click', handleSearch);