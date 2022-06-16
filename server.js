const express = require('express');

const noteData = require('./db/db.json');

const PORT = process.env.PORT || 3001;

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

// GET request for notes
app.get('/api/notes', (req, res) => res.json(noteData));

// POST request for notes
app.post('/api/notes', (req, res) => {
  
  const { title, text } = req.body;

  if (title && text) {
      
    const newNote = {
      title,
      text,
      note_id: uniqid()
    };
  
    const response = {
      status: 'success',
      body: newNote,
    };
  
    res.json(response);
  } else {
    res.json('Error in posting note');
  }
});

app.listen(PORT, () =>
  console.log(`Note Taker app listening at http://localhost:${PORT}`)
);
