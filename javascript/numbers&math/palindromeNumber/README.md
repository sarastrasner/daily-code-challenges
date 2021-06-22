# LetCode 9. Palindrome Number
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

Example 1:
```
Input: x = 121
Output: true
```
Example 2:
```
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```
Example 3:
```
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```
Example 4:
```
Input: x = -101
Output: false
```

## Approach and Efficiency
1. By converting the input integer to an array, we'll have access to array methods, so start with that: `const arr = String(x).split('')`
1. You can use `.shift()` and `.pop()` to compare the first and last elements of an array. The `shift()` method removes the first element from an array and returns that removed element. The `pop()` method removes the last element from an array and returns that element. So you can compare `arr.shift()` and `arr.pop()`:
```
if (arr.shift() !== arr.pop()) return false;
```
1. Since each one removes elements from an array, wrap that in a while loop that will continue as long as the array's length is greather than 1.
1. Add a `true` return outside the while loop to catch true instances.


## Solution
```
const isPalindrome = x => {
  const arr = String(x).split('');
  while (arr.length > 1) {
    if (arr.shift() !== arr.pop()) return false;
  }
  return true;
};
```
- [JavaScript Solution](./palindromeNumber.js)
- [Python Solution]()
