# LeetCode 859. Buddy Strings
Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
 
Example 1:
```
Input: s = "ab", goal = "ba"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
```
Example 2:
```
Input: s = "ab", goal = "ab"
Output: false
Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.
```
Example 3:
```
Input: s = "aa", goal = "aa"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.
```
Example 4:
```
Input: s = "aaaaaaabc", goal = "aaaaaaacb"
Output: true
```
## Approach & Efficiency
1. First things first, if `s` and `goal` don't have the same length, no amount of swapping characters will make them equivalent.
    ```
    if (s.length != goal.length) return false;
    ```
1. Now, there's three possible situations:
    1. They contain more than two different characters. In that case, return false. 
        ```
          const diff = [];
          for (let i = 0; i < s.length; i++) {
            if (s[i] != goal[i]) diff.push(i);
            if (diff.length > 2) return false;
          }
        ```
    1. They contain less than two different characters. Each input is the same character repreated, i.e. `s = "aa", goal = "aa"`. In this instance, use a set to return true.
        ```
        if (!diff.length) return s.length != [...new Set(s)].length;
        ```
    1. They contain less than two different characters. The inputs are the same, but not repeating characters.
        ```
        const [i, j] = diff;
        return s[i] == goal[j] && goal[i] == s[j];
        ```

The single for loop makes this O(n).

## Solution
```
const buddyStrings = (s, goal) => {
  if (s.length != goal.length) return false;
  const diff = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] != goal[i]) diff.push(i);
    if (diff.length > 2) return false;
  }
  if (!diff.length) return s.length != [...new Set(s)].length;
  const [i, j] = diff;
  return s[i] == goal[j] && goal[i] == s[j];
};
```
- [Python Solution](./buddyStrings.js)
- [JavaScript Solution](../../../python/code_challenges/strings/buddy_strings/README.md)
