# Leet Code 1: Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
```
Example 2:
```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```
Example 3:
```
Input: nums = [3,3], target = 6
Output: [0,1]
```

## Approach & Efficiency
1. Create two nested for loops. The outer loop represents the first item to add, `i`.
1. The inner for loop represents the second item to add, `j`.
1. If `i` + `j` is equal to the target, return an arry of the two indices.

The nested for loops makes the Big(O) for this solution is O(n<sup>2</sup>).

## Solution
```
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
```

- [JavaScript Solution](./twoSum.js)
- [Python Solution](../../../python/code_challenges/arrays/two_sum/README.md)


 