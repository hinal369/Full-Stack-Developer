// 1. Define the decorator function
function log(originalMethod, context) {
  const methodName = context.name;

  // Return a new function that replaces the original method
  return function (...args) {
    console.log(`[LOG] Calling method: "${methodName}" with arguments:`, args);

    // Run the actual method
    return originalMethod.apply(this, args);
  };
}

// 2. Apply it using the @ syntax inside a Class
class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  @log // <--- Applying the decorator here
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }
}

// 3. Test it
const myAccount = new BankAccount(100);
myAccount.deposit(50);



// Node.js Code
// // 1. The decorator function (takes a function, returns a function)
// function logDecorator(originalMethod, methodName) {
//   return function (...args) {
//     console.log(`[LOG] Calling method: "${methodName}" with arguments:`, args);
//     return originalMethod.apply(this, args);
//   };
// }

// // 2. Define the class normally
// class BankAccount {
//   constructor(balance) {
//     this.balance = balance;
//   }

//   deposit(amount) {
//     this.balance += amount;
//     return this.balance;
//   }
// }

// // 3. Manually apply the decorator to the class prototype
// BankAccount.prototype.deposit = logDecorator(
//   BankAccount.prototype.deposit,
//   "deposit",
// );

// // 4. Test it (Runs perfectly in standard Node!)
// const myAccount = new BankAccount(100);
// myAccount.deposit(50); // 1. The decorator function (takes a function, returns a function)
// function logDecorator(originalMethod, methodName) {
//   return function (...args) {
//     console.log(`[LOG] Calling method: "${methodName}" with arguments:`, args);
//     return originalMethod.apply(this, args);
//   };
// }

// // 2. Define the class normally
// class BankAccount {
//   constructor(balance) {
//     this.balance = balance;
//   }

//   deposit(amount) {
//     this.balance += amount;
//     return this.balance;
//   }
// }

// // 3. Manually apply the decorator to the class prototype
// BankAccount.prototype.deposit = logDecorator(
//   BankAccount.prototype.deposit,
//   "deposit",
// );

// // 4. Test it (Runs perfectly in standard Node!)
// const myAccount = new BankAccount(100);
// myAccount.deposit(50);
