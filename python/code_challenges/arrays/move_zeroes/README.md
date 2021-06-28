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
  1. If numbers at 1 is 0, pop out that number and append it on to the back of the list

## Solution
```
def moveZeroes(nums):
    for idx in range(len(nums) - 1, -1, -1):
        if nums[idx] == 0:
            nums.pop(idx)
            nums.append(0)
    return nums
```

- [Python Solution](./move_zeroes.py)
- [JavaScript Solution](../../../../javascript/arrays/moveZeroes/README.md)