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