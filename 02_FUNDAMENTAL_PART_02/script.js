'use strict';
console.log('Fundamental Part 2');

let hasDriversLicense = false; 
const passTest = true; 

if (passTest)  hasDriversLicense = true; 
hasDriversLicense ? console.log('Aman can drive a car') : console.log('Aman cannot drive a car');

// const interface = 'audio';
// console.log(interface); 

// function

console.log(`funtion start`);

function logger()
{
    console.log('My name is Aman'); 
}

// calling / running / invoking function
logger();

// function fruitProcessor( apples, oranges)
// {
//     console.log(apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} orange `;
//     return juice;
// }

// const juice = fruitProcessor(5,2); 
// console.log(juice); 
// console.log(fruitProcessor(3,4)); 


// const appleOrangeJuice = fruitProcessor(2,4); 
// console.log(appleOrangeJuice);

// function declaration

function calcAge1(birthYear)
{
    return  2025 -  birthYear;
}

const age1 = calcAge1(2002);
console.log(`age is ${calcAge1(2001)}`);
console.log(`age is ${age1}`);

// function expression
const calcAge2 = function (birthyear)
{
    return 2025 - birthyear;
}

const age2 = calcAge2(2000);
console.log(age1, age2);

// arrow function
const calcAge3 = birthYear  => 2037 - birthYear; // we dont need to write return keyword and {} if there is only one line of code
const age3 = calcAge3(2011);
console.log(age3);

const yearUntilRetirement = birthYear => {
    const age = 2025 - birthYear;
    const retirement = 65 - age; 
    return retirement;
}
console.log(yearUntilRetirement(2001));

const yearUntilRetirement2 = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 65 - age; 
    return `${birthYear} retires in ${retirement} years and name is ${firstName}`;   
}
console.log(yearUntilRetirement2(2001, 'Aman'  ));



// function within a function
console.log('function within a function');

function cutFruitPieces(fruit){
    return fruit * 4;
}


function fruitProcessor( apples, oranges)
{
    const applePiece = cutFruitPieces(apples);
    const orangePiece = cutFruitPieces(oranges);
    console.log(apples, oranges);
    const juice = `juice with ${applePiece} apple pieces and ${orangePiece} orange pieces`;
    return juice;
}

const juice = fruitProcessor(5,2); 
console.log(juice);