
                        global_var = 'I am a global variable'

                        def my_function():
                            local_var = 'I am a local variable'
                            print(local_var)
                            print(global_var)

                        my_function()
                        print(global_var)
                        # The following line would cause an error because local_var is not accessible here
                        # print(local_var)
                    