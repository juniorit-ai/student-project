from list_operations import add_element as add_to_list
from array_operations import add_element as add_to_array

my_list = [1, 2, 3]
my_array = arr.array('i', [1, 2, 3])

print(add_to_list(my_list, 4))  # Output: [1, 2, 3, 4]
print(add_to_array(my_array, 4))  # Output: array('i', [1, 2, 3, 4])