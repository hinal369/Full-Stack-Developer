const user1 = {
  name: "Alice",
  sayHi: function() {
    console.log(`Hi, my name is ${this.name}`);
  }
};

const user2 = {
  name: "Bob"
};

// We execute user1's method, forcing 'this' to be user2
user1.sayHi.apply(user2);
console.log(user2.sayHi);


// Example 2

function introduce(greeting, punctuation) {
  console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

const user = { name: "Charlie" };

// Using call(): Arguments are listed one by one
introduce.call(user, "Hello", "!"); 
// Output: "Hello, my name is Charlie!"

// Using apply(): Arguments are packed into an array
introduce.apply(user, ["Hey", "..."]); 
// Output: "Hey, my name is Charlie..."