def find_element(elements, search_element):
    for element in elements:
        if element == search_element:
            print('Element found!')
            break
    else:
        print('Element not found!')

# Example usage:
find_element([1, 2, 3, 4, 5], 3)
find_element([1, 2, 3, 4, 5], 6)