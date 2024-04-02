def print_spreadsheet(spreadsheet):
    for row_index, row in enumerate(spreadsheet):
        for col_index, cell in enumerate(row):
            print(f'Row {row_index}, Column {col_index}: {cell}')

# Example spreadsheet
spreadsheet = [
    ['Product', 'Price', 'Quantity'],
    ['Apples', '1.99', '50'],
    ['Bananas', '0.99', '100'],
    ['Cherries', '2.99', '30'],
]

print_spreadsheet(spreadsheet)