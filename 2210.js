// You are given a 0-indexed integer array nums. An index i is part of a hill in nums if the closest non-equal neighbors of i are smaller than nums[i]. 
// Similarly, an index i is part of a valley in nums if the closest non-equal neighbors of i are larger than nums[i].
//  Adjacent indices i and j are part of the same hill or valley if nums[i] == nums[j].

// Note that for an index to be part of a hill or valley, it must have a non-equal neighbor on both the left and right of the index.

// Return the number of hills and valleys in nums.
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