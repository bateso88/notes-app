

let notebook = new Notebook();
testName("newNote returns HTML for the form to add notes");
testEqual(notebook.newNote(), '<form id="note"><textarea id="notetext" cols="30" rows="10"></textarea><button type="submit">Submit</button></form>');

testName("addNote adds to notes list")
notebook.addNote("a note")
testEqual(notebook.notes.length, 1)

testName("addNote puts note into notes list")
notebook.addNote("a note")
testEqual(notebook.notes[notebook.notes.length - 1], "a note")

testName("addNote definitely puts note into notes list")
notebook.addNote("a note")
testStringOrArrayContains(notebook.notes, "a note")

testName("printNotes makes a new note appear")
notebook.addNote("another")
testStringOrArrayContains(notebook.printNotes(), "<p>another</p>")

