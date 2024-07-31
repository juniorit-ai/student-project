
                        // Import necessary libraries
                        const ByteBoss = require('byteboss-ai');

                        // Initialize ByteBoss AI Agent
                        const agent = new ByteBoss();

                        // Define a custom task
                        async function performTask() {
                            try {
                                const result = await agent.execute('sampleTask', {data: 'exampleData'});
                                console.log('Task Result:', result);
                            } catch (error) {
                                console.error('Error performing task:', error);
                            }
                        }

                        // Execute the custom task
                        performTask();
                    