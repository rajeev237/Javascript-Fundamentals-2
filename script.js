'use strict'; //This activates strict mode

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
/*
function logger() {
    console.log('My name is Jonas');
}

logger(); //This is called invoking or running or calling the function
logger();
logger();

/*
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0); //Here 5 and 0 are called arguments
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/
/*
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

//Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);
*/

//Arrow functions
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear; //first calculate age using the birthyear
//     const retirement = 65 - age; //calculate the retirement age
//     //return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, 'John'));
// console.log(yearsUntilRetirement(1985, 'Bob'));

//Functions calling another functions
//The main purpose of doing this is to call a function from another function.
//This also helps us not to repeat ourselves while writing the code
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear); //first calculate age using the birthyear
    const retirement = 65 - age; //calculate the retirement age

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Bob'));
*/
/*
//Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

//Instead of the brackets used above, we can also write 'new Array'.
const year = new Array(1991, 'Monica', 1994, 2020);

//Proper way of writing console.log when array is used
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
//Number of elements in the array

console.log(friends.length);
console.log(friends[friends.length - 1]) //This is just an expression inside an array to find out what name is in number 2

//To add elements through the array by mutating the array

friends[2] = 'Jay';
friends[3] = 'Rajeev';
console.log(friends);

//Array can hold values with different types (String or Integers) at the same time

const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/
/*
const friends = ['Michael', 'Steven', 'Peter'];
//This adds a new element on the end
const newLength = friends.push('Jay'); //Push is a function which we can call directly on the friends array in this case

console.log(friends);
console.log(newLength);
//This adds a new element on the front
friends.unshift('John');
console.log(friends);

//Remove elements
friends.pop();
const popped = friends.pop(); //Last
console.log(popped);
console.log(friends);

friends.shift(); //First
console.log(friends);
console.log(friends.indexOf('Michael')); //indexOf is used to find at which position the array is in

console.log(friends.includes('Henry')); //To find if the array includes the value or not. We can also use includes to write conditions

if (friends.includes('Peter')) {
    console.log('You have a friend called Peter');
}

*/

// Objects

// const jonasArray = [
//     'Jonas',
//     'Mckay',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

//In the case below, object jonas has five properties
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Mckay',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas.lastName);
console.log(jonas['lastName']);//We can write either way

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);//Dot notation does not work here like jonas.'first + nameKey
console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Please choose between firstName, lastName, age, job, and friends');
// }

//To add more property
jonas.location = 'Perth';
jonas['twitter'] = '@jonas1';
console.log(jonas);

//Exercise
//Jonas has 3 friends, and his best friend is Michael
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`);
*/
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Mckay',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }
    // calcAge: function () { //this keyword is equal to the object calling the method
    //     console.log(this); //this keyword can also be called as a pronoun
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license. `
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);
//console.log(jonas['calcAge'](1991));

//Challenge
//Jonas is a 46 year old teacher, and he has a driver's license
console.log(jonas.getSummary());
*/

//Loops

// For loop keeps running while condition is true
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }
/*
const jonas = [
    'Jonas',
    'McKay',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];
const types = [];
for (let i = 0; i < jonas.length; i++) { //using .length here sets the value i to go as far as it is declared up in the object
    //Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    //Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]); //this will push the values in the line 279 ages = []
}
console.log(ages);

//continue and break
console.log('-------ONLY STRINGS-------')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue; //This line means if the type of current element Jonas is not a string, then keep continuin
    console.log(jonas[i], typeof jonas[i]);
}

console.log('-------BREAK WITH NUMBER-------')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'number') break; //This line means if the type of current element Jonas is not a string, then keep continuin
    console.log(jonas[i], typeof jonas[i]);
}
*/
//-------------------------------------
//Looping backwards
/*
const jonas = [
    'Jonas',
    'McKay',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}
//-------------------------------------
//Loop inside loop
//We want to repeat each repetition multiple times

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--------Starting exercise ${exercise}---------`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}
*/

//--------------------------------------
//While Loop
/*
let rep = 1;
while (rep <= 10) {
    //console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
*/