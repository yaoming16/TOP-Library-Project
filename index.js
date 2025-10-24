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

// Function to add a book
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read, self.crypto.randomUUID());
  myLibrary.push(newBook);
}

// Function to create book card HTML
function createBookCard(book) {
  const {title, author, pages, read, id} = book;
  return `
    <div class="book-card" id="${id}">
      <h3>${title}</h3>
      <p>
        <span>Author:</span>
        <span>${author}</span>
      </p>
      <p>
        <span>Pages:</span>
        <span>${pages}</span>
      </p>
      <p>
        <span>Read:</span>
        <span>${read ? 'Yes' : 'No'}</span>
      </p>
      <div class="book-card-actions">
        <button class="btn-edit btn-primary" onclick="changeRead('${id}')">Read</button>
        <button class="btn-delete btn-primary" onclick="deleteBook('${id}')">Delete</button>
      </div>
    </div>
  `;
}

function changeRead(id) {
  const book = myLibrary.find(book => book.id === id);
  if (book) {
    book.read = !book.read;
    renderBooks();
  }
}

function deleteBook(id) {
  const bookIndex = myLibrary.findIndex(book => book.id === id);
  if (bookIndex !== -1) {
    myLibrary.splice(bookIndex, 1);
    renderBooks();
  }
}

// Sample books
let book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 310, true, self.crypto.randomUUID());
let book2 = new Book('1984', 'George Orwell', 328, true, self.crypto.randomUUID());
let book3 = new Book('To Kill a Mockingbird', 'Harper Lee', 281, true, self.crypto.randomUUID());
let book4 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180, false, self.crypto.randomUUID());
let book5 = new Book('Pride and Prejudice', 'Jane Austen', 432, true, self.crypto.randomUUID());
let book6 = new Book('The Catcher in the Rye', 'J.D. Salinger', 277, false, self.crypto.randomUUID());
let book7 = new Book('Lord of the Flies', 'William Golding', 224, true, self.crypto.randomUUID());
let book8 = new Book('The Chronicles of Narnia', 'C.S. Lewis', 767, false, self.crypto.randomUUID());
let book9 = new Book('Brave New World', 'Aldous Huxley', 268, true, self.crypto.randomUUID());
let book10 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1216, false, self.crypto.randomUUID());
let book11 = new Book('Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', 309, true, self.crypto.randomUUID());
let book12 = new Book('The Alchemist', 'Paulo Coelho', 163, true, self.crypto.randomUUID());

myLibrary.push(book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12);

// Modal and button functionality
let modal = document.querySelector('#modal');
let newBookBtn = document.querySelector('#new-book-btn');

newBookBtn.addEventListener('click', () => {
  modal.showModal();
});

// Render books to the DOM
function renderBooks() {
  let bookContainer = document.querySelector('#book-container');
  let allBookToAdd = '';
  for (let book of myLibrary) {
    allBookToAdd += createBookCard(book);
  }
  bookContainer.innerHTML = allBookToAdd;
}

let bookContainer = document.querySelector('#book-container');
renderBooks();

// Form inputs and submission
let titleInput = document.querySelector('#title-input');
let authorInput = document.querySelector('#author-input');
let pagesInput = document.querySelector('#pages-input');
let readInput = document.querySelector('#read-input');
let submitBtn = document.querySelector('#submit-btn');
let form = document.querySelector('#book-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readInput.checked
  );
  // Re-render book list
  renderBooks();
  // Clear form inputs
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  readInput.checked = false;
  // Close modal
  modal.close();
});



