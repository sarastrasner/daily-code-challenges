import pytest
from code_challenges.arrays.remove_duplicates.remove_duplicates import removeDuplicates # type: ignore

def test_removeDuplicates():
    list = [1,1,2]
    actual = removeDuplicates(list)
    expected = 2
    assert actual == expected


def test_removeDuplicates_two():
    list = [0,0,1,1,1,2,2,3,3,4]
    actual = removeDuplicates(list)
    expected = 5
    assert actual == expected

