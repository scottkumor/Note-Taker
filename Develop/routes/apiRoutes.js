const router = require("express").Router();
const path = require('path');
const fs = require('fs');

/* get the notes */
router.get('/notes', (req, res) => {
  fs.readFile(__dirname + './../db/db.json', (err, data) => {
    res.json(JSON.parse(data));
  });
});
router.post('/notes', (req, res) => {
  fs.readFile(__dirname + './../db/db.json', (err, data) => {
    /* convert json data to array */
    let notes = JSON.parse(data);
    let newNote = req.body;
    newNote.id = notes.length;
    notes.push(newNote);
    /* use normal write file to save to db.json */
    fs.writeFile(__dirname + './../db/db.json', JSON.stringify(notes), (err) => {
      if (err) throw err;
      console.log('note saved');
    });
  });
  res.send('post sent');
});


// API Route to Delete
router.delete("/notes/:id", (req, res) => {
  fs.readFile(__dirname + './../db/db.json', (err, data) => {
    let index = req.params.id;
    let mgr = JSON.parse(data)
    mgr.splice(index, 1)

    fs.writeFile(__dirname + './../db/db.json', JSON.stringify(mgr), (err) => {
      if (err) throw err;
      console.log("re-written")
    });
  });
});

module.exports = router;