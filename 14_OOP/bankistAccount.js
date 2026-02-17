'use strict';

// Public fields
// Private fileds
// Public methods
// Private methods

// (there is also the static version of all of these)


class Account {
    // 1) public instance fields // public fileds (instanced properties)
    locale = navigator.language;
    
    // 2) Private instance fields (instanced properties)
    #movements = [];
    #pin; 
    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // protected property: _movements
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }
    // 3) Public methods


    // Public interface of our object

    getMovements(){
        return this.#movements;
    }
    deposit(val){
        this.#movements.push(val);
        return this; // for chaining
    }
    withdraw(val){
        this.deposit(-val);
        return this; // for chaining
    }

    requestLoan(val){
        if(this.#approveLoan(val)){
            this.deposit(val);
            console.log(`loan appoved of BDT ${val} TAKA`);
            return this; // for chaining
        }
    }
    static helper(){
        console.log('Helper is a static method');
    }

    // 4) private methods
        #approveLoan(val){
        return true;
    }
    
}

const acc1 = new Account('Aman', 'BDT', 1234);
console.log(acc1);

// acc1._movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1.getMovements());
console.log(acc1._pin);
acc1.requestLoan(1250);
console.log(acc1.getMovements());
// acc1.#approveLoan(1260);
acc1.requestLoan(1260);
console.log(acc1.getMovements());

// console.log(acc1.#pin); // Private fields are not accessible outside the class body
// console.log(acc1.#movements); // Private fields are not accessible outside the class body

Account.helper(); // only workd on the class not in the instances

// chaining method
acc1.deposit(340).deposit(450).withdraw(100).requestLoan(999).withdraw(500);
console.log(acc1.getMovements());