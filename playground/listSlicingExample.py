
                        # Define a list of numbers
                        numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                        
                        # Basic slicing: get elements from index 2 to 5
                        slice1 = numbers[2:6]
                        print('Slice from index 2 to 5:', slice1)
                        
                        # Slicing with step: get every second element from index 1 to 7
                        slice2 = numbers[1:8:2]
                        print('Slice with step from index 1 to 7:', slice2)
                        
                        # Slicing with negative indices: get elements from index -5 to -1
                        slice3 = numbers[-5:-1]
                        print('Slice with negative indices from -5 to -1:', slice3)
                        
                        # Full slice: get all elements
                        slice4 = numbers[:]
                        print('Full slice:', slice4)
                    