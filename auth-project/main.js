const { username, password } = require('./user');
const { authenticateUser, displayDashboard } = require('./index');

const role = authenticateUser(username, password);
if (role) {
  displayDashboard(role);
}