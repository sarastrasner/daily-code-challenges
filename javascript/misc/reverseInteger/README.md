# LeetCode 7. Reverse Integer
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
```
Input: x = 123
Output: 321
```
Example 2:
```
Input: x = -123
Output: -321
```
Example 3:
```
Input: x = 120
Output: 21
```
Example 4:
```
Input: x = 0
Output: 0
```

## Approach and Efficiency
1. Note that the directions say that output needs to be within -2<sup>31</sup> - 2<sup>31</sup>. 2147483647 is 2<sup>31</sup>. Declare a `limit` of 2147483648.
1. Declare a const `k` which will be used later to handle negative numbers. If the input is negative, `k` is -1. If the input is positive, `k` is 1. 
1. Reversing a string is easy: `.split('').reverse().join('')`, so you just need to convert the number to a string:
```
String(x).split('').reverse().join('');
```
1. Since x could still be a negative number at this point, replace `x` with `Math.abs(x)`.
```
String(Math.abs(x)).split('').reverse().join('');
```
1. Convert the above back to a number by adding `+` to the front.
1. Now to handle the two edge cases: negatives and those exceeding the limit. If the result `n` of the above operation is greater than the limit, return 0. Else return `n` * `k`.

The efficiency of this solution is O(n).

## Solution
```
const reverse = (x) => {
  const limit = 2147483648;
  const k = x < 0 ? -1 : 1;
  const n = +String(Math.abs(x)).split('').reverse().join('');
  return n > limit ? 0 : n * k;
}
```
- [JavaScript Solution](./goalParser.js)
- [Python Solution]()