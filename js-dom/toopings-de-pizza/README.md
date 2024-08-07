# ¿QUÉ ES EL DOM?

- <html> Root Node (Nodo raíz): Nodo ubicado en la parte superior del árbol. En HTML, es <html> <head> (<title>) <body> (<h1> <p>)

- <html> (<head> <body>) Sibling Nodes (Nodos hermanos): Nodos ubicados en el mismo nivel de la jerarquía del DOM y comparten el mismo nodo padre.

- <head> Parent Node (Nodo padre): Nodo que contiene a otro nodo en la jerarquía del DOM. <title>

- <body> Parent Node (Nodo padre): Nodo que contiene a otro nodo en la jerarquía del DOM. <h1> <p> Child Node (Nodo hijo): Nodo contenido `directamente` dentro de otro nodo.

- <body> <div> (<h1> <a>) <p> Descendant Nodo (Nodo descendiente): Nodo contenido dentro de otro nodo en la jerarquía del DOM (directa o indirectamente).

# NODO VS ELEMENTO

-- El concepto de nodo es más amplio que el concepto de elemento HTML como `elementos`
-- Un nodo puede ser un `elemento HTML`, pero también puede ser `texto o comentarios en el documento`.

- Nodos en el DOM -> Elementos HTML

# CAMBIAR EL DOM

-- Realizar cambios en el DOM fumciona de manera temporal, es muy útil para hacer modificaciones.

-- Escoger la etiqueta para modificar, luego presiona clic derecho con el mouse y selecciona la opción `EDITAR COMO HTML`.

# NODOS QUE NO SON ELEMENTOS

- <!--  Comentarios ->  -->

# SELECCIONAR ELEMENTOS DEL DOM

- Seleccionar elementos por ID -> getElementById() (Único identificador)
- Seleccionar elementos por CLASE -> getElementsByClassName() (Collection)
- Seleccionar elementos por ETIQUETA HTML -> getElementsByTagName() (Collection)
- Seleccionar elementos por CLASE CSS -> querySelector(), querySelectorAll() -> Moderno
- querySelectorAll() (NodeList) -> Moderno

```javascript
const titulo = document.getElementById('titulo');
const toppings = document.getElementsByClassName('topping');
const misToppings = document.getElementsByTagName('li');
const primerToppingNaranja = document.querySelector('ul li:not(.fondo-marron');
const toppingsNaranja = document.querySelectorAll('.topping.fondo-naranja');
```

# ASIGNAR ESTILOS CON JAVASCRIPT

```javascript
const primerTopping = document.querySelector('.topping');
primerTopping.style.backgroundColor = 'blue';
primerTopping.style.color = '#6dff00';
primerTopping.style.textTransform = 'uppercase';
```

# TEXTO EN EL DOM

--- Acceder al Texto:

- innerText -> Texto interno
- textContent -> Contenido del texto
- innerHTML -> Escribir código HTML

```javascript
const listaDeToppings = document.getElementById('lista-toppings');
console.log(listaDeToppings.innerText);
console.log(listaDeToppings.textContent);
console.log(listaDeToppings.innerHTML);
```

--- Modificar el Texto:

- innerText -> Obtiene el texto del DOM y modificarlo
- getElementsByTagsName -> Modifica los atributos de un elemento

```javascript
const titulo2 = document.getElementById('titulo');
titulo2.innerText = 'Mis toppings favoritos!';
```
