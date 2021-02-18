class Notebook {
  constructor() {
    this.notes = [];
    this.links = [];
  }

  newNote() {
    return '<form id="note-form"><textarea id="notetext" cols="56" rows="8"></textarea><button type="submit">Submit</button></form>';
  }

  addNote(note) {
    this.notes.push(note);
    this.storeNotes()
  }

  addLink(link) {
    this.links.push(this.abbreviateNote(link));
    this.storeLinks()
  }

  storeNotes() {
    console.log(this.notes)
    console.log(JSON.stringify(this.notes))
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }

  storeLinks() {
    localStorage.setItem("links", JSON.stringify(this.links));
  }

  retrieveNotes() {
    return JSON.parse(localStorage.getItem("notes"));
  }

  retrieveLinks() {
    return JSON.parse(localStorage.getItem("links"));
  }

  printNotes() {
    let x = this.retrieveNotes()
      .map(
        (note, idx) => `<p class="single-note" data-noteID="${idx}">${note}</p>`
      )
      .join("");
    return x;
  }

  printLinks() {
    let x = this.retrieveLinks()
      .map(
        (link, idx) => `<p class="single-link" data-linkID="${idx}">${link}</p>`
      )
      .join("");
    return x;
  }

  printAll() {
    return this.printLinks() + this.printNotes();
  }

  abbreviateNote(note) {
    return note.substring(0, 20);
  }
}
