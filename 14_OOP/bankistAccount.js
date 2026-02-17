'use strict';

// Public fields
// Private fileds
// Public methods
// Private methods


class Account {
    // 1) public instance fields // public fileds (instanced properties)
    locale = navigator.language;
    
    // 2) Private instance fields (instanced properties)
    #movements = [];
    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this._pin = pin;
        // protected property: _movements
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }
    // Public interface of our object

    getMovements(){
        return this.#movements;
    }
    deposit(val){
        this.#movements.push(val);
    }
    withdraw(val){
        this.deposit(-val);
    }
    _approveLoan(val){
        return true;
    }
    requestLoan(val){
        if(this._approveLoan(val)){
            this.deposit(val);
            console.log(`loan appoved of BDT ${val} TAKA`);
        }
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
acc1._approveLoan(1260);

console.log(acc1.#movements);