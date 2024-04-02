# Python code to populate a dictionary with user input
user_dict = {}
while True:
    key = input('Enter key (type 'exit' to finish): ')
    if key == 'exit':
        break
    value = input('Enter value for ' + key + ': ')
    user_dict[key] = value
print('Final dictionary:', user_dict)