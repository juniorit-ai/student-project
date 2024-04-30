def main():
    try:
        # Initialize variables
        a = 10
        b = 'Python'
        # Execute main logic
        result = a + b
        print(f'Result: {result}')
    except TypeError as e:
        print(f'Error: {e}')
if __name__ == '__main__':
    main()