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
1. Reversing a string is easy: `[::-1]`, so you just need to convert the number to a string:
```
str(x)[::-1]
```
1. Since x could still be a negative number at this point, replace `x` with `abs(x)`.
```
str(abs(x))[::-1]
```
1. Convert the above back to a number by wrapping the entire thing in `int()`.
1. Now to handle the two edge cases: negatives and those exceeding the limit. If the result `n` of the above operation is greater than the limit, return 0. Else return `n` * `k`.

The efficiency of this solution is O(n).

## Solution
```
def reverse(x):
  limit = 2147483648
  # value_if_true if condition else value_if_false
  k = -1 if x < 0  else 1
  n = int(str(abs(x))[::-1])
  return 0 if n > limit else n * k
```

- [Python Solution](./reverse_integer.js)
- [JavaScript Solution](../../../../javascript/numbers&math/reverseInteger/README.md)