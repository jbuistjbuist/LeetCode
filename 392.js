
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// ng the relativeA subsequence of a string is a new string that is formed from the original string by deleting 
// some (can be none) of the characters without disturbi positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (!s.length) return true;

  let sIndex = 0;
  let maxIndex = s.length - 1;
  
  for (let i = 0; i < t.length; i++) {
      if (t[i] === s[sIndex]) {
          if (sIndex === maxIndex) {
              return true;
          }
          sIndex++
      }
  }
  return false;
};