
# Search for files with a specific name
find / -name 'example.txt' 2>/dev/null

# Search for content within files
grep 'keyword' example.txt

# Redirect output to a file
echo 'This is a test' > output.txt

# Pipe commands together
ls -l | grep '.txt'
