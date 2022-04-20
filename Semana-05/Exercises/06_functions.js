console.log('--EXERCISE 6: Functions');

// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log('-Exercise 6.a');
var i, j;

function addition(i, j) {
    return  i + j;
}
result = addition(5, 4);
console.log('(i=5, j=4):', result);

// b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log('-Exercise 6.b');
var i, j;
function addition2(i, j) {
    if ((typeof i == 'number') && (typeof j == 'number')) {
        return  i + j;
    } else {
        console.log('One of the parameters has an error');
        return NaN;
    }
}
result1 = addition2(4, 3);
result2 = addition2(4, 'fe');
console.log('Case 1 (i=4, j=3):', result1, 'Case 1 (i=4, j=fe):', result2);

// c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

console.log('-Exercise 6.c');
function validateInteger (i) {
    if (Number.isInteger(i)) {
        return true;
    } else {
        return false;
    }
}
result1 = validateInteger(3);
result2 = validateInteger(5.5);
console.log('Case 1 (i=3):', result1,'Case 2 (i=5.5):', result2);

// d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

console.log('-Exercise 6.d');
var i, j;
function addition2(i, j) {
    if ((typeof i == 'number') && (typeof j == 'number')) {
        if ((validateInteger (i) == false) && (validateInteger (j) == false)) {
            alert('The numbers '+i+' and '+j+' are decimal');
            i = Math.round(i);
            j = Math.round(j);
        } else if (validateInteger (i) == false) {
            alert('The number '+i+' is a decimal');
            i = Math.round(i);
        } else if (validateInteger (j) == false) {
            alert('The number '+j+' is a decimal');
            j = Math.round(j);
        }
        return  i + j;
    } else {
        alert('One of the parameters has an error');
        return NaN;
    }
}
result1 = addition2(4, 3);
result2 = addition2(4, 'fe');
result3 = addition2(4, 3.5);
result4 = addition2(4.5, 7);
result5 = addition2(4.5, 6.2);
console.log('Case 1 (i=4, j=3):', result1, 'Case 2 (i=4, j=fe):', result2, 
    'Case 3 (i=4, j=3.5):', result3, 'Case 4 (i=4.5, j=7):', result4, 'Case 5 (i=4.5, j=6.2):', result5);

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

console.log('-Exercise 6.e');
function decimal(i, j) {
    if ((validateInteger (i) == false) && (validateInteger (j) == false)) {
        alert('The numbers '+i+' and '+j+' are decimal');
        i = Math.round(i);
        j = Math.round(j);
    } else if (validateInteger (i) == false) {
        alert('The number '+i+' is a decimal');
        i = Math.round(i);
    } else if (validateInteger (j) == false) {
        alert('The number '+j+' is a decimal');
        j = Math.round(j);
    }
    return [i, j];
}

function addition3(i, j) {
    if ((typeof i == 'number') && (typeof j == 'number')) {
        [i, j] = decimal(i, j);
        return  i + j;
    } else {
        alert('One of the parameters has an error');
        return NaN;
    }
}
result1 = addition3(4, 3);
result2 = addition3(4, 'fe');
result3 = addition3(4, 3.5);
result4 = addition3(4.5, 7);
result5 = addition3(4.5, 6.2);
console.log('Case 1 (i=4, j=3):', result1, 'Case 2 (i=4, j=fe):', result2, 
    'Case 3 (i=4, j=3.5):', result3, 'Case 4 (i=4.5, j=7):', result4, 'Case 5 (i=4.5, j=6.2):', result5);
