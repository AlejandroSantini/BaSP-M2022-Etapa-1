console.log('--EXERCISE 4: IF ELSE')

// a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.

console.log('-Exercise 4.a');
var i = Math.random();
if (i >= 0.5) {
    console.log('Number is:', i);
    console.log('Greater than 0,5');
} else {
    console.log('Number is:', i);
    console.log('Lower than 0,5');
}

// b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
// “Bebe” si la edad es menor a 2 años;
// “Niño” si la edad es entre 2 y 12 años;
// “Adolescente” entre 13 y 19 años;
// “Joven” entre 20 y 30 años;
// “Adulto” entre 31 y 60 años;
// “Adulto mayor” entre 61 y 75 años;
// “Anciano” si es mayor a 75 años.

console.log('-Exercise 4.b');
var age = Math.floor(Math.random()*101);
console.log('Age:', age);
if (age < 2) {
    console.log('Baby'); 
} else if (age <= 12) {
    console.log('Child');
} else if (age <= 19) {
    console.log('Teen');
} else if (age <= 30) {
    console.log('Young');
} else if (age <= 60) {
    console.log('Adult');
} else if (age <= 75) {
    console.log('Ederly');
} else {
    console.log('Old man')
}

