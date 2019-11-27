// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = 8080;



// set up the express app to handle data parsing
app.use(express.urlencoded({ extend: true }));
app.use(express.json());
app.use(express.static('public'));

// Routes
// ===========================================================
// general route

// Displays all characters

app.get('/notes', function(req, res) {
  res.sendFile(path.join(__dirname, './public/notes.html'))
  
});
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'))
});


app.get('/api/notes', function(req, res) {
  return res.json(db);
});


// Create New tables - takes in JSON input
app.post('/api/notes', function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newNote = req.body;

  db.push(newNote);

  res.json(newNote);
  
  });

 


// DATA
// =============================================================
const db = [{"title":"Test Title","text":"Test text"}]


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  