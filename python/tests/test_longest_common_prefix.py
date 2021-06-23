import pytest
from code_challenges.strings.longest_common_prefix.longest_common_prefix import longestCommonPrefix # type: ignore

def test_goal_parser():
    strs = ['flower','flow','flight'];
    actual = longestCommonPrefix(strs)
    expected = 'fl'
    assert actual == expected


def test_goal_parser_two():
    strs = ['go','goat','goad']
    actual = longestCommonPrefix(strs)
    expected = "go"
    assert actual == expected


def test_goal_parser_three():
    strs = ['dog','racecar','car']
    actual = longestCommonPrefix(strs)
    expected = ""
    assert actual == expected

def test_goal_parser_four():
    strs = []
    actual = longestCommonPrefix(strs)
    expected = ""
    assert actual == expected
