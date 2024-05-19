# list_operations.py

# Functions to demonstrate list operations

def add_elements_to_list(lst, elements):
    for element in elements:
        lst.append(element)
    return lst


def remove_element_from_list(lst, element):
    lst.remove(element)
    return lst