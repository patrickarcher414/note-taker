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

module.exports = router;