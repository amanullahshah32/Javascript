// Remember, we're gonna use strict mode in all scripts now!

'use strict';

// const x = '23';
// if (x === String(23)) console.log(23);

// const calcAge = (birthYear) =>
//   {
//   return 2024 - birthYear;
// };
// console.log(calcAge(2003));

// console.log(calcAge(23));
// console.log(calcAge(23));

// const aman = ['Aman', 'Kumar', 2024 - 2003, 'student', ['Ankit', 'Anshul', 'Anurag'], true];
// console.log(aman);
// console.log(aman.length);
// console.log(aman[0]);
// console.log(typeof(aman));

//problem solve using google, stackoverflow, and MDN
// console.log(`problem solve using google, stackoverflow, and MDN`);

// temperature ampliture = max - min of temperature
// what is themp applitude? answer: difference between highest and lowest temp
// how to compute max and min temperature?
// whats a sensore error? and what to do?

// 2. breaking up into sub-problems
// how to ignore erros?
// fid the max value in the temperature
// find the min value in the temperature.
// subtract min from max and return it.

// const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const calcTempAmplitude = function (temps) 
// {
//   let max = temps[0]; 
//   let min = temps [0];
//   for(let i = 0; i< temps.length; i++)
//   {
//     if(typeof temps[i] !== 'number') continue;

//     if(temps[i] > max)
//     {
//       max = temps[i];
//     }
//     if(temps[i] < min)
//     {
//       min  = temps[i]; 
//     }
//   }
//   const amplitude = max - min;
//   console.log(max); 
//   console.log(min); 
//   return amplitude;
//   // console.log(max);

// }

// const ampplitude = calcTempAmplitude(temperature);
// console.log(ampplitude);
// //

// // problem 2:
// console.log(`problem 2:`);
// //funciton should now receive 2 arrays of temps
// // and i have to merge two arrays first, then i will find out the amplitude
// const temperature1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperature2 = [3, -2, -6, -64, 'error', 9, 32, 98, 102, 14, 9, 5];

// const calcTempAmplitude2 = function (temps1, temps2) 
// {
//   const mergedArray = temps1.concat(temps2);
//   console.log(`merged array: ${mergedArray} and its length is: ${mergedArray.length}`);

//   let max = mergedArray[0]; 
//   let min = mergedArray [0];
//   for(let i = 0; i< mergedArray.length; i++)
//   {
//     if(typeof mergedArray[i] !== 'number') continue;

//     if(mergedArray[i] > max)
//     {
//       max = mergedArray[i];
//     }
//     if(mergedArray[i] < min)
//     {
//       min  = mergedArray[i]; 
//     }
//   }
//   const amplitude = max - min;
//   console.log(max); 
//   console.log(min); 
//   return amplitude;
//   // console.log(max);

// }

// const ampplitude2 = calcTempAmplitude2(temperature1, temperature2);
// console.log(ampplitude2);


// debugging

console.log(`debugging`);

const measureKelvin = function ()
{
  const measurement = {
    type: 'temp', 
    unit: 'celsius', 
    value: Number(prompt('Degrees celsius: '))
  }
  console.log(measurement);
  console.table(measurement);
  console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;

}

console.log(measureKelvin());