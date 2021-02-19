function interface() {
  let root = document.getElementById("root");
  let notebook = new Notebook();
  
  root.innerHTML = createNoteCapture() + createMainContent();

  let capture = document.getElementById("note-capture");

  capture.innerHTML = notebook.newNote();

  let noteForm = document.getElementById("note-form");

  document.getElementById("links-list").innerHTML = notebook.printLinks();

  noteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let formText = notetext.value
    formText = formText.replace(/(\r\n|\n|\r)/gm, ""); // Newline characters were messing up the API fetch - This removes them
    getPostData(formText).then((post) => {
      let rendered = post.emojified_text;
      notebook.addNote(rendered);
      notebook.addLink(rendered);
      document.getElementById("links-list").innerHTML = notebook.printLinks();
      notetext.value = "";
    });
  });
  
  let linksList = document.getElementById('links-list');
  
  linksList.addEventListener('click', (e) => {
    const singleLink = e.path.find((item) => {
    if (item.classList) {
        return item.classList.contains('single-link');
    } else {
        return false;
    }
    });
    if (singleLink) {
        const linkID = singleLink.getAttribute('data-linkID');
        let preNote = linksList.innerHTML;
        linksList.innerHTML = '<div id="full-note">' + notebook.notes[linkID] + '<button id="back" class="btn back"><i class="fas fa-arrow-circle-up"></i></button></div>';
        root.classList.add('collapse')
        document.getElementById('back').addEventListener('click', (e) => {
            linksList.innerHTML = preNote;
            root.classList.remove('collapse')
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
  return '<div id="full-note"></div>';
}

function createFooter() {
  return '<div id="footer"></div>';
}

function getPostData(text) {
  return fetch("https://makers-emojify.herokuapp.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: `{"text": "${text}"}`,
  }).then((response) => {
    return response.json();
  });
}
