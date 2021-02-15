function interface() {
    let root = document.getElementById('root');
    
    let notebook = new Notebook();
    
    root.innerHTML = createHeader() + createMainContent() + createFooter();
     
    let main = document.getElementById('main-content')

    main.innerHTML = notebook.newNote();

    let note = document.getElementById('note');

    note.addEventListener('submit', event => {
        event.preventDefault();
        notebook.addNote(notetext.value);
        document.getElementById('main-content').innerHTML = notebook.printNotes();
    })

   
}

interface();

function createHeader() {
    return '<div id="header">Im a header</div>'
}

function createMainContent() {
    return '<div id="main-content">Im a main</div>'
}

function createFooter() {
    return '<div id="footer">Im a footer</div>'
}
