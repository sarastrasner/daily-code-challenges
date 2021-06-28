import pytest
from code_challenges.strings.roman_to_integer.roman_to_integer import romanToInt # type: ignore

def test_romanToInt():
    actual = romanToInt("III")
    expected = 3
    assert actual == expected


def test_romanToInt_two():
    actual = romanToInt("IV")
    expected = 4
    assert actual == expected


def test_romanToInt_three():
    actual = romanToInt("IX")
    expected = 9
    assert actual == expected

def test_romanToInt_four():
    actual = romanToInt("LVIII")
    expected = 58
    assert actual == expected

def test_romanToInt_fIVE():
    actual = romanToInt("MCMXCIV")
    expected = 1994
    assert actual == expected
