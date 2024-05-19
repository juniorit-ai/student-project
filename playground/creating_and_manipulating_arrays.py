import array

# Creating an array
arr = array.array('i', [1, 2, 3, 4, 5])

# Adding elements
arr.append(6)

# Removing elements
arr.remove(3)

# Accessing elements
print('First element:', arr[0])
print('Array after modifications:', arr)