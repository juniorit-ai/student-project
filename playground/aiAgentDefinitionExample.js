
                        // Simple AI Agent Example
                        // This agent is designed to greet a user and provide information based on predefined rules

                        function aiAgent(userInput) {
                            if (userInput.includes('hello') || userInput.includes('hi')) {
                                return 'Hello! How can I assist you today?';
                            }
                            else if (userInput.includes('weather')) {
                                return 'The weather is sunny today. Enjoy your day!';
                            }
                            else if (userInput.includes('bye')) {
                                return 'Goodbye! Have a great day!';
                            }
                            else {
                                return 'I'm sorry, I don't understand. Can you please rephrase?';
                            }
                        }

                        // Example interactions
                        console.log(aiAgent('hello'));
                        console.log(aiAgent('What is the weather today?'));
                        console.log(aiAgent('bye'));
                    