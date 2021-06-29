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
1. Create a current_sum variable and set its value to 0.
1. Create an arbitrarily low max variable. Both of these two variables will be used for comparisons.
1. Create a for loop to iterate over the input.
1. Compare current_sum + num vs. num. Assign the larger to current_sum.
1. Compare the max and current_sum. Assign the larger to max.
1. Return max.

The Efficiency is O(n) time and O(1) space

## Solution
```
 def maxSubArray(nums):
      max_sum, current_sum = -float('inf'), 0
      for num in nums:
            current_sum = max(num, current_sum + num)
            max_sum = max(current_sum, max_sum)
      return max_sum

```
- [JavaScript Solution](../../../../javascript/arrays/maximumSubarray/README.md)
- [Python Solution](./maximum_subarray.py)
