#!/bin/bash

# Generate SSH key pair
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# Encrypt a file using OpenSSL
openssl enc -aes-256-cbc -salt -in file.txt -out file.txt.enc