const myLibrary = []

class Book{
    
    constructor(title,author) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
    }

    
}

function addBookToLibrary(title,author){
    let book = new Book(title,author);
    myLibrary.push(book);
    displayBook(book)
    
}


function displayBook(book) {
    let bookList = document.getElementsByClassName('book-list')[0]
        
        const bookDiv = createDiv("book-card");     
        bookDiv.setAttribute("data-id", book.id);   
        createDiv("title", book.title, bookDiv);
        createDiv("author", book.author, bookDiv); 
        let removeBtn = createButton("remove-button","Remove",bookDiv);
        let readBtn = createButton("read-button","Mark Read",bookDiv);
        removeBtn.addEventListener("click",(e)=> {
            
            e.target.parentElement.remove()
        });
        readBtn.addEventListener("click",(e)=>{
            let parent = e.target.parentElement
            let result = myLibrary.filter((book)=> book.id === parent.dataset.id)
            let b1 = result[0];
            b1.markRead();
            
            
        });
        bookList.appendChild(bookDiv);    

}

function createDiv(className,text,parent){
    
    const div = document.createElement('div');
    div.classList.add(`${className}`);
    if(text) div.textContent = text; 
    if(parent) parent.appendChild(div);
    return div;

}

function createButton(className, text, parent){
    console.log("increate!")
    const button = document.createElement('button');
    button.classList.add(`${className}`);
    console.log("parent",parent)
    button.setAttribute("data-id",parent.dataset.id);
    if(text) button.textContent = text; 
    if(parent) parent.appendChild(button);
    return button;
}

const submit = document.getElementById('submit');

submit.addEventListener("click", submitClick);

function submitClick(event){
    
    event.preventDefault();
    const inputTitle = document.getElementById('input-title');
    const inputAuthor = document.getElementById('input-author');

    addBookToLibrary(inputTitle.value, inputAuthor.value);

    const dialog = document.getElementById("add-book-dialog");
    dialog.close();
    console.log("Library",myLibrary);
}