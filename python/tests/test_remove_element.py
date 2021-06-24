import pytest
from code_challenges.arrays.remove_element.remove_element import removeElement # type: ignore

def test_removeElement():
    nums = [3,2,2,3]
    val = 3
    actual = removeElement(nums,val)
    expected = 2
    assert actual == expected


def test_removeDuplicates_two():
    nums = [0,1,2,2,3,0,4,2]
    val = 2
    actual = removeElement(nums, val)
    expected = 5
    assert actual == expected

