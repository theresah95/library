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
    this.status = status.toLowerCase();
    this.id = crypto.randomUUID();

    this.printBookInfo = function() { 
        console.log(`${this.title}\n${this.author}\n${this.numPages}\n${this.status}\n${this.id}`);
    };
}
//Function to add books to library
function addBookToLibrary(title, author, numPages, status){
    let book = new Book(title, author, numPages, status);
    myLibrary.push(book);
}

/* Print Library Function */
function printLibrary(){
    for (let i=0; i < myLibrary.length; i++){
        console.log(myLibrary[i].title);
    }
}

/* Filler Books */
addBookToLibrary("Lord of The Rings", "J.R.R. Tolkien", 354, "unread");
addBookToLibrary("Franny and Zoey", "J.D. Salinger", 150, "read");
addBookToLibrary("Catcher in the Rye", "J.D. Salinger", 304, "read");

/* Bookshelf Grid Container Creation */ 
const bookShelf = document.getElementById('bookshelf');

for(let i=0; i < myLibrary.length; i++){
    const newBookCard = document.createElement('div');
    newBookCard.classList.add('book');
    newBookCard.textContent = myLibrary[i].title;
    bookShelf.appendChild(newBookCard);

    const newCheckbox = document.createElement('input');
    newCheckbox.setAttribute('type', 'checkbox');
    newCheckbox.setAttribute('class', 'status-toggle');

    newBookCard.appendChild(newCheckbox);
};

/* Submit Button Functionality */

const submit = document.querySelector("#submit-button");
submit.addEventListener("click", submitAction);

function submitAction(event){
    //Prevents submitting form
    event.preventDefault();
    //Collects relevant info then adds book to myLibrary[]
    let title, author, numPages, status; 
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    numPages = document.getElementById("num-pages").value;
    status = document.getElementById("status").value;
    addBookToLibrary(title, author, numPages, status);
    
    //To test and ensure the correct values are being added to the array 
    //myLibrary.at(-1).printBookInfo();   
    // printLibrary();

    //Adds new book from back of the myLibrary array to the grid 
    const newBookCard = document.createElement('div');
    newBookCard.classList.add('book');
    newBookCard.textContent = myLibrary.at(-1).title;
    //Adds status toggle to book element
    const newCheckbox = document.createElement('input');
    newCheckbox.setAttribute('type', 'checkbox');
    newCheckbox.setAttribute('class', 'status-toggle');    
    // //Add Label to Checkbox
    // const newLabel = document.createElement('label');
    // newLabel.textContent = 'Read/Unread Status';
    // newLabel.setAttribute('for', 'status-toggle');


    
    // newBookCard.appendChild(newLabel);
    newBookCard.appendChild(newCheckbox);
    bookShelf.appendChild(newBookCard);
    

    //Resets input to empty so that you can add another book
    document.getElementById('form').reset();
};

//Toggle Read/Unread



