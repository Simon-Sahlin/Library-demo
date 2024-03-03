let myLibrary = [];

function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

book.prototype.info = function(){
    return (this.title + " by " + this.author + ", " + this.qpages + " pages, " + (this.read ? "has been read" : "not read yet"));
}

function addBookToLibrary(title, author, pages, read){
    let newBook = new book(title, author, pages, read)
    myLibrary.push(newBook);
}