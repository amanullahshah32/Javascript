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