# Evaluación Módulo 2 (Javascript)

## Cecilia Periquet

Hi there, this was my final evaluation exercise from the second module of Adalab Web Development Bootcamp, with JavaScript (ES6-VANILLA). As you can see, I also built it with HTML and SASS.

## Tecnologies

This repo uses the **Starter Kit de Adalab** (reason why I could use Sass with partials & nesting, and also JavaScript partials so I could have a better organized and cleaner code).
At the end of this document you'll find the instructions to use it and have a better understanding of it (for example, you'll need to have [Node JS](https://nodejs.org/) installed).

## Statement

At the beginning it was about Breaking Bad, but I've recently change the whole theme and API, in order to have different exercisses from my coleagues.

We had to call this [API](https://breakingbadapi.com/) and show a list of characters, with their name and status (dead or alive). I just changed it to a list of countries you may want to visit, using this other [API](https://restcountries.com/) and showing the flag, the country name and also the continent (well, I also changed the whole project because that aAPI it's not working anymore and I used a json file for a while, but I prefered to show a real fetch).

When you click on a card, it changes styles and appears a new column with your favourite countries (the ones you want to visit) and also new information about them, like their capital. This favourite list can be saved in **LocalStorage** so no problem if you refresh the browser.

You can also look for a country in the top form, no matter if you only uses lowercase in the input box, it'll find it.

## Bonus

I created a **reset** button in order to delete all your favourite countries in case you change your mind, it's also delete them from LocalStorage. You can also delete them one by one by using the **little cross icon** that appears on the favourite cards (that by the way it's also a bonus).

I decided to not show the countries you want to visit column nor the reset button until the user has selected any country.

As you can see, the cards and its tags, atributes, classes...are generated manipulating the DOM with JavaScript.

You probably know how to do it quicker, better and with less amount of code, but I think it's not a bad exercisse for a beginner in JS.

Hope you like it and please test it, select your favourite countries and send me any feedback you have!

## Adalab web starter kit

Starter Kit creado en **node y gulp**.

Este Kit incluye un motor de plantillas HTML, el preprocesador SASS y un servidor local y muchas cosas más. El Kit nos ayuda a trabajar más cómodamente, nos automatiza tareas.

En el Kit hay 3 tipos de ficheros y carpetas:

- Los ficheros que están sueltos en la raíz del repositorio, como gulpfile.js, package.json... Son la configuración del proyecto y no necesitamos modificarlos.
- La carpeta `src/`: son los ficheros de nuestra página web, como HTML, CSS, JS...
- Las carpetas `public/` y `docs/`, que son generadas automáticamente cuando arrancamos el proyecto. El Kit lee los ficheros que hay dentro de `src/`, los procesa y los genera dentro de `public/` y `docs/`.

## Guía de inicio rápido

> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/) para trabajar con este Starter Kit:

### Pasos a seguir cada vez que queremos arrancar un proyecto desde cero:

1. **Crea tu propio repositorio.**
1. Descarga este **Starter kit desde GitHub**.
   - No recomendamos que clones este repo ya que no podrás añadir commits.
1. **Copia todos los ficheros** de este Starter kit en la carpeta raíz de tu repositorio.
   - Recuerda que debes copiar **también los ficheros ocultos**.
   - Si has decidido clonar este repo, no debes copiar la carpeta `.git`. Si lo haces estarás machacando tu propio repositorio.
1. **Abre una terminal** en la carpeta raíz de tu repositorio.
1. **Instala las dependencias** locales ejecutando en la terminal el comando:

```bash
npm install
```

### Pasos para arrancar el proyecto:

Una vez hemos instalado las dependencias, vamos a arrancar el proyecto. **El proyecto hay que arrancarlo cada vez que te pongas a programar.** Para ello ejecuta el comando:

```bash
npm start
```

Este comando:

- **Abre una ventana de Chrome y muestra tu página web**, al igual que hace el plugin de VS Code Live Server (Go live).
- También **observa** todos los ficheros que hay dentro de la carpeta `src/`, para que cada vez que modifiques un fichero **refresca tu página en Chrome**.
- También **procesa los ficheros** HTML, SASS / CSS y JS y los **genera y guarda en la carpeta `public/`**. Por ejemplo:
  - Convierte los ficheros SASS en CSS.
  - Combina los diferentes ficheros de HTML y los agrupa en uno o varios ficheros HTML.

Después de ejecutar `npm start` ya puedes empezar a editar todos los ficheros que están dentro de la carpeta `src/` y programar cómodamente.
