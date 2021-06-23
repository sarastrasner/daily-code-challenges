# Leet Code 14: Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
```
Input: strs = ["flower","flow","flight"]
Output: "fl"
```
Example 2:
```
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```
 
## Approach and Efficiency
There are three possible scenarios with this code.
1. The input array is empty. In this case, return an empty string.
1. The input array contains a common prefix. Return that prefix.
1. The first word in the array is the common prefix. Return that entire word. 

### Steps
1. Escape clause: If the input array is empty, return an empty string
1. Use two nested loops to compare the first word in the array `strs[0]` to every other word in the array `s`.
```
  for (let i = 0; i < strs[0].length; i++) {
    for (let s of strs) {
```
1. Create a conditional to see if the value at `i` of `strs[0]` is the same as the value at `i` of `s`. If they are not the same, return `s`, sliced to the value of i.
1. If the for loop has completed without a return statement, that means the first word in the array is the prefix. Outside the for loop, return the first word in the string array. 

The nested for loops makes this function O(n<sup>2</sup>)

## Solution
```
const longestCommonPrefix = (strs) => {
  if (!strs.length) return '';

  for (let i = 0; i < strs[0].length; i++) {
    for (let s of strs) {
      if (s[i] !== strs[0][i]) return s.slice(0, i);
    }
  }
  return strs[0];
};
```
- [JavaScript Solution](./longestCommonPrefix.js)
- [Python Solution]()