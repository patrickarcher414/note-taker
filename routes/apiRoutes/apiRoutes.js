const router = require("express").Router();
const fs = require("fs");
const uniqid = require('uniqid')
let db = require("../../db/db.json");

// GET request for notes
router.get('/notes', (req, res) => {
  db = JSON.parse(fs.readFileSync("./db/db.json", "UTF-8"));
  res.json(db);
});

// POST request for notes
router.post('/notes', (req, res) => {
  let note = {
    title: req.body.title,
    text: req.body.text,
    note_id: uniqid(),
  };
  db.push(note);
  fs.writeFileSync("./db/db.json", JSON.stringify(db));
  res.json(db); 
});


module.exports = router;