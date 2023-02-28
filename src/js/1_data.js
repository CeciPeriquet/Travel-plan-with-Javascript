'use strict';

//RECOJO DATOS DE LA API. Vuelvo a la primera versión de la función con fetch, porque del localStorage sólo quiero las favoritas, y había guardado todas
function getData() {
  fetch('https://restcountries.com/v3.1/all/')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((country) => {
        return {
          name: country.name.common,
          id: Math.floor(Math.random() * 500),
          img: country.flags.png,
          alt: country.flags.alt,
          continent: country.continents[0],
          capital: country.capital,
          currencies: country.currencies,
        };
      });
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
