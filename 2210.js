
/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
  const uniqueNums = nums.filter((n, i) => nums[i - 1] !== n)
  let total = 0;
  
  for (let i = 1; i < uniqueNums.length - 1; i++) {
      const c = uniqueNums[i];
      const p = uniqueNums[i - 1];
      const n = uniqueNums[i + 1];

      if ((c < p && c < n) || (c > p && c > n)) {
          total++
      }
  }

  return total;
};