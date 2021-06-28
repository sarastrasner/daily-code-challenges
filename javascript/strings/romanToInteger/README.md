# LeetCode 13. Roman to Integer
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:
```
Input: s = "III"
Output: 3
```
Example 2:
```
Input: s = "IV"
Output: 4
```
Example 3:
```
Input: s = "IX"
Output: 9
```
Example 4:
```
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
```
Example 5:
```
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```


## Approach and Efficiency
1. Create a symbols object where the key is the symbol and the value is the corresponding value of that symbol.
1. Create a value to be returned at the end
1. Create a for loop to iterate over the input.
  1. Now you are trying to match the input to what's in your symbols object, which is `symbols[s[i]]`. If the input is `III`:
  `s` is: III, `i` is: 0, `symbols[III[0]]` is 1
  1. If the above number is smaller than the one after it, subtract that number from the value
  1. If the above number is larger than the one after it, add that number to the value
1. Return the value.

The for loop makes this solution O(n).

## Solution
```
const romanToInt = (s) => {
  let symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let value = 0;
  for (let i = 0; i < s.length; i++) {
    symbols[s[i]] < symbols[s[i + 1]]
      ? (value -= symbols[s[i]])
      : (value += symbols[s[i]]);
  }
  return value;
};
```
- [JavaScript Solution](./romanToInteger.js)
- [Python Solution](../../../../python/code_challenges/strings/valid_parentheses/README.md)
