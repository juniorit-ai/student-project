# array_operations.py

import array

# Functions to demonstrate array operations

def create_array(typecode, elements):
    return array.array(typecode, elements)


def add_element_to_array(arr, element):
    arr.append(element)
    return arr


def remove_element_from_array(arr, element):
    arr.remove(element)
    return arr