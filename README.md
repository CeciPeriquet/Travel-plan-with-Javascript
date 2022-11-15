# Evaluación Módulo 2 (Javascript)

## Cecilia Periquet

Hola, éste es mi ejercicio para la evaluación final del Módulo 2 del bootcamp de Web Development de Adalab, consistente en JavaScript (aunque, como verás, también he utilizado HTML y CSS para llevarlo a cabo).

## Tecnologías

Este repositorio utiliza el **Starter Kit de Adalab** (por eso he podido utilizar SASS con partials, así como partials de JavaScript, manteniendo mucho más limpio mi código).
Al final del todo encontrarás las instrucciones necesarias para usarlo y entenderlo mejor (ya que necesitas, por ejemplo, tener instalado [Node JS](https://nodejs.org/) para trabajar con este Starter Kit).

## Enunciado

El ejercicio pedía la realización de una web con un buscador de personajes de **Breaking Bad**, en el que se mostraran tarjetas con una fotografía, el nombre, y el estado (vivo o muerto).
Estos datos se recogen directamente de la siguiente [API](https://breakingbadapi.com/) y clickando en las tarjetas de personajes, puedes ir guardando un listado de favoritos, que quedará registrado también en el **LocalStorage** de manera que permanece en la página aunque se refresque.

También puedes buscar directamente a tus personajes usando el formulario y el botón corresponiente, y de ahí seleccionarlos como favoritos.

## Bonus

Los favoritos pueden borrarse tanto ckickando en el listado de favoritos, como en el listado normal, y todos ellos de golpe usando el botón de **reset** (que también los elimina del localStorage).

Tanto el botón de reset de los personajes favoritos, como el hecho de que los puedas cerrar desde todas partes, como que aparezcan en el listado de favoritos con una x sobre la que clickar... son todo parte del bonus. Igualmente la maquetación, que aunque prima JavaScript, siempre se agradece algo de CSS.

He optado por no mostrar el listado de favoritos ni el botón de reset hasta que la usuaria marca algún personaje como favorito.

![BreakingBad_cperiquet](https://user-images.githubusercontent.com/112966265/201921222-2797f043-1428-4e71-ae8e-bee39c29c8d2.png)

Posiblemente pensarás que podría estar mucho mejor, con un código más reducido, no tan repetitivo, pero si tenemos en cuenta que hace 3 semanas no sabía ni lo que era JavaScript... ni tan mal.

No dejes de ver el resultado en la web adjunta al repositorio y sobre todo ¡jugar con tus personajes favoritos de la serie!

![BreakingBad_cperiquet-favsection](https://user-images.githubusercontent.com/112966265/201921518-c6d97f87-604c-4936-9414-35c9e1167ad4.png)

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
