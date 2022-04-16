var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 
    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log('Original:', months);

// a
console.log(months[4], months[10]);

// b
months.sort();
console.log('Array ordered alphabetically: ', months);

// c
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 
    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
months.unshift('Start');
months.push('End');
console.log('Add elements (start and end):', months);

// d
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 
    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
months.shift();
months.pop();
console.log('Remove elements (start and end):', months);

// d
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 
    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
months.reverse();
console.log('Reverse:', months);

// e
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 
    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log('Join:', months.join('-'));

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 
    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log('Slice:', months.slice(4, 11));

