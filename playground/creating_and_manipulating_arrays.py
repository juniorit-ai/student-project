\```python
# Creating and manipulating arrays using the `array` module
import array as arr

# Create an array
numbers = arr.array('i', [1, 2, 3, 4, 5])

# Add an element
numbers.append(6)

# Remove an element
numbers.remove(3)

# Access an element
print('Element at index 2:', numbers[2])

# Print the entire array
print('Array:', numbers)
\```