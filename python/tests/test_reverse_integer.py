import pytest
from code_challenges.misc.reverse_integer.reverse_integer import reverse

def test_reverse():
    actual = reverse(123)
    expected = 321
    assert actual == expected


def test_reverse_two():
    actual = reverse(-123)
    expected = -321
    assert actual == expected


def test_reverse_three():
    actual = reverse(120)
    expected = 21
    assert actual == expected

def test_reverse_four():
    actual = reverse(0)
    expected = 0
    assert actual == expected
