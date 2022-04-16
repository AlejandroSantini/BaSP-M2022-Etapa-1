var newString = 'uncopyrightable';
console.log('String:', newString);

// a
upperCase = newString.toUpperCase();
console.log('All upper case:', upperCase);

// b
substringStart5 = newString.substring(0, 4);
console.log('Substring first 5:', substringStart5);

// c
substringEnd3 = newString.substring(newString.length - 3);
console.log('Substring last 3:', substringEnd3);

// d
stringCapitalize = (newString.substring(0, 1)).toUpperCase() 
    + (newString.substring(newString.length - (newString.length - 1))).toLowerCase();
console.log('String capitalize:', stringCapitalize);

// e
var newStringSpace = 'unco pyri ghtable';
posSpace = newStringSpace.indexOf(' ');
console.log('Position of space:', posSpace);

// f
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