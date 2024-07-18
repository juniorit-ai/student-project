
text = 'Hello, welcome to the world of Python.'
result = text.find('welcome')
print('Substring found at index:', result)
result = text.find('Python', 10, 30)
print('Substring found at index:', result)
result = text.find('Java')
if result == -1:
  print('Substring not found')
