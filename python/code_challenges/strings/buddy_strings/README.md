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
1. Let's cover these edge cases first.
  1. If strings are the same and any of the strings consists of repeating characters (aaa), then we return True
  1. If strings are of different lengths, we return False
  1. If any of the strings has fewer than two elements, we return False
1. Create an empty list res.
1. Iterate over any of the strings (by now, we now know they're of the same length). If we see that characters are different, put the index at which the difference occurred to the list.
1. At the end of the day, if the length of this list is zero, it means that both strings are the same, so return False
1. If the length of res is not 2 (means that there is more than one pair of buddies), return False
1. Otherwise (if len(res) == 2), check that characters that sit at indices at which the difference occured in both strings are the same.
Example:
```
A = 'abcd' B = 'adcb'
res = [1, 3]
Make sure that A[1] == B[3] and A[3] == B[1]
```

The single for loop makes this O(n).

## Solution
```
def buddyStrings(A, B):
    if A == B:
        if len(A) > len(set(A)):
            return True
    if len(A) != len(B): return False 
    if len(A) < 2 or len(B) < 2: return False
    res = []
    for i in range(len(A)):
        if A[i] != B[i]:
            res.append(i)
    if len(res) == 0:
        return False 
    if len(res) != 2:
        return False
    else:
        if A[res[0]] == B[res[-1]] and B[res[0]] == A[res[-1]]:
            return True
        else:
            return False
```
- [Python Solution](./buddy_strings.py)
- [JavaScript Solution](../../../../javascript/strings/buddyStrings/README.md)
