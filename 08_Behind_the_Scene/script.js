"use strict";

function calcAge(birthYear) {
  const age = 2025 - birthYear;
  console.log(firstName);
  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = false;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    } else {
      // var millenial = true;
      const str2 = `You are not a millenial ${firstName}`;
      console.log(str2);
    }
  }
  printAge();
  console.log(millenial);
  // console.log(str);
  // console.log(str2);
  return age;
}

const firstName = "AmanUllahShah";
calcAge(1986);
console.log(age);
