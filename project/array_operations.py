import array
array_example = array.array('i', [1, 2, 3, 4, 5])
array_example.append(6)
array_example.extend([7, 8, 9])
array_example.remove(2)
print(array_example)