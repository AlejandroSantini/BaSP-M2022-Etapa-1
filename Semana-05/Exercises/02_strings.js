console.log('--EXERCISE 2: STRINGS')

var newString = 'uncopyrightable';
console.log('String:', newString);

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('-Exercise 2.a');
upperCase = newString.toUpperCase();
console.log('All upper case:', upperCase);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.b');
substringStart5 = newString.substring(0, 4);
console.log('Substring first 5:', substringStart5);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.c');
substringEnd3 = newString.substring(newString.length - 3);
console.log('Substring last 3:', substringEnd3);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.d');
stringCapitalize = (newString.substring(0, 1)).toUpperCase() 
    + (newString.substring(newString.length - (newString.length - 1))).toLowerCase();
console.log('String capitalize:', stringCapitalize);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('-Exercise 2.e');
var newStringSpace = 'unco pyri ghtable';
posSpace = newStringSpace.indexOf(' ');
console.log('Position of space:', posSpace);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.f');
var newStringSpaceBetween = 'commercial conference';
console.log('Original:', newStringSpaceBetween);
posSpace = newStringSpaceBetween.indexOf(' ');
string1 = newStringSpaceBetween.substring(0, posSpace);
string2 = newStringSpaceBetween.substring(++posSpace);
string1Capitalize = (string1.substring(0, 1)).toUpperCase() 
    + (string1.substring(string1.length - (string1.length - 1))).toLowerCase();
string2Capitalize = (string2.substring(0, 1)).toUpperCase() 
    + (string2.substring(string2.length - (string2.length - 1))).toLowerCase();
newStringSpaceBetweenCap = string1Capitalize + ' ' + string2Capitalize;
console.log('Capitalize:', newStringSpaceBetweenCap);