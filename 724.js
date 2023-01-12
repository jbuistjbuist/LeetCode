// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.


//INITIAL SOLUTION 

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

  let rightSum;
  let leftSum;
 
 for (let i = 0; i < nums.length; i++) {
     i === 0 ? leftSum = 0 : leftSum = nums.slice(0, i).reduce((acc, curr) => acc + curr, 0);
     i === nums.length - 1 ? rightSum = 0 : rightSum = nums.slice(i + 1).reduce((acc, curr) => acc + curr, 0);
     if (rightSum === leftSum) {
         return i
     }
 }
 return -1
};


//REFACTORED SOLUTION (MUCH FASTER)

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

  let rightSum = nums.reduce((a, c) => a + c, 0)
  let leftSum = 0;

 
 for (let i = 0; i < nums.length; i++) {
     const num = nums[i];
     rightSum -= num;

     leftSum += nums[i - 1] || 0;
     
     if (rightSum === leftSum) {
         return i
     }
 }
 
 return -1
};


