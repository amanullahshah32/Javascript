// coding challenge solution
console.log(`----CODING CHALLENGE SOLUTION---- 01`);


// data of dogs
const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
    // shallow copy of arrays
    let juliaDataCorrected = [...dogsJulia];
    // removing the first and last two elements from julia's data
    juliaDataCorrected= juliaDataCorrected.slice(1, -2); // rmeoves first and last two elements
    console.log(juliaDataCorrected);

    const allDogs = [...juliaDataCorrected, ...dogsKate];
    console.log(allDogs);

    allDogs.forEach(function (age, index)
    {
        let type = age>= 3 ? 'adult' : 'puppy'; 
        console.log(`Dog number ${index + 1}  is an ${type}, and is ${age} years old`);
    })
};

checkDogs(juliaData, kateData);


console.log(`----CODING CHALLENGE SOLUTION---- 02`);

const calcAverageHumanAge = function ([...dogsAges]) // spread operator to create a shallow copy
{
    const humanAges = dogsAges.map(function(newAge)
    {
        return newAge <= 2 ? 2*newAge : (16 + (newAge*4));
    })

    console.log(humanAges);
    // filter dogs less than 18 human years old
    const adultDogs = humanAges.filter(function(age)
    {
        return age >= 18; 
    })
    console.log(`adult dogs ages:  ${adultDogs}`);
    // calculate average human age of adult dogs
    const averageAgeOfDogs = adultDogs.reduce(function(accu, age, index, arr)
    {
        return accu + age / arr.length;
    },0);
    console.log(`average age of adult dogs: ${averageAgeOfDogs}`);
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// coding challenge 3
console.log(`----CODING CHALLENGE SOLUTION---- 03`);
// same as challenge 2 but using arrow functions and using the chaining
const calcAverageHumanAgeArrow =  ([...dogsAges]) => // spread operator to create a shallow copy
{
    const humanAge = dogsAges.map((age)=> age<=2? 2*age : Number(16 + (age*4))).filter
    ((age) => age >= 18).reduce((accu, age, index, arr) => accu + age / arr.length, 0);
    console.log(`average age of adult dogs using arrow function and chaining: ${humanAge}`);
}
calcAverageHumanAgeArrow([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAgeArrow([16, 6, 10, 5, 6, 1, 4]);

// coding challenge 4
console.log(`----CODING CHALLENGE SOLUTION---- 04`);

const dogs = [
 { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
 { weight: 8, curFood: 200, owners: ['Matilda'] },
 { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
 { weight: 32, curFood: 340, owners: ['Michael'] },
 ];

// 1. calculate recommended food portion
dogs.forEach(dog => dog.recommendedFood = Number((dog.weight ** 0.75 * 28).toFixed(0))); // in grams`
console.log(dogs);

// 2. find sarah's dog and log if it's eating too much or too little
const sarahDos = dogs.find(dog => dog.owners.includes('Sarah')); // it returns the object
console.log(sarahDos);

const eatingStatus = sarahDos.curFood>sarahDos.recommendedFood? 'eating too much' : 'eating too little';
console.log(`Sarah's dog is ${eatingStatus}`);

// 3. create array of owners of dogs who eat too much or too little
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).map(dog => dog.owners).flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).map(dog => dog.owners).flat();
console.log(ownersEatTooLittle);