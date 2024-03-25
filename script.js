let myLibrary = [];
let bookListContainer = document.querySelector("#bookContainer");
let addBookButton = document.querySelector("#addBookButton");

class book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    info(){
        return (this.title + " by " + this.author + ", " + this.qpages + " pages, " + (this.read ? "has been read" : "not read yet"));
    }
}

function addBookToLibrary(title, author, pages, read){
    let newBook = new book(title, author, pages, read)
    myLibrary.push(newBook);

    let container = document.createElement("div")
    let h2 = document.createElement("h3")
    let h3 = document.createElement("h4")
    let p = document.createElement("p")
    let readBut = document.createElement("button")
    let deleteBut = document.createElement("button")

    h2.textContent = title;
    h3.textContent = author;
    p.textContent = pages + " Pages";
    readBut.textContent = read ? "Read" : "Not Read";
    deleteBut.textContent = "Delete"

    container.classList.add("book");
    if (read)
        readBut.classList.add("greenButton");

    readBut.addEventListener("click", ()=>{
        readBut.classList.toggle("greenButton");
        newBook.read = !newBook.read;
        readBut.textContent = newBook.read ? "Read" : "Not Read";
    });
    deleteBut.addEventListener("click", ()=>{
        let bookContainer = deleteBut.parentNode;
        let index = Array.from(bookContainer.parentNode.children).indexOf(bookContainer);
        myLibrary.splice(index, 1);
        bookContainer.remove();
    });

    container.appendChild(h2);
    container.appendChild(h3);
    container.appendChild(p);
    container.appendChild(readBut);
    container.appendChild(deleteBut);
    bookListContainer.appendChild(container);
}

addBookButton.addEventListener("click", (event)=>{
    let newBookForm = {
        title: document.forms["newBook"]["title"].value,
        author: document.forms["newBook"]["author"].value,
        pages: document.forms["newBook"]["pages"].value,
        read: document.forms["newBook"]["read"].checked,
    };

    if(!(newBookForm.title && newBookForm.author && newBookForm.pages))
        return;

    addBookToLibrary(newBookForm.title, newBookForm.author, newBookForm.pages, newBookForm.read);
    document.forms["newBook"].reset()
    event.preventDefault();
});


addBookToLibrary("Harry Potter", "J.K Rowling", 500, false);
addBookToLibrary("Artemis", "Andy Wier", 342, true);
addBookToLibrary("Atomic Habits", "James Clear", 291, false);
addBookToLibrary("Cece är bäst", "Imon", 9999999, true);