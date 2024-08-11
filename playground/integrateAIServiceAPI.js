
                        const axios = require('axios');

                        // Function to send a message to the AI service API and get a response
                        async function getAIResponse(userInput) {
                            try {
                                const response = await axios.post('https://api.example.com/ai', {
                                    message: userInput
                                });
                                console.log('AI Response:', response.data.reply);
                            } catch (error) {
                                console.error('Error communicating with AI service:', error);
                            }
                        }

                        // Example usage
                        const userMessage = 'Hello, AI!';
                        getAIResponse(userMessage);
                    