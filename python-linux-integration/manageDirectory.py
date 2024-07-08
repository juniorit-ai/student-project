
# Managing directories using Python
import os
if not os.path.exists('new_directory'):
    os.makedirs('new_directory')
    print('Directory created successfully.')
else:
    print('Directory already exists.')
