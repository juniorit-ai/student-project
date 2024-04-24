const team = {
  name: 'Dream Team',
  members: [
    { id: 1, name: 'Alice', role: 'Developer' },
    { id: 2, name: 'Bob', role: 'Designer' },
    { id: 3, name: 'Charlie', role: 'Project Manager' }
  ]
};

function updateMemberRole(team, memberId, newRole) {
  const member = team.members.find(m => m.id === memberId);
  if(member) {
    member.role = newRole;
  }
}

updateMemberRole(team, 3, 'Lead Project Manager');
console.log(team);