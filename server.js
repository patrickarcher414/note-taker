const express = require('express');

const noteData = require('./db/db.json');

const PORT = 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/notes', (req, res) => {
  res.sendFile(__dirname + '/notes.html');
});

app.get('/api/notes', (req, res) => res.json(noteData));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
