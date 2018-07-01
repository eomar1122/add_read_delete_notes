// var obj = {
//   name: 'Andrew'
// };
// // Convert or stringfy an object to JSON or string
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Andrew", "age": 25}';
// // Convert string or JSON to an object
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);
// console.log(person.name);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};
// originalNoteString
// Convert object to json
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
// note
// convert json to object
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);