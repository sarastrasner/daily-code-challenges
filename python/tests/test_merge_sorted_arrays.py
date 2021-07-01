import pytest
from code_challenges.arrays.merge_sorted_arrays.merge_sorted_arrays import merge # type: ignore

def test_merge():
    nums1 = [1,2,3,0,0,0]
    m = 3
    nums2 = [2,5,6]
    n = 3
    actual = merge(nums1,m,nums2,n)
    expected = [1,2,2,3,5,6]
    assert actual == expected


def test_merge_two():
    nums1 = [1]
    m = 1
    nums2 = []
    n = 0
    actual = merge(nums1,m,nums2,n)
    expected = [1]
    assert actual == expected

def test_merge_three():
    nums1 = [0]
    m = 0
    nums2 = [1]
    n = 1
    actual = merge(nums1,m,nums2,n)
    expected = [1]
    assert actual == expected