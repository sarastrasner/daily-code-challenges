import pytest
from code_challenges.arrays.rule_counter.rule_counter import countMatches


def test_countMatches():
    items = [["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]]
    ruleKey = "color"
    ruleValue = "silver"
    actual = countMatches(items, ruleKey, ruleValue)
    expected = 1
    assert actual == expected


def test_countMatches_two():
    items = [["phone", "blue", "pixel"], ["computer", "silver", "phone"], ["phone", "gold", "iphone"]]
    ruleKey = "type"
    ruleValue = "phone"
    actual = countMatches(items, ruleKey, ruleValue)
    expected = 2
    assert actual == expected
