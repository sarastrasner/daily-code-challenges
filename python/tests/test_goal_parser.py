import pytest
from code_challenges.strings.goal_parser.goal_parser import interpret


def test_goal_parser():
    command = "G()(al)"
    actual = interpret(command)
    expected = 'Goal'
    assert actual == expected


def test_goal_parser_two():
    command = "G()()()()(al)"
    actual = interpret(command)
    expected = "Gooooal"
    assert actual == expected


def test_goal_parser_three():
    command = "(al)G(al)()()G"
    actual = interpret(command)
    expected = "alGalooG"
    assert actual == expected
