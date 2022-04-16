// a
var i = Math.random();
if (i >= 0.5) {
    console.log('Number is:', i);
    console.log('Greater than 0,5');
} else {
    console.log('Number is:', i);
    console.log('Lower than 0,5');
}

// b
var age = Math.floor(Math.random()*101);
console.log(age);
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

