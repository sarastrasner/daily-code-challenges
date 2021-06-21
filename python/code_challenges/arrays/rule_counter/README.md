# LeetCode 1773. Count Items Matching a Rule
You are given an array items, where each `items[i] = [typei, colori, namei]` describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:
- `ruleKey == "type"` and `ruleValue == typei`.
- `ruleKey == "color"` and `ruleValue == colori`.
- `ruleKey == "name"` and `ruleValue == namei`.

Return the number of items that match the given rule.

## Approach & Efficiency
1. Create an object with key value pairs representing the ruleKey and the index to search for that given type
```
d = {'type': 0, 'color': 1, 'name': 2}
# if the ruleKey is 'type', search at index 0
# if the ruleKey is 'color', soearch at index 1
# if the ruleKey is 'name', soearch at index 2
```
The same could be acomplished with a series of conditional statements.
1. Use list comprehension to iterate over items: `for item in items`
1. add a conditional to the end: `for item in items if item[d[ruleKey]] == ruleValue`
1. Wrap the entire expression in a sum: `return sum(1 for item in items if item[d[ruleKey]] == ruleValue)`

The Big(O) for this solution is O(n) for time and space.

## Solution
```
def countMatches(items, ruleKey, ruleValue) -> int:
    d = {'type': 0, 'color': 1, 'name': 2}
    return sum(1 for item in items if item[d[ruleKey]] == ruleValue)

```

- [Rule Counter Python](./rule_counter.py)
- [Rule Counter JavaScript](../../../../javascript/arrays/ruleCounter/README.md)