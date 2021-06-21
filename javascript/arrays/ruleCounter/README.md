# LeetCode 1773. Count Items Matching a Rule
You are given an array items, where each `items[i] = [typei, colori, namei]` describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:
- `ruleKey == "type"` and `ruleValue == typei`.
- `ruleKey == "color"` and `ruleValue == colori`.
- `ruleKey == "name"` and `ruleValue == namei`.

Return the number of items that match the given rule.

## Approach & Efficiency
1. Create a `counter`  to be returned at end of function.
1. Create an object with key value pairs representing the ruleKey and the index to search for that given type
```
  const indices = { type: 0, color: 1, name: 2 };
  \\ if the ruleKey is 'type', search at index 0
  \\ inf the ruleKey is 'color', soearch at index 1
  \\ inf the ruleKey is 'name', soearch at index 2
```
The same could be acomplished with a series of conditional statements.
1. Use `.forEach()` to iterate over the subArrays
1. If that `subArray[indices[ruleKey]]` is equal to the `ruleValue`, increment the counter. Remember that indices`[ruleKey]` returns the index to search.
1. Return the `counter`.

The Big(O) for this solution is O(n) for time and space.

## Solution
```
const countMatches = (items, ruleKey, ruleValue) => {
  let counter = 0;
  const indices = { type: 0, color: 1, name: 2 };
  // let idx = indices[ruleKey]
  items.forEach((subArray) => {
    if (subArray[indices[ruleKey]] === ruleValue) counter++;
  });
  return counter;
};
```

- [Rule Counter JavaScript](./ruleCounter.js)
- [Running Sum Python](../../../python/code_challenges/arrays/ordered_array/README.md)

