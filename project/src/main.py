from list_operations import create_list, access_list_elements
from array_operations import create_array, access_array_elements

if __name__ == '__main__':
    my_list = create_list()
    list_first, list_last = access_list_elements(my_list)
    print(f'List - First element: {list_first}, Last element: {list_last}')

    my_array = create_array()
    array_first, array_last = access_array_elements(my_array)
    print(f'Array - First element: {array_first}, Last element: {array_last}')