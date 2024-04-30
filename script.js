var shoutIt = function (name) {
  var shout = `Hello, ${name}, nice to meet you!`.toUpperCase();
  return shout;
};

console.log(shoutIt("Alex"));
// HELLO, ALEX, NICE TO MEET YOU!
console.log(shoutIt("Kim"));
// HELLO, KIM, NICE TO MEET YOU!
console.log(shoutIt("Joe"));
// HELLO, JOE, NICE TO MEET YOU!
console.log(shoutIt("Sam"));
// HELLO, SAM, NICE TO MEET YOU!
