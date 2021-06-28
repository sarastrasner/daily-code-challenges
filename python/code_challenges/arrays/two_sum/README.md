# LeetCode 1. Two Sum
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
1. Initialize a dictionary (seen). This dictionary will keep track of numbers (as key) and indices (as value).
1. Go over your array (line #1) using enumerate that gives you both index and value of elements in array. As an example, let's do nums = [2,3,1] and target = 3. Let's say you're at index i = 0 and value = 2, ok? you need to find value = 1 to finish the problem, meaning, target - 2 = 1. 1 here is the remaining. Since remaining + value = target, you're done once you found it, right? 
1. When going through the array, you calculate the remaining and check to see whether remaining is in the seen dictionary (line #3). 
1. If it is, the current number and the remaining from seen would give you the output (line #4). 
1. Otherwise, you add your current number to the dictionary (line #5) since it's going to be a remaining for (probably) a number you'll see in the future assuming that there is at least one instance of answer.


## Solution
```
def twoSum(nums, target):
    seen = {}
    for i, value in enumerate(nums):
        remaining = target - nums[i]
        if remaining in seen:
            return [i, seen[remaining]]
        else:
            seen[value] = i

```

- [Python Solution](./two_sum.py)
- [JavaScript Solution](../../../../javascript/arrays/twoSum/README.md)