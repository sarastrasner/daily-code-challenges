# LeetCode 1313. Decompress Run-Length Encoded List
We are given a list nums of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements `[freq, val] = [nums[2*i]`, `nums[2*i+1]] (with i >= 0)`.  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

Return the decompressed list.

 

Example 1:
```
Input: nums = [1,2,3,4]
Output: [2,4,4,4]
Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
At the end the concatenation [2] + [4,4,4] is [2,4,4,4].
```
Example 2:
```
Input: nums = [1,1,2,3]
Output: [1,3,3]
```
## Approach & Efficiency
- create a new array, `result`
- iterate over the given array, `nums`, using `range(start, stop, step)`
- step will be two, so we can skip a number each time
- add the value `nums[i+1]` to the result array the number of times specified by the frequency `nums[i]`
- return that array


The Efficiency is O(n), for time and space since each element in the array needs to be accessed once and we're creating and returning a new array.

## Solution
- [Array Shuffle Python](./decompress_array.py)
- [Array Shuffle JavaScript](./javascript/arrays/decompressArray/README.md)
