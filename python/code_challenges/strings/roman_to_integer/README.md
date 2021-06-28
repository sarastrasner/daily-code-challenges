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
1. Create a `roman_to_int` dictionary where the key is the symbol and the value is the corresponding value of that symbol.
1. Create a `result` to be returned at the end
1. Create a for loop to iterate over the input.
  1. Now you are trying to match the input to what's in your symbols object, which is `roman_to_int[letter]`. 
  1. Add that value to the running total `result`
  1. If the above number is larger than the one before it it, subtract two times that number from the value
  1. Assign `prevValue` at the end of the loop
1. Return the result.

The for loop makes this solution O(n).

## Solution
```
def romanToInt(s):
    roman_to_int = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    result = 0
    prev_value = 0
    for letter in s:
        value = roman_to_int[letter]
        result += value
        if value > prev_value:
            # preceding roman nummber is smaller
            # we need to undo the previous addition
            # and substract the preceding roman char
            # from the current one, i.e. we need to
            # substract twice the previous roman char
            result -= 2 * prev_value
        prev_value = value
    return result
```
- [Python Solution](./roman_to_integer.py)
- [JavaScript Solution](../../../../javascript/strings/romanToInteger/README.md)
