from code_challenges.arrays.two_sum.two_sum import twoSum # type: ignore
import pytest

def test_two_sum():
    nums = [2,7,11,15]
    target = 9
    actual = twoSum(nums, target)
    expected = [1,0]
    assert actual == expected


def test_two_sum_two():
    nums = [3,2,4]
    target = 6
    actual = twoSum(nums, target)
    expected = [2,1]
    assert actual == expected


def test_two_sum_three():
    nums = [3,3]
    target = 6
    actual = twoSum(nums, target)
    expected = [1,0]
    assert actual == expected