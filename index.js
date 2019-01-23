const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const membersList = require('./data/member-data.js');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);

app.get('/members', (req, res) => {
  res.json(membersList);
});

const server = http.createServer(app);
server.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}...`);
});
