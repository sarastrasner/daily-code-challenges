# Leet Code 58. Length of Last Word
Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

A word is a maximal substring consisting of non-space characters only.

Example 1:
```
Input: s = "Hello World"
Output: 5
```
Example 2:
```
Input: s = " "
Output: 0
```
 
## Approach and Efficiency
There are three possible scenarios with this code.
1. The input array is empty. In this case, return an empty string.
1. The input array contains a common prefix. Return that prefix.
1. The first word in the array is the common prefix. Return that entire word. 

### Steps
1. First things first, trim the array to remove any whitespace at the beginning or end of the string.
1. Split the string, so it's in an array.
1. Return the length of the last value in the array.

The Big O for this solution is O(n).
## Solution
```
const lengthOfLastWord = (s) => {
  let array = s.trim().split(' ');
  return array[array.length - 1].length;
};
```
- [JavaScript Solution](./lengthOfLastWord.js)
- [Python Solution](../../../python/code_challenges/strings/length_of_last_word/README.md)