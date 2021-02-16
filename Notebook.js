class Notebook {
    constructor() {
        this.notes = []
    }

    newNote() {
        return '<form id="note"><textarea id="notetext" cols="56" rows="8"></textarea><button type="submit">Submit</button></form>'
    }

    addNote(note) {
        this.notes.push(note);
        // console.log(this.notes);
    }

    printNotes() {
        let x = this.notes.map(note => `<p>${note}</p>`).join('')
        console.log(x);
        return x;
        // console.log(x.join())
        // return x.join('');
    }
}