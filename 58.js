// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.trim()
  const arr = s.split(" ")
  return arr[arr.length - 1].length
};