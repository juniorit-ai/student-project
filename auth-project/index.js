const authenticateUser = (username, password) => {
  // Dummy user data
  const users = {
    admin: { password: 'adminpass', role: 'admin' },
    user: { password: 'userpass', role: 'user' }
  };
  if (users[username] && users[username].password === password) {
    return users[username].role;
  }
  return false;
};

const displayDashboard = (role) => {
  if (role === 'admin') {
    console.log('Admin Dashboard');
  } else if (role === 'user') {
    console.log('User Dashboard');
  } else {
    console.log('Authentication Failed: Invalid credentials');
  }
};

// Example usage
const role = authenticateUser('admin', 'adminpass');
if (role) {
  displayDashboard(role);
}