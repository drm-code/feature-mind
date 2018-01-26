// server.js
const path = require('path');
const express = require('express');

const app = express();

// Run the app by serving the static files
// in the public directory
// app.use(express.static(`${__dirname}/public`));
app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/build/static'));
app.use(express.static(path.join(__dirname, 'public')));


// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', (req, res) => {
  // res.sendFile(path.join(`${__dirname}/public/index.html`));
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);