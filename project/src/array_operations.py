# Python code demonstrating array operations using the array module
import array
my_array = array.array('i', [1, 2, 3, 4])
my_array.append(5)
my_array.remove(2)
print(my_array)