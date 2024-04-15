# Python code to demonstrate working with student records
# Define a list of student tuples where each tuple contains student ID, name, and a list of courses
students = [(1, 'Alice', ['Math', 'Science']), (2, 'Bob', ['History', 'Art']), (3, 'Charlie', ['Math', 'Science', 'Art'])]

# Define a dictionary for quick ID lookups
student_dict = {1: 'Alice', 2: 'Bob', 3: 'Charlie'}

# Accessing elements and manipulation
# Print out each student's details
for student in students:
    print(f'Student ID: {student[0]}, Name: {student[1]}, Courses: {', '.join(student[2])}')

# Add a new course for Alice
students[0][2].append('English')

# Print updated courses for Alice
print(f'Updated courses for Alice: {students[0][2]}')