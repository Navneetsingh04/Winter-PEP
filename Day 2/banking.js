// simulate basics banking operations such as creating an account depositing money and withdrawing money using function.

function BankAccount(accountHolder,balance){
    this.accountHolder = accountHolder;
    this.balance = balance;

    this.deposit = function(amount){
        if(amount > 0){
            this.balance += amount;
            console.log(`Deposited ₹${amount}. New balance: ₹${this.balance}`);
        } 
        else {
            console.log("Deposit amount must be positive.");
        }
    };
    this.withdraw = function(amount){
        if (amount > 0 && amount <= this.balance){
            this.balance -= amount;
            console.log(`Withdraw ₹${amount}. New balance: ₹${this.balance}`);
        } 
        else if (amount > this.balance) {
            console.log("Insufficient balance.");
        } 
        else {
            console.log("Withdraw amount must be positive.");
        }
    };
    this.getBalance = function() {
        console.log(`Account Balance for ${this.accountHolder}: ₹${this.balance}`);
    };
}

const myAccount = new BankAccount("Pritesh kumar", 1000);
myAccount.getBalance();
myAccount.deposit(500);
myAccount.withdraw(300);
myAccount.withdraw(1500); 
myAccount.getBalance();