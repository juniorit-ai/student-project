const tasks = [];

function addTask(task) {
  tasks.push(task);
  console.log(`Task added: ${task}`);
  console.log('Current tasks:', tasks);
}

function completeLastTask() {
  const completedTask = tasks.pop();
  console.log(`Completed task: ${completedTask}`);
  console.log('Remaining tasks:', tasks);
}

// Example usage:
addTask('Learn JavaScript');
addTask('Practice array manipulation');
completeLastTask();