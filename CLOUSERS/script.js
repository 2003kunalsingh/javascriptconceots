// clouser example 1

function outerFunction() {
    let name="kunal"    
    return function(){
        console.log(name)

    }
}

const innerFunction=outerFunction()
innerFunction() // kunal

// 2nd example private counter

function counter() {
    let _count=0;

    return{
        increment:function(){
            _count++;
        },
        decrement:function(){
            _count--;
        },
        getCount:function(){
            return _count;
        }
    }

    
}

let counter1=counter()
counter1.increment()
counter1.increment()
counter1.increment()
counter1.decrement()
console.log(counter1.getCount()) // 2


// 3 create a bank account skillls

function BankAccount() {
    let balance = 0;
    return {
        deposit: function(amount) {
            balance += amount;
            console.log(`Deposited: ${amount}. New balance: ${balance}`);
        },
        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
                console.log(`Withdrew: ${amount}. New balance: ${balance}`);
            } else {
                console.log(`Insufficient funds. Current balance: ${balance}`);
            }
        },
        getBalance: function() {
            return balance;
        }
    }
}

let account=BankAccount()
account.deposit(100) // Deposited: 100. New balance: 100
account.withdraw(50) // Withdrew: 50. New balance: 50
account.withdraw(100) // Insufficient funds. Current balance: 50
console.log(account.getBalance()) // 50