"use strict";

console.log(`Coding challenge 1:`);

const Car = function (make, speed) {
  this.make = make;
  this.curSpeed = speed;
};
Car.prototype.accelerate = function () {
  this.curSpeed += 10;
  console.log(`${this.make} is going at ${this.curSpeed} km/h`);
};

Car.prototype.brake = function () {
  this.curSpeed -= 5;
  console.log(`${this.make} is going at ${this.curSpeed} km/h`);
};

const toyota = new Car("TOYOTA", 100);
const bmw = new Car("BMW", 120);
console.log(toyota);
console.log(bmw);
toyota.accelerate();
toyota.accelerate();
toyota.accelerate();
toyota.brake();
console.log(toyota);

console.log(`coding challenge 2: \n`);

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.curSpeed = speed;
  }

  get speedUS() {
    return this.curSpeed / 1.6;
  }

  set speedUS(speed) {
    this.curSpeed = speed * 1.6;
  }

  accelerate() {
    this.curSpeed += 10;
    console.log(`${this.make} is going at ${this.curSpeed} km/h`);
    return this; // for chaining
  }
  brake() {
    this.curSpeed -= 5;
    console.log(`${this.make} is going at ${this.curSpeed} km/h`);
    return this; // for chaining
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford);
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();

console.log(ford);
console.log(ford.speedUS);
ford.speedUS = 199;
console.log(ford);


// coding challenge 3:
console.log(`coding challenge 3: \n`);

class  EVCl extends CarCl{
  #charge;
  constructor(make, speed, charge){
    super(make, speed);
    this.#charge = charge;
    return this; // for chaining
  };
  chargeBattery(chargeTo){
    this.#charge = chargeTo;
    return this; // for chaining
  }
  accelerate(){
    this.speed += 20;
    this.#charge--;
    console.log(`${this.make} is going at ${this.curSpeed} km/h, with a charge of ${this.#charge}%`);
    return this; // for chaining
  };

}
console.log(`evcl class ${EVCl}`);

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian.accelerate();

rivian.brake().chargeBattery(50).accelerate();

console.log(rivian.speedUS);