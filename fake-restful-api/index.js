const { exec } = require('child_process');

// Set port (default: 3000). For Heroku, we need to use
// the port set by the environment variable $PORT
const PORT = process.env.PORT || 8000;

const command = `json-server --watch db.json --port ${PORT}`;

exec(command, (err, stdout, stderr) => {
  if (err) {
    console.log('Error running exec', err);
    return;
  }
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
});
