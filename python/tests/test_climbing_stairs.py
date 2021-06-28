import pytest
from code_challenges.numbers.climbing_stairs.climbing_stairs import climbStairs # type: ignore

def test_climbing_stairs():
    actual = climbStairs(2)
    expected = 2
    assert actual == expected


def test_climbing_stairs_two():
    actual = climbStairs(3)
    expected = 3
    assert actual == expected


def test_climbing_stairs_three():
    actual = climbStairs(4)
    expected = 5
    assert actual == expected
