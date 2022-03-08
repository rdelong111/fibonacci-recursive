function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  else if (n === 1) {
    return 1;
  }
  else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

/*
if n is equal to 0
  return 0
if previous failed, then if n is equal to 1
  return 1
if previous failed
  return fibonacci(n - 2) + fibonacci(n - 1)
*/

/*
The first number in the fibonacci sequence is always set to 0.
The second number in the fibonacci sequence is always set to 1.
Once n is greated than 1, the function will return the calculated number which is the previous two numbers added together. 
A tree is created under then fibonacci(#) until it gets to when n is equal to 0 or 1. Once those numbers are hit, then values will finally be generated and can work back up each tree.
*/