import pytest
from code_challenges.arrays.maximum_subarray.maximum_subarray import maxSubArray # type: ignore


def test_length_of_last_word():
    nums = [-2,1,-3,4,-1,2,1,-5,4]
    actual = maxSubArray(nums)
    expected = 6
    assert actual == expected


def test_length_of_last_word_two():
    nums = [1]
    actual = maxSubArray(nums)
    expected = 1
    assert actual == expected