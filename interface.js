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
    document.getElementById("main-content").innerHTML = notebook.printAll();
  });
  
   let notesList = document.getElementById('notes-list');

   notesList.addEventListener('click', event => {
        console.log("note was clicked!");
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
  return '<div id="main-content"></div>';
}

function fullScreenNote() {
    return '<div id="full-note"></div>'
}

function createFooter() {
  return '<div id="footer"></div>';
}

function getPostData() {
    return fetch("http://api.openweathermap.org/data/2.5/weather?q=london&appid=39f4e0936bb0edbcca55a829a6e33bc3&units=metric").then(response => {
        // let variable = response.json();    
        // console.log(variable)  
        return response.json()
    })
  }
  
  function renderPost(postData) {
    let postHeadingHTML = `<h1>${postData.title}</h1>`;
    let postWithLinebreaksHTML = postData.body.replaceAll("\n", "<br>\n");
    let postBodyHTML = `<p>${postWithLinebreaksHTML}</p>`;
    return `${postHeadingHTML}${postBodyHTML}`;
  }
  
  getPostData().then(post => {
    let rendered = renderPost(post);
    document.getElementById("main").innerHTML = rendered;
  });

