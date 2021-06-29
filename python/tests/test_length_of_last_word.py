import pytest
from code_challenges.strings.length_of_last_word.length_of_last_word import lengthOfLastWord # type: ignore


def test_length_of_last_word():
    s = "Hello World"
    actual = lengthOfLastWord(s)
    expected = 5
    assert actual == expected


def test_length_of_last_word_two():
    s = " "
    actual = lengthOfLastWord(s)
    expected = 0
    assert actual == expected