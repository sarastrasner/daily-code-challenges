# LeetCode 53. Maximum Subarray
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example 1:
```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```
Example 2:
```
Input: nums = [1]
Output: 1
```
Example 3:
```
Input: nums = [5,4,-1,7,8]
Output: 23
```
## Approach & Efficiency
1. Create a previous variable and set its value to 0.
1. Create an arbitrarily low max variable. Both of these two variables will be used for comparisons.
1. Create a for loop to iterate over the input.
1. Compare prev + nums[i] vs. nums[i]. Assign the larger to prev.
1. Compare the max and prev. Assign the larger to max.
1. Return max.

The Efficiency is O(n), for time and space since each element in the array needs to be accessed once.

## Solution
```
const maxSubArray = (nums) => {
  let prev = 0;
  let max = -Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(max, prev);
  }
  return max;
};
```
- [JavaScript Solution](./maximumSubarray.js)
- [Python Solution](../../../python/code_challenges/arrays/maximum_subarray/README.md)
