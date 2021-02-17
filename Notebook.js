class Notebook {
    constructor() {
        this.notes = []
    }

    newNote() {
        return '<form id="note-form"><textarea id="notetext" cols="56" rows="8"></textarea><button type="submit" class="btn-submit"><i class="fas fa-pen-square"></i></button></form>'
    }

    addNote(note) {
        this.notes.push(note);
        // console.log(this.notes);
    }

    printNotes() {
        let x = '<ul>'
        x += this.notes.map((note, idx) => `<li class="single-note" data-noteID="${idx}">${note}</li>`).join('')
        x += '</ul>'
        // console.log(x);
        let prefix = '<div id="notes-list"><ul>'
        let suffix = '</ul></div>'
        // return prefix + x + suffix;
        return x;
        // console.log(x.join())
        // return x.join('');
    }
}
