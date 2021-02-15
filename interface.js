function interface() {
    let root = document.getElementById('root');
    
    let model = new Model();
    
    // root.innerHTML = model.sayHello(); 
    // root.innerHTML = "I'm an interface"

    root.innerHTML = createHeader() + createMainContent() + createFooter();

}

interface();

function createHeader() {
    return '<div id="header">Im a header</div>'
}

function createMainContent() {
    return '<div id="main-content">Im a main</div>'
}

function createFooter() {
    return '<div id="footer">Im a footer</div>'
}