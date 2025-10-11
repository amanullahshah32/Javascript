// Remember, we're gonna use strict mode in all scripts now!

'use strict';

const x = '23';
if (x === String(23)) console.log(23);

const calcAge = (birthYear) => 
  {
  return 2024 - birthYear;
};
console.log(calcAge(2003));

console.log(calcAge(23));
console.log(calcAge(23));

const aman = ['Aman', 'Kumar', 2024 - 2003, 'student', ['Ankit', 'Anshul', 'Anurag'], true];
console.log(aman);
console.log(aman.length);
console.log(aman[0]);
console.log(typeof(aman));