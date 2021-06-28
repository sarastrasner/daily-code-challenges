# LeetCode 283. Move Zeroes
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```
Example 2:
```
Input: nums = [0]
Output: [0]
```

## Approach & Efficiency
1. Create a for loop to iterate over the numbers.
  1. If numbers at 1 is 0, splice out that number and push it on to the back of the array

## Solution
```
const moveZeroes = (nums) => {
  for (let i = nums.length; i--; ) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};
```

- [JavaScript Solution](./orderedArray.js)
- [Python Solution](../../../python/code_challenges/arrays/move_zeroes/README.md)