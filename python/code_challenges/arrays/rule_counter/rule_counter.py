def countMatches(items, ruleKey, ruleValue) -> int:
    d = {'type': 0, 'color': 1, 'name': 2}
    return sum(1 for item in items if item[d[ruleKey]] == ruleValue)
