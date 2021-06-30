import pytest
from code_challenges.arrays.plus_one.plus_one import plusOne # type: ignore

def test_plusOne():
    nums = [1,2,3]
    val = 3
    actual = plusOne(nums)
    expected = [1,2,4]
    assert actual == expected


def test_removeDuplicates_two():
    nums = [9]
    actual = plusOne(nums)
    expected = [1,0]
    assert actual == expected

def test_removeDuplicates_three():
    nums = [1,6,9]
    actual = plusOne(nums)
    expected = [1,7,0]
    assert actual == expected

