def longestCommonPrefix(S):
    if not S:
        return ''
    shortest_word, longest_word, i = min(S), max(S), 0
    for i in range(len(shortest_word)):
        if shortest_word[i] != longest_word[i]:
            break
        else:
            i += 1
    return shortest_word[:i]
