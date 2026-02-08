'use strict';

console.log(`Coding challenge 1:`);

const Car = function(make, speed)
{
    this.make = make;
    this.curSpeed = speed;

}
Car.prototype.accelerate = function(){
    this.curSpeed +=10;
    console.log(`${this.make} is going at ${this.curSpeed} km/h`);
}

Car.prototype.brake = function(){
    this.curSpeed -=5;
    console.log(`${this.make} is going at ${this.curSpeed} km/h`);
}

const toyota = new Car('TOYOTA', 100);
const bmw = new Car('BMW', 120);
console.log(toyota);
console.log(bmw);
toyota.accelerate();
toyota.accelerate();
toyota.accelerate();
toyota.brake();
console.log(toyota);
