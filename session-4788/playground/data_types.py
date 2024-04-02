# Example of data type conversion in Python
age = '23' # String
age_int = int(age) # Convert string to integer
print(age_int)

# Convert integer to float
age_float = float(age_int)
print(age_float)

# Convert float to string
age_str = str(age_float)
print(age_str)

# Convert string to boolean
is_adult = bool(age_str)
print(is_adult)