// Integrating custom script with ByteBoss AI Agent
const ByteBoss = require('byteboss-ai');
const agent = new ByteBoss();
agent.runScript('customScript', {data: 'exampleData'});
console.log('Custom script integration complete.');