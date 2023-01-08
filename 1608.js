/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
  let num = 0;

  while(true) {
      let arrayNum = nums.filter(value => value >= num).length;

      if (arrayNum === num) {
          return num;
      }
      if (arrayNum < num) {
          return -1
      }

      num++
  }
};