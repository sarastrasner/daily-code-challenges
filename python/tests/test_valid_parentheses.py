import pytest
from code_challenges.strings.valid_parentheses.valid_parentheses import isValid # type: ignore

def test_valid_parentheses():
    s = "()"
    actual = isValid(s)
    expected = True
    assert actual == expected


def test_valid_parentheses_two():
    s = "(]"
    actual = isValid(s)
    expected = False
    assert actual == expected

def test_valid_parentheses_three():
    s = "()[]{}"
    actual = isValid(s)
    expected = True
    assert actual == expected


def test_valid_parentheses_four():
    s = "([)]"
    actual = isValid(s)
    expected = False
    assert actual == expected

def test_valid_parentheses_five():
    s = "{[]}"
    actual = isValid(s)
    expected = True
    assert actual == expected