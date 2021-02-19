class Notebook {
  constructor() {
    if (!Object.keys(localStorage).includes("links") || !Object.keys(localStorage).includes("notes"))  {
      this.notes = []
      this.links = []
    } else {
      this.notes = this.retrieveNotes()
      this.links = this.retrieveLinks()
    }
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

  printLinks() {
    let x = this.links
      .map(
        (link, idx) => `<p class="single-link" data-linkID="${idx}">${link}</p>`
      )
      .join("");
    return x;
  }

  abbreviateNote(note) {
    return note.substring(0, 20) + this.dots(note);
  }

  dots(note) {
    if(note.length<20) {
      return ""
    } else {
      return "..."
    }
  }
}
