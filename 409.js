// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {

  const arr = s.split('').sort();

  let total = 0;
  let current = 0;

  for (let i = 0; i < arr.length; i++) {

    let curr = arr[i]
    let prev = arr[i - 1] || null;

    if (i === arr.length - 1) {
      if (curr === prev) {
        current++
      }
      current % 2 ? total += current - 1 : total += current;
      break;
    }

    if (curr === prev) {
      current++
    } else {
      current % 2 ? total += current - 1 : total += current;
      current = 1;
    }
  }

  return arr.length > total ? total + 1 : total;

};

console.log(longestPalindrome(s))