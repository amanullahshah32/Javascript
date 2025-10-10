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


// // array methods
// console.log('array methods from here: '); 
// const friends = ['aman', 'jaman', 'rakib']; 
// console.log(friends);

// // add elements
// friends.push('sabbir rahman');
// console.log(friends);

// const newLength = friends.push('shahriar');
// console.log(friends);
// console.log(newLength);
// //unshift element
// friends.unshift('Noshin');
// console.log(friends);

// // remove elements
// friends.pop();
// console.log('last element removed and new element are: ' +friends);

// const popped_element = friends.pop(); 
// console.log('popped element is: ' + popped_element);
// console.log('current existing elements in the arrays are; '+friends);

// //shift element (this will remove the first element from the array, opsite of the pop)
// friends.shift();
// console.log('current element after using the shfit function: '+friends); // shift removes the first element of the array

// //coding challenge 2
// console.log('coding challenge 2');

// const calcTrip = (bills) =>
// {
//     let tips = []; 
//     let total = [];
//     const length = bills.length;
//     if(0 <= length)
//     {
//         for(let i = 0; i < length; i++)
//         {
//             if (bills[i] >= 50 && bills[i] <= 300)
//             {
//                 const tip = bills[i] * 0.15;
//                 tips.push(tip); 
//                 total.push(tip + bills[i]); 
//             }
//             else
//             {
//                 const tip = bills[i] * 0.20;
//                 tips.push(tip);
//                 total.push(tip + bills[i]);
//             }
//         }
//     }
//     return [tips, total]; // Return an array containing both tips and total arrays
// }

// const bills = [125, 555, 44];
// const [tips, total] = calcTrip(bills); // Destructure both arrays from the returned result



// console.log('given bill are: ' +bills);
// console.log('given tips are: ' +tips);
// console.log('given total are: ' +total);



// // objects
// console.log('objects');

// const amanArray = [
//     'Aman', 'Shah', 2025 - 2001, 'Employee', ['Michael', 'Peter', 'Steven']
// ];

// console.log(amanArray);

// const aman = {
//     firstName : 'Aman',
//     lastName : 'Shah',
//     age: 2025 - 2001, 
//     job: 'Employee',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(aman);
// console.log(typeof(aman));

// // dot vs bracket notation
// console.log(aman.lastName);
// console.log(aman['lastName']);

// const nameKey = 'Name';
// console.log('first name is: '+ (aman['first' + nameKey]));

// console.log(aman.firstName.length);
// console.log(aman['last' + nameKey].length);


// aman.location = 'Bangladesh';
// console.log(aman);

// aman['twitter'] = 'amanullahshah32'; 
// console.log(aman);


// const interestedIn = prompt('What do you want to know about Aman? Choose between firstName, lastName, age, job, and friends');
// console.log(interestedIn);
// console.log(typeof(interestedIn));

// if(aman.interestedIn)
// {
//     console.log('dot notaion workes');
// }
// else console.log('dot notation doesnt worked');

// if(aman[interestedIn])
// {
//     console.log('bracket notation worked here: '+aman[interestedIn]);
// }
// else{
//     console.log('wrong request! choose between firstName, lastName, age, job, and friends');
// }


// // aman has 3 friends, and his best friend is called Michael
// console.log(`${aman.firstName} has ${aman.friends.length} friends, and his best friend is called ${aman.friends[0]}`); 
// console.log(`${aman.firstName} has ${aman.friends.length} friends, and his best friend is called ${aman.friends[0]}`); 


// // object methods
// console.log('object methods');

// const aman = {
//     firstName : 'Aman',
//     lastName : 'Shah',
//     // age: 2025 - 2001, 
//     job: 'Employee',
//     friends: ['Michael', 'Peter', 'Steven'],
//     birthYear : 2001,
//     hasDriverLicense: true,

//     // calcAge: function(birthYear)
//     // {
//     //     return `call by parameter ${2025 - birthYear}`;
//     // },
//     calcAge: function()
//     {
//         // this.age = 2025 - this.birthYear;
//         // console.log(this);
//         this.age = 2025 - this.birthYear;
//         console.log(this.age);
//         return this.age;
//         // return `call by 'this' keyword: ${this.age = Number(2025 - this.birthYear) }`;
//     },
//     getSummary: function()
//     {
//             return `${this.firstName} is a ${this.calcAge()} year old ${this.job} , and he has ${this.hasDriverLicense ? 'a' : 'no'} driver license`;
//     }
// };

// // console.log(aman.calcAge(2001));
// // console.log(aman['calcAge2'](2004));
// console.log(typeof(aman.calcAge));
// // Call the method so it sets `this.age` on the object before we log it
// aman.calcAge();
// console.log(aman.age);
// console.log(typeof(aman));


// // challenge: Aman is a 46 year old employee, and he has a driver license
// console.log(`${aman.firstName} is a ${aman.age} year old ${aman.job} , and he has ${aman.hasDriverLicense ? 'a' : 'no'} driver license`);
// console.log(aman.getSummary());


// coding challenge 3
console.log(`coding challenge 3 of part 2`);

const mark = {
    fullName : 'mark amanu',
    mass : 80,
    height: 1.69,
    calcBMI: function()
    {
        let bmi = this.mass / (this.height * this.height);
        return bmi; 
    }
};

const john = {
    fullName: 'john smith', 
    mass: 92,
    height : 1.95,
    calcBMI: function()
    {
        let bmi = this.mass / (this.height * this.height);
        return bmi; 
    }
};

// Compute BMIs once so we don't call the methods repeatedly and to avoid inconsistent results
const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();

// Build a readable message using a ternary expression
const higher = markBMI > johnBMI ? `${mark.fullName}'s BMI (${markBMI.toFixed(2)}) is higher than ${john.fullName}'s BMI (${johnBMI.toFixed(2)})` : `${john.fullName}'s BMI (${johnBMI.toFixed(2)}) is higher than ${mark.fullName}'s BMI (${markBMI.toFixed(2)})`;
console.log(higher);


// iteration: the for loop
console.log('iteration: the for loop');

for(let rep = 1; rep <= 10; rep++)
{
    console.log('aman repition no: ' +rep);
}

// looping arrays, breaking and continuing
console.log('looping arrays, breaking and continuing');

const aman = [
    'Aman',
    'Shah',
    2025 - 2001, 
    'Employee',
    ['Michael', 'Peter', 'Steven']
];

const types = []; 
for (let i = 0; i<aman.length; i++ )
{
    console.log(aman[i], typeof(aman[i]));
    types.push(typeof(aman[i])); 
}


console.log(typeof(aman));
console.log(types);

const years = [2001, 2004, 2006, 2009, 2012];;
const ages = [];

for (let i = 0; i<years.length; i++)
{
    ages.push(2026-years[i]);
}
console.log(ages);

// continue and break
console.log('continue and breal statement');

console.log('------ string only ------- ');
for (let i = 0; i<aman.length; i++  )
{
    if(typeof(aman[i]) !== 'string' ) continue;

    console.log(aman[i], typeof(aman[i]));
}

console.log('------ break with number ------- ');
for(let i = 0; i<aman.length; i++)
{
    if(typeof(aman[i]) === 'number') break;
    console.log(aman[i], typeof(aman[i]));
}

// looping backwards and loops in loops (nested looping )
console.log('looping backwards and loops in loops (nested looping )');

for(let i = aman.length -1; i>=0; i--)
{
    console.log( i, aman[i], typeof(aman[i]));
}

for(let exercise = 1; exercise <4; exercise++)
{
    console.log(`----- start exercise no: ${exercise} -------`);
    for(let rep = 1; rep<5; rep ++)
    {
        console.log(`--- Lifitng weight : ${rep}---`);
    }
}

// the while loop
console.log('the while loop\n');

// let rep = 1;
// while(rep <= 5)
// {
//     console.log(`while: lifting weight usign while loop ${rep}`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1; ;
console.log(dice);

if(dice === 6) console.log(`loop is about to end.. and rooled a ${dice} finally`);
while(dice !== 6)
{
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1; ;
    if(dice === 6) console.log(`loop is about to end.. and rooled a ${dice} finally`); 
}


// coding challenge 4
console.log('\ncoding challenge 4\n\n');

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86 ,52]; 
let tips = [];
let total = [];

const calcTrip = (bills ) =>
{
    for (let i = 0; i< bills.length; i++)
    {
        if(bills[i] >= 50 && bills[i] <= 300)
        {
            tips.push(bills[i] & 0.15);
        }
        else
        {
            tips.push(bills[i] * 0.20);
        }
        total.push(tips[i] + bills[i]);
    }
}

calcTrip(bills);
console.log('bills are: ' + bills);
console.log('tips are: ' + tips);
console.log('total are: ' + total);

const calcAverage = (total) =>
{
    let sum = 0; 
    for(let i = 0; i<total.length; i++)
    {
        sum = sum + total[i];

    }
    return sum/ total.length;
}

console.log('average of total is: ' + calcAverage(total));