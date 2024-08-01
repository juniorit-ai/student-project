
import byteboss

# Initialize the ByteBoss AI agent
agent = byteboss.Agent()

# Configure basic settings
agent.set_language('English')
agent.set_response_mode('verbose')

# Example interaction
response = agent.ask('What is the capital of France?')
print(response)
