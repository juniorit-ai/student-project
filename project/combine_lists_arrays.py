list_example = [1, 2, 3]
import array
array_example = array.array('i', [4, 5, 6])
combined = list_example + list(array_example)
print(combined)