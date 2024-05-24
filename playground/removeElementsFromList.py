
# Example list
fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']

# Removing an element by value using remove()
fruits.remove('banana')
print('After remove:', fruits)  # Output: ['apple', 'cherry', 'date', 'elderberry']

# Removing an element by index using pop()
popped_fruit = fruits.pop(2)
print('After pop:', fruits)  # Output: ['apple', 'cherry', 'elderberry']
print('Popped fruit:', popped_fruit)  # Output: 'date'
