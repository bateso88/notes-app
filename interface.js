function interface() {
  let root = document.getElementById("root");

  let notebook = new Notebook();

  // root.innerHTML = createHeader() + createMainContent() + createFooter();
  root.innerHTML = createNoteCapture() + createMainContent();

  let capture = document.getElementById("note-capture");

  capture.innerHTML = notebook.newNote();

  let noteForm = document.getElementById("note-form");

  // let storedNotes = document.getElementById("local-storage");

  // storedNotes.innerHTML = notebook.retrieveNotes();

  document.getElementById("links-list").innerHTML = notebook.printLinks();

  noteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    getPostData(notetext.value).then((post) => {
      let rendered = post.emojified_text;
      notebook.addNote(rendered);
      notebook.addLink(rendered);
      notetext.value = "";
      document.getElementById("links-list").innerHTML = notebook.printLinks();
    });
  });

  let linksList = document.getElementById("links-list");

  linksList.addEventListener("click", (e) => {
    const singleLink = e.path.find((item) => {
      if (item.classList) {
        return item.classList.contains("single-link");
      } else {
        return false;
      }
    });
    if (singleLink) {
      const linkID = singleLink.getAttribute("data-linkID");
      let preNote = linksList.innerHTML;
      linksList.innerHTML =
        "<h1>" +
        notebook.notes[linkID] +
        "</h1>" +
        '<button id="back">Back</button>';
      document.getElementById("back").addEventListener("click", (e) => {
        linksList.innerHTML = preNote;
      });
    }
  });
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

// function renderPost(postData) {
//     let postHeadingHTML = `<h1>${postData.emojified_text}</h1>`;
//     return `${postHeadingHTML}`;
// }
