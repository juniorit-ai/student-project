
import byteboss

# Initialize the ByteBoss AI Agent
agent = byteboss.Agent()

# Define a simple task
def simple_task():
    print('Task is running...')

# Schedule the task
task_id = agent.schedule_task(simple_task)

# Check task status
status = agent.get_task_status(task_id)
print(f'Task status: {status}')

# Execute the task
agent.execute_task(task_id)

# Reschedule the task for later execution
agent.reschedule_task(task_id, delay=60)

# Cancel the task
agent.cancel_task(task_id)
