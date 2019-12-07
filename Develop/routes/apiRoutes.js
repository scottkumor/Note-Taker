const router = require("express").Router();
const path = require('path');
const fs = require('fs');

let mgr = [];

/* get the notes */
router.get('/notes', (req, res) => {
  fs.readFile(__dirname + './../db/db.json', (err,data)  => {
    res.json(JSON.parse(data));
  });
});
router.post('/notes', (req, res) => {
  fs.readFile(__dirname + './../db/db.json', (err,data)  => {
      /* convert json data to array */
      let notes = JSON.parse(data);
      let newNote = req.body;
      newNote.id = notes.length + 1;
      notes.push(newNote);
      /* use normal write file to save to db.json */
      fs.writeFile(__dirname + './../db/db.json', JSON.stringify(notes), (err) => {
        if (err) throw err;
        console.log('note saved');
      });
    });
    res.send('post sent');
});

router.delete(`/notes/:id`, (req, res) => {
  // set a global array that manages notes, add/remove from it/  
  //hit his the get route, user the array to splice and then re-write IN HERE
  fs.readFile(__dirname + './../db/db.json', (err,data)  => {
    /* convert json data to array */
    let notes = JSON.parse(data);
    
    //  mgr.push(notes)
       console.log(notes);

    //    fs.writeFile(__dirname + './../db/db.json', JSON.stringify(mgr), (err) => {
    //   if (err) throw err;
    //   console.log('notes re-written');
    // });
  });
  // res.send('delete sent');
});

module.exports = router;