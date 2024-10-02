// Almacenando el elemento cuyo id es cardContainer en una variable constante llamada cardContainer, realizar las siguientes acciones:
const cardContainer = document.getElementById('cardContainer');
// 1) Eliminar el primer elemento hijo desde el padre.
cardContainer.removeChild(cardContainer.children[0]);
// 2) Eliminar, desde el propio elemento, el elemento cuya clase es "cards redClass".
const cardsRedClass = cardContainer.children[0];
cardsRedClass.remove();
// 3) Crear un elemento h1 con vuestro nombre.
const h1 = document.createElement("h1");
h1.textContent="Luna García-Arcicóllar Merino";
console.log(h1);
// 4) Crear un elemento enlace con texto "Vedruna" y cuyo href sea la pagina del vedruna.
const enlace = document.createElement("A");
enlace.textContent="Vedruna";
enlace.href="https://fpvedrunasevilla.org/";
enlace.target = "_blank";
console.log(enlace);
// 5) Crear un elemento boton cuyo id sea "botonJoker" y su texto sea "boton".
const button = document.createElement("button");
button.id="botonJoker";
button.textContent="boton";
console.log(button);
// 6) Crear un elemento div cuya clase sea "cards greenClass".
const div = document.createElement("div");
div.className = ("cardsGreenClass");
// 7) Añadir al elemento div creado anteriormente los h1, enlace y boton creados anteriormente.
div.appendChild(h1);
div.appendChild(enlace);
div.appendChild(button);
console.log(div);
// 8) Añadir a cardContainer el div del apartado anterior.
cardContainer.appendChild(div);