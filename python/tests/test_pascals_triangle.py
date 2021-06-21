import pytest
from code_challenges.misc.pascals_triangle import PascalTriangle

def pascals_triangle(capfd):
    PascalTriangle(0)
    out, err = capfd.readouterr()
    assert out == '[]\n'

def pascals_triangle_two(capfd):
    PascalTriangle(1)
    out, err = capfd.readouterr()
    assert out == '[1]\n'


def pascals_triangle_three(capfd):
    PascalTriangle(4)
    out, err = capfd.readouterr()
    assert out == '[1]\n[1, 1]\n[1, 2, 1]\n[1, 3, 3, 1]\n'