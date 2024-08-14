/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let pointer1 = m - 1;
  let pointer2 = n - 1;
  let overallCount = m + n - 1;
  
  while (pointer2 >= 0) {
      if (pointer1 >= 0 && nums1[pointer1] > nums2[pointer2]) {
          nums1[overallCount--] = nums1[pointer1--];
      } else {
          nums1[overallCount--] = nums2[pointer2--];
      }
  }
};