const myLibrary = [];

class Book {
  constructor(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
  }
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read, self.crypto.randomUUID());
  myLibrary.push(newBook);
}

function createBookCard(book) {
  const {title, author, pages, read, id} = book;
  return `
    <div class="book-card" id="${id}">
      <h3>${title}</h3>
      <p>Author: ${author}</p>
      <p>Pages: ${pages}</p>
      <p>Read: ${read ? 'Yes' : 'No'}</p>
    </div>
  `;
}

let book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 310, true);
let book2 = new Book('1984', 'George Orwell', 328, true);

myLibrary.push(book1);
myLibrary.push(book2);

let modal = document.querySelector('#modal');
let newBookBtn = document.querySelector('#new-book-btn');

newBookBtn.addEventListener('click', () => {
  modal.showModal();
});

let bookContainer = document.querySelector('#book-container');

let allBookToAdd = '';
for (let book of myLibrary) {
  allBookToAdd += createBookCard(book);
}
bookContainer.innerHTML = allBookToAdd;


