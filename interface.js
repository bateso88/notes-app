function interface() {
    let root = document.getElementById('root');
    
    let notebook = new Notebook();
    
    // root.innerHTML = createHeader() + createMainContent() + createFooter();
    root.innerHTML = createNoteCapture() + createMainContent();
     
    let capture = document.getElementById('note-capture')

    capture.innerHTML = notebook.newNote();

    let note = document.getElementById('note');

    note.addEventListener('submit', event => {
        event.preventDefault();
        console.log(event);
        console.log(notetext)
        console.log(notetext.value)
        notebook.addNote(notetext.value);
        notetext.value = "";
        document.getElementById('main-content').innerHTML = notebook.printNotes();
    })

   
}

interface();

function createHeader() {
    return '<div id="header"></div>'
}

function createNoteCapture() {
    return '<div id="note-capture"></div>'
}

function createMainContent() {
    return '<div id="main-content"></div>'
}

function fullScreenNote() {
    return '<div id="full-note"></div>'
}

function createFooter() {
    return '<div id="footer"></div>'
}
