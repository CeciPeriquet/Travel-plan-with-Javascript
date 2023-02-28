'use strict';

//CONSTANTES GLOBALES

//Traigo los elementos de html y los guardo en variables
const searchInput = document.querySelector('.js-input');
const searchBtn = document.querySelector('.js-btn');
const cardsList = document.querySelector('.js-list');
const favCardsList = document.querySelector('.js-fav-list');
const resetButton = document.querySelector('.js-reset-btn');
const favsSection = document.querySelector('.js-fav-cards');

// Declaro un array vacío donde luego irán los datos de la API
let countriesList = [];

//Array de favoritos (también vacío) a partir de las tarjetas seleccionadas
let favouriteCountries = [];

'use strict';

//RECOJO DATOS DE LA API. Vuelvo a la primera versión de la función con fetch, porque del localStorage sólo quiero las favoritas, y había guardado todas
function getData() {
  fetch('https://restcountries.com/v3.1/all/')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data
        .map((country) => {
          return {
            name: country.name.common,
            id: Math.floor(Math.random() * 500),
            img: country.flags.png,
            alt: country.flags.alt,
            continent: country.continents[0],
            capital: country.capital,
            currencies: country.currencies,
          };
        })
        .sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
      console.log(cleanData);

      countriesList = cleanData;
      renderCountriesList();
    });
}

function getLocalFav() {
  const favouritesInLocalSt = JSON.parse(localStorage.getItem('favourites'));

  if (favouritesInLocalSt !== null) {
    favouriteCountries = favouritesInLocalSt;
    renderFavCountries();
  }
}

//Al abrir la página, quiero los datos de la API
getData();
//y mis favoritas guardadas en localStorage
getLocalFav();

'use strict';

//Función para pintar la tarjeta en sí, con sus elementos de html
function renderCards(country) {
  //Cambio la función para renderizar las tarjetas con DOM avanzado

  const liElement = document.createElement('li');
  liElement.classList.add('cards-list-item');

  const articleElement = document.createElement('article');

  const cardFavouriteIndex = favouriteCountries.findIndex(
    (eachCardObj) => eachCardObj.id === country.id
  );

  if (cardFavouriteIndex !== -1) {
    articleElement.classList.add('card', 'js-fav-card', 'selected');
  } else {
    articleElement.classList.add('card', 'js-card');
  }

  articleElement.setAttribute('id', country.id);

  const imgElem = document.createElement('img');
  imgElem.setAttribute('src', country.img);
  imgElem.setAttribute('alt', country.alt);
  imgElem.setAttribute('title', country.name);
  imgElem.classList.add('card-img');

  const nameElement = document.createElement('h3');
  nameElement.classList.add('card-name');
  const textNameElement = document.createTextNode(country.name);

  const continentElement = document.createElement('p');
  continentElement.classList.add('card-continent');
  const textContinentElement = document.createTextNode(country.continent);

  nameElement.appendChild(textNameElement);
  continentElement.appendChild(textContinentElement);

  articleElement.appendChild(imgElem);
  articleElement.appendChild(nameElement);
  articleElement.appendChild(continentElement);

  liElement.appendChild(articleElement);

  const card = liElement;

  return card;
}

//Función para pintar la lista completa de tarjetas de personajes
function renderCountriesList() {
  cardsList.innerHTML = '';
  for (const card of countriesList) {
    cardsList.appendChild(renderCards(card));
  }

  cardListeners();
}

'use strict';

// Función para buscar los obj seleccionados y generar un nuevo array con ellos
function handleClickCard(event) {
  //Recupero la línea de código que me pintaba la tarjeta en el listado general (ahora la quiero pintada en ambos listados)
  event.currentTarget.classList.add('selected');

  const current = parseInt(event.currentTarget.id);

  const selectedCard = countriesList.find(
    (eachCardObj) => eachCardObj.id === current
  );

  //Busco el problema y era que una era string y otra number, uso typeof, por eso creo una variable donde recoger el nuevo valor (en nº) para comparar

  const cardFavouriteIndex = favouriteCountries.findIndex(
    (eachCardObj) => eachCardObj.id === current
  );

  //Si no está en favoritos, haz el push
  if (cardFavouriteIndex === -1) {
    favouriteCountries.push(selectedCard);
  } else {
    //añado la opción de que si el usuario vuelve a hacer click en el listado a una tarjeta favorita, también la quite de favoritos (no sólo clickando en la x de favoritas)
    favouriteCountries.splice(cardFavouriteIndex, 1);
    event.currentTarget.classList.remove('selected');
  }
  //guardo el listado de favoritas en localStorage, con las actualizaciones del if/else
  localStorage.setItem('favourites', JSON.stringify(favouriteCountries));

  renderFavCountries();
}

//Función que crea un bucle para recorrer los elementos del array generado con QSA y así nos permite aplicarle el EVENTLISTENER a cada tarjeta del listado general
function cardListeners() {
  const allCountryCards = document.querySelectorAll('.js-card');
  for (const eachCard of allCountryCards) {
    eachCard.addEventListener('click', handleClickCard);
  }
}

'use strict';

//Función para pintar la tarjeta en sí, esta vez para los personajes favoritos
function renderFavCard(favCountry) {
  //Cambio la función para renderizar las tarjetas de favoritos con DOM avanzado

  const liElement = document.createElement('li');
  liElement.classList.add('cards-list-item');

  const articleElement = document.createElement('article');
  articleElement.classList.add('favcard', 'js-fav-card', 'selected');
  articleElement.setAttribute('id', favCountry.id);

  const crossElement = document.createElement('i');
  crossElement.classList.add('fa-solid', 'fa-square-xmark');

  const imgElem = document.createElement('img');
  imgElem.setAttribute('src', favCountry.img);
  imgElem.setAttribute('alt', favCountry.alt);
  imgElem.setAttribute('title', favCountry.name);
  imgElem.classList.add('card-img');

  const nameElement = document.createElement('h3');
  nameElement.classList.add('card-name');
  const textNameElement = document.createTextNode(favCountry.name);

  const continentElement = document.createElement('p');
  continentElement.classList.add('card-continent', 'favcard-text');
  const textContinentElement = document.createTextNode(
    `Continent: ${favCountry.continent}`
  );

  const capitalElement = document.createElement('p');
  capitalElement.classList.add('card-capital', 'favcard-text');
  const textCapitalElement = document.createTextNode(
    `Capital: ${favCountry.capital[0]}`
  );

  nameElement.appendChild(textNameElement);
  continentElement.appendChild(textContinentElement);
  capitalElement.appendChild(textCapitalElement);

  articleElement.appendChild(crossElement);
  articleElement.appendChild(imgElem);
  articleElement.appendChild(nameElement);
  articleElement.appendChild(continentElement);
  articleElement.appendChild(capitalElement);

  liElement.appendChild(articleElement);

  const favCard = liElement;
  return favCard;
}

function paintFavSection() {
  if (favouriteCountries.length !== 0) {
    favsSection.classList.remove('hidden');
  } else {
    favsSection.classList.add('hidden');
  }
  //Llamo a la función para pintar el reset
  paintReset();
}

//Función para pintar el listado de tarjetas de mis favoritos, ahora con DOM
function renderFavCountries() {
  favCardsList.innerHTML = '';

  for (const favCard of favouriteCountries) {
    favCardsList.appendChild(renderFavCard(favCard));
  }
  //Si tenemos favoritos en el listado, llamo a la función para pintar la sección de fav
  paintFavSection();
  favCardListeners();
}

'use strict';

//Función para FILTRAR según lo que se escriba en el input (una vez dado al botón)
function filterCards() {
  let searchedCountry = searchInput.value.toLowerCase();
  cardsList.innerHTML = '';

  const filteredCountries = countriesList.filter((country) =>
    country.name.toLowerCase().includes(searchedCountry)
  );

  for (const country of filteredCountries) {
    cardsList.appendChild(renderCards(country));
  }

  if (searchedCountry === '') {
    renderCountriesList();
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
    renderCountriesList();
  }
}

//Evento para escuchar al botón de buscar
searchBtn.addEventListener('click', handleSearch);

//Nuevo evento para escuchar al input y que me vuelva a enseñar todas las tarjetas
searchInput.addEventListener('input', handleResetInput);

'use strict';

//Función para eliminar la tarjeta de favoritos, al clickarla
function handleClickFavCard(event) {
  const current = parseInt(event.currentTarget.id);
  let cardFromWholeList = '';

  const cardFavouriteIndex = favouriteCountries.findIndex(
    (eachCardObj) => eachCardObj.id === current
  );

  favouriteCountries.splice(cardFavouriteIndex, 1);
  const findInWholeList = countriesList.find(
    (eachCardObj) => eachCardObj.id === current
  );

  cardFromWholeList = renderCards(findInWholeList);
  cardFromWholeList.classList.remove('selected');

  renderFavCountries();
  renderCountriesList();

  localStorage.setItem('favourites', JSON.stringify(favouriteCountries));
}

//Bucle que recorre el array, esta vez para añadir listeners a las tarjetas favoritas
function favCardListeners() {
  const favCountriesCards = document.querySelectorAll('.js-fav-card');

  for (const eachCard of favCountriesCards) {
    eachCard.addEventListener('click', handleClickFavCard);
  }
}

'use strict';

//Función para qeu el botón de reset aparezca sólo cuando hay favoritos
function paintReset() {
  if (favouriteCountries.length !== 0) {
    resetButton.classList.remove('hidden');
  } else {
    resetButton.classList.add('hidden');
  }

  function handleResetButton() {
    favCardsList.innerHTML = '';
    favouriteCountries = [];
    localStorage.removeItem('favourites');
    resetButton.classList.add('hidden');
    favsSection.classList.add('hidden');
    const allCountriesCards = document.querySelectorAll('.js-card');
    for (const eachCard of allCountriesCards) {
      eachCard.classList.remove('selected');
    }
  }

  resetButton.addEventListener('click', handleResetButton);
}

//# sourceMappingURL=main.js.map
