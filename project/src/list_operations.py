def create_list():
    return [1, 2, 3, 4, 5]

def access_list_elements(lst):
    return lst[0], lst[-1]

if __name__ == '__main__':
    my_list = create_list()
    first, last = access_list_elements(my_list)
    print(f'First element: {first}, Last element: {last}')