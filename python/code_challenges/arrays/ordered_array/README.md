# LeetCode 389. Create Target Array in the Given Order
Given two arrays of integers nums and index. Your task is to create target array under the following rules:
- Initially target array is empty.
- From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
- Repeat the previous step until there are no elements to read in nums and index.
- Return the target array.

It is guaranteed that the insertion operations will be valid.


## Approach & Efficiency
1. Create a `target` array to be returned at end of function.
1. iterate over `nums`
1. Use `insert()` to insert the element from `nums` at the correct position
```
insert(pos, elmnt)
```
1. Return the `target` array

The Big(O) for this solution is O(n) for time and space.

## Solution
```
def createTargetArray(nums, index):
    target =[]
    for i in range(len(nums)):
        target.insert(index[i], nums[i])
    return target

```

- [Ordered Array JavaScript](../../../../javascript/arrays/orderedArray/README.md)
- [Running Sum Python](./ordered_array.py)