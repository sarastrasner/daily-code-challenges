# LeetCode 1678: Goal Parser Interpretation

You own a Goal Parser that can interpret a string command. The command consists of an alphabet of `"G"`, `"()"` and/or `"(al)"` in some order. The Goal Parser will interpret `"G"` as the string `"G"`, `"()"` as the string `"o"`, and `"(al)"` as the string `"al"`. The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.

## Approach and Efficiency
1. Since `.replace()` only replaces the first instance of a given string, this function requires the use of regex
1. Chain two `.replace()` methods together to replace the `"()"` and `"(al)"` values.
1. You will need to add `g` to the end of the regex expression to replace all instances of the given strings.
1. You will need to use forward slashes to escape the parentheses, which are special characters.

The time complexity is O(n), since we will have to traverse the entire word twice. O(n) for the first `.replace()` + O(n) for the second `.replace()` simplifies to O(n).

## Solution
- [JavaScript Solution](./goalParser.js)
- [Python Solution]()