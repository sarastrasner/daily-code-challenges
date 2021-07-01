# LeetCode 88. Merge Sorted Array
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 
Example 1:
```
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
```
Example 2:
```
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
```
Example 3:
```
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
```

## Approach & Efficiency
1. Essentially, what we need to do is insert into the back of the `nums1`. We only need to insert until we run out of `nums2` since everything else is already in place at the front of `nums1`.
1. Identify the last index in `num1` and call it `insertPos`
1. Identify the last nonzero number in `nums1` and call it `m`
1. Identify the last nonzero number in `nums2` and call it `n`
1. Create a while loop with a ternary
  1. If nums1's last number is greater than nums2's last number, then nums1[insertPosition] will be the last nonzero number in nums1
  1. If nums1's last number is NOT greater than nums2's last number, then nums1[insertPosition] will be the last number in nums2

## Solution
```
var merge = function (nums1, m, nums2, n) {
    var insertPos = m + n - 1;
    m--; n--;
    while (n >= 0) {
        nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
    }
};
```

- [JavaScript Solution](./mergeSortedArrays.js)
- [Python Solution](../../../python/code_challenges/arrays/merge_sorted_arrays/README.md)