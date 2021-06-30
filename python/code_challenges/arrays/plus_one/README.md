# LeetCode 66. Plus One
Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

 
Example 1:
```
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
```
Example 2:
```
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
```
Example 3:
```
Input: digits = [0]
Output: [1]
```

## Approach & Efficiency
1. The integer-array "digits" is first converted into a joined string: [1,2,3] -> "123". 
```
a = ''.join(map(str,digits))
```
1. The joined string is then converted into an integer, and we add one. *
```
b = int(a)+1
```
1. Since integers are not iterable, we need to convert it to a string. Our new integer is re-converted into a string, and then into a list format. Finally, the INT operator is applied to each element of the list to obtain new integer digits *
```
[ int(c) for c in str(b) ]
```
## Solution
```
def plusOne(digits):
    return [int(x) for x in str(int(''.join(map(str, digits)))+1)]
```

- [Python Solution](./plus_one.py)
- [JavaScript Solution](../../../../javascript/arrays/plusOne/README.md)