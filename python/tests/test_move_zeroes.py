import pytest
from code_challenges.arrays.move_zeroes.move_zeroes import moveZeroes # type: ignore

def test_move_zeroes():
    nums = [0,1,0,3,12]
    actual = moveZeroes(nums)
    expected = [1,3,12,0,0]
    assert actual == expected


def test_move_zeroes_two():
    nums = [0]
    actual = moveZeroes(nums)
    expected = [0]
    assert actual == expected