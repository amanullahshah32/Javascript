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
console.log(`problem solve using google, stackoverflow, and MDN`);

// temperature ampliture = max - min of temperature
// what is themp applitude? answer: difference between highest and lowest temp
// how to compute max and min temperature?
// whats a sensore error? and what to do?

// 2. breaking up into sub-problems
// how to ignore erros?
// fid the max value in the temperature
// find the min value in the temperature.
// subtract min from max and return it.

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const calcTempAmplitude = function (temps) 
{
  let max = temps[0]; 
  let min = temps [0];
  for(let i = 0; i< temps.length; i++)
  {
    if(typeof temps[i] !== 'number') continue;

    if(temps[i] > max)
    {
      max = temps[i];
    }
    if(temps[i] < min)
    {
      min  = temps[i]; 
    }
  }
  const amplitude = max - min;
  console.log(max); 
  console.log(min); 
  return amplitude;
  // console.log(max);

}

const ampplitude = calcTempAmplitude(temperature);
console.log(ampplitude);
//

// problem 2:
console.log(`problem 2:`);
//funciton should now receive 2 arrays of temps
