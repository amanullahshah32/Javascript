'use strict';

class Account {
    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }
    // Public interface of our object
    deposit(val){
        this.movements.push(val);
    }
    withdraw(val){
        this.deposit(-val);
    }
    approveLoan(val){
        return true;
    }
    requestLoan(val){
        if(this.approveLoan(val)){
            this.deposit(val);
            console.log(`loan appoved of BDT ${val} TAKA`);
        }
    }
}

const acc1 = new Account('Aman', 'BDT', 1234);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1.movements);
console.log(acc1.pin);
acc1.requestLoan(1250);
console.log(acc1.movements);
acc1.approveLoan(1260);