// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.


/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {

  let output = new Array(n).fill("")
  
  return output.map((el, index) => {
      if ((index + 1) % 3 === 0) {
          el += "Fizz";
      }
      if ((index + 1) % 5 === 0) {
          el += "Buzz"
          return el;
      }
      if (!el.length) {
          el += `${index + 1}`;
      }
      return el;
  })  
};