import pytest
from code_challenges.strings.buddy_strings.buddy_strings import buddyStrings # type: ignore

def test_buddy_strings():
    s = "ab"
    goal = "ba"
    actual = buddyStrings(s,goal)
    expected = True
    assert actual == expected


def test_buddy_strings_two():
    s = "ab"
    goal = "ab"
    actual = buddyStrings(s, goal)
    expected = False
    assert actual == expected

def test_buddy_strings_three():
    s = "aa"
    goal = "aa"
    actual = buddyStrings(s, goal)
    expected = True
    assert actual == expected

def test_buddy_strings_four():
    s = "aaaaaaabc"
    goal = "aaaaaaacb"
    actual = buddyStrings(s, goal)
    expected = True
    assert actual == expected
