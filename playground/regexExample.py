
import re

# Example string
text = 'The quick brown fox jumps over the lazy dog'

# Matching patterns
match_result = re.match(r'The', text)
print('Match Result:', match_result)

# Searching patterns
search_result = re.search(r'brown', text)
print('Search Result:', search_result)
