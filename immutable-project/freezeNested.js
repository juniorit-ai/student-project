const team = Object.freeze({
  lead: 'Bob',
  members: ['Charlie', 'Dave']
});

// Incorrect attempt to mutate a frozen object's nested array
// team.members.push('Eve');

// Correct approach using functional methods to handle nested structures
const newMembers = [...team.members, 'Eve'];
const newTeam = {...team, members: newMembers};

console.log(team);
console.log(newTeam);