
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;

// Vercel Configuration
// Ensure you have a vercel.json file in the root directory with the following content:
// {
//   "version": 2,
//   "builds": [
//     {
//       "src": "index.js",
//       "use": "@vercel/node"
//     }
//   ],
//   "routes": [
//     {
//       "src": "/(.*)",
//       "dest": "/index.js"
//     }
//   ]
// }
