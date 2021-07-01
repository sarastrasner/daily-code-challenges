from code_challenges.arrays.third_maximum_number.third_maximum_number import thirdMax # type: ignore
import pytest

def test_third_max():
    nums = nums = [3,2,1]
    actual = thirdMax(nums)
    expected = 1
    assert actual == expected


def test_third_max_two():
    nums = nums = [1,2]
    actual = thirdMax(nums)
    expected = 2
    assert actual == expected


def test_third_max_three():
    nums = nums = [2,2,3,1]
    actual = thirdMax(nums)
    expected = 1
    assert actual == expected