console.log('--EXERCISE 6: Functions');

// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log('-Exercise 6.a');
var i = Math.floor(Math.random()*1000);
var j = Math.floor(Math.random()*1000);
console.log('value', i, 'and', j);
function addition(i, j) {
    return  i + j;
}
result = addition (i, j);
console.log(result);

// b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log('-Exercise 6.b');
var i = Math.floor(Math.random()*1000);
var j = 'k';
console.log('value', i, 'and', j);
function addition2(i, j) {
    if ((isNaN(i) == false) & (isNaN(j) == false)) {
        return  i + j;
    } else {
        console.log('One of the parameters has an error');
        return NaN;
    }
}
result = addition2 (i, j);
console.log(result);

// c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

console.log('-Exercise 6.c');
function validateInteger (i) {
    if (Number.isInteger(i)) {
        return true;
    } else {
        return false;
    }
}
result = validateInteger (i);
console.log(result);

// d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

console.log('-Exercise 6.d');
var i = 8.3;
var j = 4.6;
console.log('value', i, 'and', j);
function addition3(i, j) {
    if ((Number.isInteger(i) == true) & (Number.isInteger(j) == true)) {
        return  i + j;
    } else {
        while ((Number.isInteger(i) == false) || (Number.isInteger(j) == false)) {
            if ((Number.isInteger(i) == false) & (Number.isInteger(j) == false)) {
                console.log('Both of the parameters has an error');
                return Math.round(i).toString() + ' ' + Math.round(j).toString();
            } else if (Number.isInteger(i) == false) {
                console.log('One of the parameters has an error');
                return Math.round(i);
            } else if (Number.isInteger(j) == false) {
                console.log('One of the parameters has an error');
                return Math.round(j);
            }
        }
    }
}
result = addition3 (i, j);
console.log(result);

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

console.log('-Exercise 6.e');
var i = 8.3;
var j = 4;
console.log('value', i, 'and', j);
function validation(i, j) {
    while ((Number.isInteger(i) == false) || (Number.isInteger(j) == false)) {
        if ((Number.isInteger(i) == false) & (Number.isInteger(j) == false)) {
            console.log('Both of the parameters has an error');
            return Math.round(i).toString() + ' ' + Math.round(j).toString();
        } else if (Number.isInteger(i) == false) {
            console.log('One of the parameters has an error');
            return Math.round(i);
        } else if (Number.isInteger(j) == false) {
            console.log('One of the parameters has an error');
            return Math.round(j);
        }
    }
}

function addition4(i, j) {
    if ((Number.isInteger(i) == true) & (Number.isInteger(j) == true)) {
        return  i + j;
    } else {
        return validation(i, j);
    }
}
result = addition4 (i, j);
console.log(result);