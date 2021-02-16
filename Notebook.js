class Notebook {
    constructor() {
        this.notes = []
    }

    newNote() {
        return '<form id="note-form"><textarea id="notetext" cols="56" rows="8"></textarea><button type="submit">Submit</button></form>'
    }

    addNote(note) {
        this.notes.push(note);
        // console.log(this.notes);
    }

    printNotes() {
        let x = this.notes.map((note, idx) => `<p class="single-note" data-noteID="${idx}>${note}</p>`).join('')
        console.log(x);
        let prefix = "<div id='notes-list'>"
        let suffix = '</div>'
        return prefix + x + suffix;
        // console.log(x.join())
        // return x.join('');
    }
}
