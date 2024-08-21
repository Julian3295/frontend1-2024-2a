// Declaración de variables y constantes
let variable = "Esto es una variable";
const CONSTANTE = "Esto es una constante";

// Funciones: Definición y uso de funciones
function miFuncion(parametro1, parametro2) {
    // Lógica de la función
    let resultado = parametro1 + parametro2;
    return resultado;
}

// Llamada a la función
let suma = miFuncion(3, 5);
console.log(suma);  // Imprime el resultado en la consola

// Estructuras de control: Condicionales
if (suma > 5) {
    console.log("La suma es mayor que 5");
} else {
    console.log("La suma es menor o igual a 5");
}

// Bucles: Bucle for
for (let i = 0; i < 5; i++) {
    console.log("Iteración número: " + i);
}

// Objetos: Definición y acceso a propiedades
let persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
};

// Acceso a propiedades y métodos del objeto
console.log(persona.nombre);  // Imprime "Juan"
persona.saludar();  // Llama al método saludar

// Manejo de arrays: Declaración y uso
let lista = [1, 2, 3, 4, 5];
console.log(lista[0]);  // Imprime el primer elemento del array

// Bucle para recorrer un array
lista.forEach(function(elemento) {
    console.log(elemento);
});