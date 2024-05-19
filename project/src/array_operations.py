import array as arr

def add_element(array, element):
    array.append(element)
    return array

# Example usage
my_array = arr.array('i', [1, 2, 3])
print(add_element(my_array, 4))  # Output: array('i', [1, 2, 3, 4])