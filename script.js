const myLibrary = []

function Book(title,author){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
}

function addBookToLibrary(title,author){
    let book = new Book(title,author);
    myLibrary.push(book);
    console.log("ADDED ya bois book", myLibrary)
}

console.log(addBookToLibrary("Tomass edison","kute ghela"))