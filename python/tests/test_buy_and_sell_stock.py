import pytest
from code_challenges.arrays.buy_and_sell_stock.buy_and_sell_stock import maxProfit # type: ignore

def test_buy_and_sell_stock():
    prices = [7,1,5,3,6,4]
    actual = maxProfit(prices)
    expected = 5
    assert actual == expected


def test_buy_and_sell_stock_two():
    prices = [7,6,4,3,1]
    actual = maxProfit(prices)
    expected = 0
    assert actual == expected
