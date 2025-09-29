// let js = "amazing";
// // if (js === "amazing")
// // alert("javascript is fun");

// // //40 + 60 - 10;
// // console.log(40 + 60 - 10);

// // console.log("Jonas");
// // console.log(23);

// // let firstName = "Jonas";
// // console.log(firstName); 
// // console.log(firstName); 
// // console.log(firstName); 

// // let Person = "Aman";
// // let pi = 3.1416;

// // const PI= 3.1416; 

// // console.log(Person);
// // console.log(pi);
// // console.log(PI);

// // let myFirstJob = "Apex developer";
// // let myCurrentJob = "Software developer";

// // console.log(myFirstJob);
// // console.log(myCurrentJob);

// // let javaScriptIsFun = true;
// // console.log(javaScriptIsFun);

// // console.log(typeof true);
// // console.log(typeof myFirstJob);
// // console.log(typeof javaScriptIsFun);
// // console.log(typeof 'aman');
// // console.log(typeof 345);

// // javaScriptIsFun = 'Yes';
// // console.log(typeof javaScriptIsFun);

// // let year;
// // console.log(year);
// // console.log(typeof year);

// // year = 20021;
// // console.log(typeof year);

// // console.log(typeof null);

// const now = 2050;
// console.log(now);

// const ageAman = now - 2001;
// const ageG = now - 1999;
// console.log(ageAman, ageG);

// console.log(ageAman * 2, ageAman / 10, 2** 3); // power funciton, multiplication and division

// const firstName = 'Amanullah';
// const lastName = "Shah";
// console.log('fullname is : ' + firstName + ' ' + lastName); 

// //assignment operators
// let x = 10 + 5; 
// console.log('value of x is; ' + x);

// x+= 10;

// console.log('value of x after += is; ' + x);

// x++;
// x--;
// x--;
// console.log("new value of x is; " + x);

// //comparison operators
// console.log(ageAman > ageG);
// console.log(ageG >= 18);

// const isFullAge = ageG >= 18; 
// console.log(isFullAge);


// const myName = "Aman";
// console.log(myName.length);

// const avgAge = (ageAman + ageG) / 2;
// console.log("average age is:  "+ avgAge);

// // precedence 
// let xx, y;
// xx = y = 25-10-5; 
// console.log(xx, y); 

//
console.log("coding challenge 1");

let marks_mass = 90;
let marks_height = 2.1;
 
let johns_mass = 85;
let johns_height = 2.05; 

let marks_bmi = marks_mass / marks_height ** 2;
console.log("marks bmi is; "+ marks_bmi);

let johns_bmi = johns_mass / johns_height ** 2; 
console.log("johns bmi is; "+ johns_bmi);

console.log("is marks bmi is higher than johns bmi: " + (marks_bmi > johns_bmi));
console.log("is johns bmi is higher than marks bmi: " + (marks_bmi < johns_bmi));



// new topic
const firstName2 = 'Amanullah Shah';
const job = 'Oracle Apex Developer';
const birthYear = 2001;
const currentYear = 2025;

const aman = "Im " + firstName2 + " " + " I am a " + (currentYear - birthYear)  + " years old"; 
console.log(aman); 

const amanNew = `I am ${firstName2}, I am a ${job}, and i am currently ${currentYear - birthYear} year old. `; 
console.log(amanNew);

// multiple line string
console.log("string \n\
    multiple \n\
    lines");

console.log(`string
    with 
    multiplw lines`);


// conditonal statemetns
const age = 17;

if (age >= 18)
    {
        console.log('aman can start driving , he has a license to drive. ');
    }
else
    {
        console.log('Aman is too young to drive, heis not allowed to drive. ');
        console.log(`wait until u are: ${18 - age} years`);
    }

const birthYear2 = 1999; 
let century ;
if (birthYear2 <= 2000)
{
    century = 20;
}
else
{
    century = 21;
}
console.log(`Aman was born in the ${century}th century`);

// type conversion
const inputYear  = '2001';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('aman'));
console.log(typeof NaN);

console.log(String(23), 23); 


console.log(`-----------------
    ----------------`);
// type coercion
console.log('I am ' + 25 + ' years old'); 
console.log('23' - '10' - 3);

let n = '10' + 1;
n = n -1; 
console.log(n); 



// truthy and falsy values
console.log(`truthy and falsy values`);
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean({})); // true
console.log(Boolean("jonas")); // true


const money = 0; // money is 0 is a falsy value. thus the else block will be executed
if (money)
{
    console.log("dont spend it all");
}
else
{
    console.log("you should get a job");
}

let height ;  // height is undefined which is a falsy value
if (height)
{
    console.log("height is defined");

}
else
{
    console.log("height is undefined");
}