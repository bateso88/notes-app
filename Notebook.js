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
    console.log(this.notes);
  }

  addLink(link) {
    this.links.push(this.abbreviateNote(link));
  }

  storeNote(note) {
    localStorage.setItem("note", note);
  }

  storeLink(link) {
    localStorage.setItem("link", link);
  }

  retrieveNote() {
    return localStorage.getItem("note");
  }

  retrieveLink() {
    return localStorage.getItem("link");
  }

  printNotes() {
    let x = this.notes
      .map(
        (note, idx) => `<p class="single-note" data-noteID="${idx}">${note}</p>`
      )
      .join("");
    return x;
  }

  printLinks() {
    let x = this.links
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
