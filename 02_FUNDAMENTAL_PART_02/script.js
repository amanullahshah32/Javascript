// 'use strict';
// console.log('Fundamental Part 2');

// let hasDriversLicense = false; 
// const passTest = true; 

// if (passTest)  hasDriversLicense = true; 
// hasDriversLicense ? console.log('Aman can drive a car') : console.log('Aman cannot drive a car');

// // const interface = 'audio';
// // console.log(interface); 

// // function

// console.log(`funtion start`);

// function logger()
// {
//     console.log('My name is Aman'); 
// }

// // calling / running / invoking function
// logger();

// // function fruitProcessor( apples, oranges)
// // {
// //     console.log(apples, oranges);
// //     const juice = `juice with ${apples} apples and ${oranges} orange `;
// //     return juice;
// // }

// // const juice = fruitProcessor(5,2); 
// // console.log(juice); 
// // console.log(fruitProcessor(3,4)); 


// // const appleOrangeJuice = fruitProcessor(2,4); 
// // console.log(appleOrangeJuice);

// // function declaration

// function calcAge1(birthYear)
// {
//     return  2025 -  birthYear;
// }

// const age1 = calcAge1(2002);
// console.log(`age is ${calcAge1(2001)}`);
// console.log(`age is ${age1}`);

// // function expression
// const calcAge2 = function (birthyear)
// {
//     return 2025 - birthyear;
// }

// const age2 = calcAge2(2000);
// console.log(age1, age2);

// // arrow function
// const calcAge3 = birthYear  => 2037 - birthYear; // we dont need to write return keyword and {} if there is only one line of code
// const age3 = calcAge3(2011);
// console.log(age3);

// const yearUntilRetirement = birthYear => {
//     const age = 2025 - birthYear;
//     const retirement = 65 - age; 
//     return retirement;
// }
// console.log(yearUntilRetirement(2001));

// const yearUntilRetirement2 = (birthYear, firstName) => {
//     const age = 2025 - birthYear;
//     const retirement = 65 - age; 
//     return `${birthYear} retires in ${retirement} years and name is ${firstName}`;   
// }
// console.log(yearUntilRetirement2(2001, 'Aman'  ));



// // function within a function
// console.log('function within a function');

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }


// function fruitProcessor( apples, oranges)
// {
//     const applePiece = cutFruitPieces(apples);
//     const orangePiece = cutFruitPieces(oranges);
//     console.log(apples, oranges);
//     const juice = `juice with ${applePiece} apple pieces and ${orangePiece} orange pieces`;
//     return juice;
// }

// const juice = fruitProcessor(5,2); 
// console.log(juice);


// // function reviewing
// console.log('function reviewing');
// const calcAge4 = function(birthYear)
// {
//     return 2025 - birthYear; 
// }

// const yearUntilRetirement3 = function (birthYear, firstName) {
//     const age = calcAge4(birthYear);
//     const retirement = 65 - age; 

//     if(retirement > 0)
//     {
//         return `${birthYear} retires in ${retirement} years and name is ${firstName}`;   

//     }
//     else{
//         console.log(`  ${firstName}  already retired`); 
//         return -1;
//     }
// }
// console.log(yearUntilRetirement3(1950, 'Aman'  ));

// // coding challeng of Fundamental part 2
// console.log('coding challenge of Fundamental part 2');


// const checkWinner = (avgDolphins, avgKoalas) =>
// {
//     console.log(`points of dolphi is ${avgDolphins} and points of koalas is ${avgKoalas}`);
//     if(avgDolphins > 2*avgKoalas)
//     {
//         return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
//     }
//     else if(avgKoalas > 2*avgDolphins)
//     {
//         return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
//     }
//     else return `no team wins...`;
// }
// const calcAverage = (score1, score2, score3) =>
// {
//     return (score1 + score2 + score3) / 3;
// }

// let avgDolphins = calcAverage(85, 54, 41);
// let avgKoalas = calcAverage(23, 34, 27);

// console.log(`winner is ${checkWinner(avgDolphins, avgKoalas)}`);


// // arrays
// console.log('arrays');

// const friends = ['aman', 'jaman', 'rakib']; 
// console.log(friends);
// console.log(friends[2]);
// console.log(`length of the friends array is : ${friends.length}`);
// console.log(`last element of the friends array is : ${friends[friends.length - 1]}`);

// //change the element of the array; 
// friends[1] = 'rakibul'; // previosuly jaman
// console.log(friends);

// // friends  = ['a', 'b']; // not allowed because friends is a constant variable

// const firstName = 'Aman';
// const Aman = [firstName, 'Shah', 2025- 2001, 'student', 'developer', friends];
// console.log(Aman);
// console.log(Aman.length);
// console.log(typeof(Aman));
// console.log(Aman[5][0]); // accessing friends array within Aman array

// const years = new Array(2001, 2004, 2005);
// console.log(years); 
// console.log(friends[0]);



// // exercise
// const calcAge5 = function(birthYear)
// {
//     return 2025 - birthYear;
// }
// const years1 = new Array (2001, 2004, 2006, 2009, 2011);
// const ages = [calcAge5(years1[0]), calcAge5(years1[1]), calcAge5(years1[2]), calcAge5(years1[3]), calcAge5(years1[years1.length -1])];
// console.log(ages); 


// array methods
console.log('array methods from here: '); 
const friends = ['aman', 'jaman', 'rakib']; 
console.log(friends);

// add elements
friends.push('sabbir rahman');
console.log(friends);

const newLength = friends.push('shahriar');
console.log(friends);
console.log(newLength);
//unshift element
friends.unshift('Noshin');
console.log(friends);

// remove elements
friends.pop();
console.log('last element removed and new element are: ' +friends);

const popped_element = friends.pop(); 
console.log('popped element is: ' + popped_element);
console.log('current existing elements in the arrays are; '+friends);