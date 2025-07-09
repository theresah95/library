//Array storing all book objects
const myLibrary = [];

//Constructor for books
function Book(title, author, numPages, status) {
    if(!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title; 
    this.author = author;
    this.numPages = numPages;
    this.status = status
    this.id = crypto.randomUUID;

    this.printBookInfo = function() { 
        console.log(`${this.title}\n${this.author}\n${this.numPages}\n${this.status}\n${this.id}`);
    };
}
//Function to add books to library
function addBookToLibrary(title, author, numPages, status){
    //generate a unique id for the book
    let id = crypto.randomUUID();
    let book = new Book(title, author, numPages, status);
    myLibrary.push(book);
}

function printLibrary(){
    for (let i=0; i < myLibrary.length; i++){
        console.log(myLibrary[i].title);
    }
}




addBookToLibrary("Lord of The Rings", "J.R.R. Tolkien", 354, "unread");
addBookToLibrary("Franny and Zoey", "J.D. Salinger", 150, "read");
addBookToLibrary("Catcher in the Rye", "J.D. Salinger", 304, "read");

printLibrary();

const gridContainer = document.getElementById('bookshelf');

for(let i=0; i < myLibrary.length; i++){
    const newGridItem = document.createElement('div');
    newGridItem.classList.add('book');
    newGridItem.textContent = myLibrary[i].title;
    gridContainer.appendChild(newGridItem);
};

