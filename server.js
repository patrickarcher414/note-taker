const express = require('express');

const PORT = 3001;

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/notes', (req, res) => {
  res.sendFile(__dirname + '/notes.html');
});



app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
