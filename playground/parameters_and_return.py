# Define the 'process_data' function
def process_data(text, number, data_list):
    # Process the parameters
    uppercase_text = text.upper()
    incremented_number = number + 1
    data_list.append('new item')

    # Create a dictionary with the processed data
    results = {
        'text': uppercase_text,
        'number': incremented_number,
        'list': data_list
    }
    return results

# Example usage of the function
result = process_data('hello', 42, [1, 2, 3])
print(result)