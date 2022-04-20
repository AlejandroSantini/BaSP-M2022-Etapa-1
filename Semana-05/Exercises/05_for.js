console.log('--EXERCISE 5: FOR')

// a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.

console.log('-Exercise 5.a');
var colors = ['yellow', 'red', 'blue', 'green', 'white'];
for (var i = 0; i <= 4; i++) {
    alert(colors[i]);
}

//b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
console.log('-Exercise 5.b');
var colors = ['yellow', 'red', 'blue', 'green', 'white'];
for (var i = 0; i <= 4; i++) {
    stringCapitalize = (colors[i].substring(0, 1)).toUpperCase() 
    + (colors[i].substring(colors[i].length - (colors[i].length - 1))).toLowerCase();
    alert(stringCapitalize);
}

//c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.

console.log('-Exercise 5.c');
var colors = ['yellow', 'red', 'blue', 'green', 'white'];
var sentence = '';
for (var i = 0; i <= 4; i++) {
    sentence = sentence + colors[i];
}
alert(sentence);

//d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).

console.log('-Exercise 5.d');
var empty = [];
for (var i = 0; i <= 9; i++) {
    empty.push(i);
}
console.log(empty);
