
const ByteBoss = require('byteboss-ai');

// Initialize the ByteBoss AI Agent
const agent = new ByteBoss();

// Perform a basic command
agent.command('greet', 'Hello ByteBoss!', (response) => {
    console.log('Response from ByteBoss:', response);
});

// Another basic interaction
agent.command('analyze', 'Sample data', (analysis) => {
    console.log('Analysis from ByteBoss:', analysis);
});
                    