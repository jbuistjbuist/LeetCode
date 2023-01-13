// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

//first solution (slow)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const patterns = {};
  for (let i = 0; i < s.length; i++) {
      if (Object.entries(patterns).find(el => el[0] === s[i] && el[1] !== t[i] || el[1] === t[i] && el[0] !== s[i])) {
          return false;
      }
      patterns[s[i]] = t[i];
  }
  return true;
};


//second solution (faster than most)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const sObj = {};
  const tObj = {};

  for (let i = 0; i < s.length; i++) {
      if (sObj[s[i]] && sObj[s[i]] !== t[i]) return false;
      if (tObj[t[i]] && tObj[t[i]] !== s[i]) return false;

      
     sObj[s[i]] = t[i];
     tObj[t[i]] = s[i]
  }

  return true;
};