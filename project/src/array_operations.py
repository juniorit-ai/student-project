import array as arr

def create_array():
    return arr.array('i', [1, 2, 3, 4, 5])

def access_array_elements(array):
    return array[0], array[-1]

if __name__ == '__main__':
    my_array = create_array()
    first, last = access_array_elements(my_array)
    print(f'First element: {first}, Last element: {last}')