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

// router.delete(`/notes/:id`, (req, res) => {
//   // set a global array that manages notes, add/remove from it/  
//   //hit his the get route, user the array to splice and then re-write IN HERE
//   fs.readFile(__dirname + './../db/db.json', (err,data)  => {
//     /* convert json data to array */
//     let thisId = req.params
//      let notes = JSON.parse(data);
//      for (i = 0; i < notes.length; i++) {
//        if(thisId === notes[i].id){
//         notes.splice(thisId, 1)
//         console.log('notes re-written');
//         // fs.writeFile(__dirname + './../db/db.json', JSON.stringify(notes), (err) => {
//         //   if (err) throw err;
          
//         // });
//        }
//      }
//   });
// });

// API Route to Delete
router.delete("/notes/:id", (req, res) => {
  fs.readFile(__dirname + './../db/db.json', (err, data) => {
    let  i = req.params.id;
    let mgr =  data.toString()
    console.log(mgr);
      // data.map(x => {
       
      //   // x.splice(i, 1);
      
      //   // return x.id;
      // })
      // .indexOf(i)
  
   });
});

module.exports = router;