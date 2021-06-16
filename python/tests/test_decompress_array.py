import pytest
from code_challenges.arrays.decompress_array.decompress_array import Solution

my_function = Solution()

def test_decompress_array():
    list = [1, 2, 3, 4]
    actual = my_function.decompressRLElist(list)
    expected = [2,4,4,4]
    assert actual == expected


def test_decompress_array_two():
    list = [1,1,2,3]
    actual = my_function.decompressRLElist(list)
    expected = [1,3,3]
    assert actual == expected