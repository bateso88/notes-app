function interface() {
    let root = document.getElementById('root');
    
    let notebook = new Notebook();
    
    // root.innerHTML = createHeader() + createMainContent() + createFooter();
    root.innerHTML = createNoteCapture() + createMainContent();
    let notesList = document.getElementById('notes-list');
    
    let capture = document.getElementById('note-capture')
    
    capture.innerHTML = notebook.newNote();
    formInit();

    let noteForm = document.getElementById('note-form');

    noteForm.addEventListener('submit', event => {
        event.preventDefault();
        // console.log(event);
        // console.log(notetext)
        // console.log(notetext.value)
        notebook.addNote(notetext.value);
        notetext.value = "";
        document.getElementById('notes-list').innerHTML = notebook.printNotes();
    })

    notesList.addEventListener('click', (e) => {
        const singleNote = e.path.find((item) => {
          if (item.classList) {
            return item.classList.contains('single-note');
          } else {
            return false;
          }
        });
        if (singleNote) {
          const noteID = singleNote.getAttribute('data-noteID');
          console.log(`Note found: ${notebook.notes[noteID]}`)
        }
    })
}

interface();

function createHeader() {
    return '<div id="header"></div>'
}

function createNoteCapture() {
    return '<div id="note-capture"></div>'
}

function formInit() {
    document.getElementById('notetext').focus();
}

function createMainContent() {
    return '<div id="main-content"><div id="notes-list"></div></div>'
}

function fullScreenNote() {
    return '<div id="full-note"></div>'
}

function createFooter() {
    return '<div id="footer"></div>'
}
