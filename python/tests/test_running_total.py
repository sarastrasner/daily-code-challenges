import pytest
from code_challenges.arrays.running_total.running_total import runningSum # type: ignore


def test_running_sum():
    list = [1, 2, 3, 4]
    actual = runningSum(list)
    expected = [1, 3, 6, 10]
    assert actual == expected


def test_running_sum_two():
    list = [3, 1, 2, 10, 1]
    actual = runningSum(list)
    expected = [3, 4, 6, 16, 17]
    assert actual == expected