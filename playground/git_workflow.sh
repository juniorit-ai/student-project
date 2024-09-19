#!/bin/bash

# Initialize a new Git repository
git init my-project
cd my-project

# Create a new file and add it to the repository
touch README.md
git add README.md

# Commit the changes
git commit -m "Initial commit"

# Create a new repository on GitHub
# (Note: Replace 'your-username' and 'my-project' with your GitHub username and project name)
gh repo create your-username/my-project --public --source=. --remote=origin

# Push the local repository to GitHub
git push -u origin master

# Make changes to the file and commit them
echo "# My Project" >> README.md
git add README.md
git commit -m "Add project title to README"

# Push the changes to GitHub
git push