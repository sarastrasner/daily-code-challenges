import pytest
from code_challenges.misc.pascals_triangle.pascals_triangle import PascalTriangle


def test_pascals_triangle(capfd):
    assert PascalTriangle(0) == False
    # PascalTriangle(0)
    # out, err = capfd.readouterr()
    # assert out == '[]\n'

def test_pascals_triangle_two(capfd):
    PascalTriangle(1)
    out, err = capfd.readouterr()
    assert out == '[1]\n'


def test_pascals_triangle_three(capfd):
    PascalTriangle(4)
    out, err = capfd.readouterr()
    assert out == '[1]\n[1, 1]\n[1, 2, 1]\n[1, 3, 3, 1]\n'