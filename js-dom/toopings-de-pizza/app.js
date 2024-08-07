//Seleccionar elementos por ID -> getElementById() (Único identificador)
const titulo = document.getElementById('titulo');

//Seleccionar elementos por CLASE -> getElementsByClassName() (Collection)
const toppings = document.getElementsByClassName('topping');

//Seleccionar elementos por ETIQUETA HTML -> getElementsByTagName() (Collection)
const misToppings = document.getElementsByTagName('li');

//Seleccionar elementos por CLASE CSS -> querySelector(), querySelectorAll() -> Moderno
const primerToppingNaranja = document.querySelector('ul li:not(.fondo-marron');

//querySelectorAll() (NodeList) -> Moderno
const toppingsNaranja = document.querySelectorAll('.topping.fondo-naranja');

//ASIGNAR ESTILOS EN JS
const primerTopping = document.querySelector('.topping');
primerTopping.style.backgroundColor = 'blue';
primerTopping.style.color = '#6dff00';
primerTopping.style.textTransform = 'uppercase';

// TEXTO EN EL DOM

//Acceder al Texto
const listaDeToppings = document.getElementById('lista-toppings');
//innerText -> Texto interno
console.log('> innerText');
console.log(listaDeToppings.innerText);
//textContent -> Contenido del texto
console.log('> textContent');
console.log(listaDeToppings.textContent);
//innerHTML -> Escribir código HTML
console.log('> innerHTML');
console.log(listaDeToppings.innerHTML);

//MODIFICAR EL TEXTO

//innerText -> Obtiene el texto del DOM y modificarlo
const titulo2 = document.getElementById('titulo');
titulo2.innerText = 'Mis toppings favoritos!';

//getElementsByTagsName -> Modifica los atributos de un elemento 🟨
const enlace = document.getElementsByTagName('a');
