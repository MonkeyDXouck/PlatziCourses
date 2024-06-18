// El objeto global en un entorno o lenguaje proporciona funciones y variables propias e integradas
// Dependiendo la plataforma, este objeto global tendrá un nombre diferente
// navegador = window - Node.js = global - webworker = selft
// Para estandarizar el objeto global se creó globalThis

console.log(window) // Navegador
console.log(global) // Node.js
console.log(selft) // webworker
console.log(globalThis) //standar

// En el navegador
console.log(window === globalThis); // true

// En Node.js
console.log(global === globalThis ); // true