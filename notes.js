console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  // To prevent the program from overwrite the file
  // Use try catch to prevent the program from crash if the file doesn't exist
  try {
    // read the file first
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };


  // Don't add duplicate notes
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }

};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  var notes = fetchNotes();
  var matchedNotes = notes.filter((note) => note.title === title);
  return matchedNotes[0];
};

var removeNote = (title) => {
  // fetch notes
  var notes = fetchNotes();
  // filter notes, removing the one with title of argument
  var filteredNotes = notes.filter((note) => note.title !== title);
  // save new notes array
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};