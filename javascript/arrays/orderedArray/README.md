# LeetCode 389. Create Target Array in the Given Order
Given two arrays of integers nums and index. Your task is to create target array under the following rules:
- Initially target array is empty.
- From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
- Repeat the previous step until there are no elements to read in nums and index.
- Return the target array.

It is guaranteed that the insertion operations will be valid.


## Approach & Efficiency
1. Create a `result` array to be returned at end of function.
1. Iterate over the nums array
1. Use `.shift()` to remove the first element from the index array and returns it as `idx`
1. Use `.splice()` to change the content of the results array
```
splice(start, deleteCount, item1)
```
1. Return the `result` array

The Big(O) for this solution is O(n) for time and space.

## Solution
```
const createTargetArray = (nums, index) => {
  let result = [];
  for (let number of nums) {
    let idx = index.shift();
    result.splice(idx, 0, number);
  }
  return result;
};
```

- [Ordered Array JavaScript](./orderedArray.js)
- [Running Sum Python](../../../python/code_challenges/arrays/ordered_array/README.md)