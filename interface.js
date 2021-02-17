function interface() {

  let root = document.getElementById("root");

  let notebook = new Notebook();

  // root.innerHTML = createHeader() + createMainContent() + createFooter();
  root.innerHTML = createNoteCapture() + createMainContent();

  let capture = document.getElementById("note-capture");

  capture.innerHTML = notebook.newNote();
  
  let noteForm = document.getElementById('note-form');

  noteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    notebook.addNote(notetext.value);
    notebook.addLink(notetext.value);
    notetext.value = "";
    document.getElementById("links-list").innerHTML = notebook.printLinks();
  });
  
   let linksList = document.getElementById('links-list');

   linksList.addEventListener('click', (e) => {
    //    console.log(e);
        const singleLink = e.path.find((item) => {
        if (item.classList) {
            return item.classList.contains('single-link');
        } else {
            return false;
        }
        });
        if (singleLink) {
        const linkID = singleLink.getAttribute('data-linkID');
        // console.log(`Note found: ${notebook.links[linkID]}`)
        // window.alert(notebook.notes[linkID]);
        let preNote = linksList.innerHTML;
        linksList.innerHTML = '<h1>' + notebook.notes[linkID] + '</h1>' + '<button id="back">Back</button>';
        document.getElementById('back').addEventListener('click', (e) => {
            linksList.innerHTML = preNote;
        })
        }
})

}

interface();

function createHeader() {
  return '<div id="header"></div>';
}

function createNoteCapture() {
  return '<div id="note-capture"></div>';
}

function createMainContent() {
  return '<div id="main-content"><div id="links-list"></div></div>';
}

function fullScreenNote() {
    return '<div id="full-note"></div>'
}

function createFooter() {
  return '<div id="footer"></div>';
}
