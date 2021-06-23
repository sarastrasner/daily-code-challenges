# Leet Code 14: Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
```
Input: strs = ["flower","flow","flight"]
Output: "fl"
```
Example 2:
```
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```
 
## Approach and Efficiency
1. Escape clause: If the input list is empty, return an empty string
1. This solution relies on the comparing the shortest and longest strings in the list: `shortest_word` and `longest_word`
  1. Say the list is: `["flower","a","fli"]`
  1. `shortest_word` is "a" and `longest_word` is "flower"
1. Iterate over the shortest word, checking to see if `shortest_word[i]` is equal to `longest_word[i]`
  1. If they are not equal, break out of the loop
  1. If they are equal, iterate `i` and continue the for loop
1. Return the shortest_word sliced to the value of `i`. If there are no common letters, shortest_word will be sliced down to the 0th position, which is an empty string.

The  for loop makes this function O(n)

## Solution
```
def longestCommonPrefix(S):
    if not S:
        return ''
    shortest_word, longest_word, i = min(S), max(S), 0
    for i in range(len(shortest_word)):
        if shortest_word[i] != longest_word[i]:
            break
        else:
            i += 1
    return shortest_word[:i]
```
- [Python Solution](./longest_common_prefix.py)
- [Python Solution](../../../../javascript/strings/longestCommonPrefix/README.md)