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
1. For arrays that do not end in `9`, this is a straightforward problem: Add 1 to the last digit
    ```
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    ```
1. For arrays that end in `9`, there are two issues:
    1. If the array has a length of at least 2 and the last digit is `9`, the last digit needs to become `0`
        ```
        else digits[i] = 0;
        ```
        and the second to last digit needs to increment by 1. 
        ```
        digits[i]++;
        ```
        We need to repeat the above steps, moving forward from the back of the array until we find a number smaller than 9.
        ```
        for (let i = digits.length - 1; i >= 0; i--) {
        ```

    1. If the array has a length of 1 and the last digit is `9`, the last digit needs to become `0` and `1` needs to be added to the front of the array. 
    ```
    digits.unshift(1);
    return digits;
    ```

## Solution
```
const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    console.log('in the for loop');
    if (digits[i] < 9) {
      // if last digit is smaller than nine
      digits[i]++;
      return digits;
    }
    // if last digit is nine
    else digits[i] = 0;
  }
  //if digit only contains a 9
  digits.unshift(1);
  return digits;
};
```

- [JavaScript Solution](./plusOne.js)
- [Python Solution](../../../python/code_challenges/arrays/plus_one/README.md)