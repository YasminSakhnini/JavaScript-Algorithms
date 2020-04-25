const express = require('express');

// Create a new web server
// (usually called app in all Express documentation)
const app = express();

// Create a route
// req = request object
// res = response object
app.get('*', (req, res) => {
  res.send(`<pre>
    Tjena världen!
    Du frågad efter url:en ${req.url}
  </pre>`);
});

// Start the webserver
// tell it what port to listen to
app.listen(3000, () => console.log('Listening on port 3000'));