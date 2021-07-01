# LeetCode 414. Third Maximum Number
Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number.

 

Example 1:
```
Input: nums = [3,2,1]
Output: 1
Explanation: The third maximum is 1.
```
Example 2:
```
Input: nums = [1,2]
Output: 2
Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
```
Example 3:
```
Input: nums = [2,2,3,1]
Output: 1
Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
```

## Approach
1. Since the third maximum here means the third maximum distinct number, let's de-dupe the array.
1. Now let's sort the array in descending order, so that the largest number is at index 0, the second largest is at index 1, and the third largest is at index 3, etc., etc.
1. Create a ternary to return the third item in the array, if it exists, otherwise return the first item in the array. 

The time complexity of is O(n^2), and space complexity is O(1).

## Solutions
```
var thirdMax = (nums) => {
  let uniqueNums = [...new Set(nums)];
  uniqueNums.sort((a, b) => b - a);
  return uniqueNums.length >= 3 ? uniqueNums[2] : uniqueNums[0];
};
```
- [JavaScript Solution](./thirdMaximumNumber.js)
- [Python Solution](../../../python/code_challenges/arrays/third_maximum_number/README.md)