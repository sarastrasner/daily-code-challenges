import pytest
from code_challenges.arrays.ordered_array.ordered_array import createTargetArray

def test_create_target_array():
  nums = [0,1,2,3,4]
  idx = [0,1,2,2,1]
  actual = createTargetArray(nums, idx)
  expected = [0,4,1,3,2]
  assert actual == expected


def test_create_target_array_two():
  nums = [1,2,3,4,0]
  idx = [0,1,2,3,0]
  actual = createTargetArray(nums, idx)
  expected = [0,1,2,3,4]
  assert actual == expected