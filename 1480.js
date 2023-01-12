//running sum of a numerical array 


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let total = 0;
  return nums.map((el) => {
      total+= el;
      return total;
  })
};