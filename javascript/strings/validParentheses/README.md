# LeetCode 20. Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
 
Example 1:
```
Input: s = "()"
Output: true
```
Example 2:
```
Input: s = "()[]{}"
Output: true
```
Example 3:
```
Input: s = "(]"
Output: false
```
Example 4:
```
Input: s = "([)]"
Output: false
```
Example 5:
```
Input: s = "{[]}"
Output: true
```


## Approach and Efficiency
1. In this instance, you are essentially using an array to simulate a stack.
1. If we find an opening brace in the string, push it onto the stack. Having it on the stack means we're waiting to close that particular brace.
1. If we find a closing brace in the string, we look at the top element on the stack.
  1. If it matches that element, we pop off that element, since it it now closed. 
  1. If it does not match that element, we return false. We have just encountered a closing brace without a corresponding opening brace. 
1. Return whether or not the "stack" is empty. If it is, the string has valid syntax. If the stack is not empty, the string does not have valid syntax. 

The for loop makes this solution O(n).

## Solution
```
const isValid = (s) => {
  let newArray = [];
  let openBracket = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  let closedBracket = {
    '}': true,
    ']': true,
    ')': true,
  };
  for (let i = 0; i < s.length; i++) {
    let character = s[i];
    if (openBracket[character]) {
      newArray.push(character);
    } else if (closedBracket[character]) {
      if (openBracket[newArray.pop()] !== character) return false;
    }
  }
  return newArray.length === 0;
};
```
- [JavaScript Solution](./validParentheses.js)
- [Python Solution](../../../../python/code_challenges/strings/valid_parentheses/README.md)
