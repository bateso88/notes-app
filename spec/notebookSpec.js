

let notebook = new Notebook();
testName("newNote");
testEqual(notebook.newNote(), '<form id="note"><textarea id="notetext" cols="30" rows="10"></textarea><button type="submit">Submit</button></form>');