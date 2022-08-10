import Book, { displayBook } from './modules/Book.js';
import { seeBooks, addToBooks, linkToContacts } from './modules/eventListeners.js';
import { DateTime } from './modules/luxon.js';

const addBtn = document.querySelector('#add-btn');
const books = JSON.parse(localStorage.getItem('books'));

if (books !== null) {
  books.forEach((book) => {
    displayBook(book.id, book.title, book.author);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const toTitleCase = (str) => str.toLowerCase().split(' ').map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join(' ');
    const id = Date.now();
    const book = new Book(id, toTitleCase(title), toTitleCase(author));
    book.addBook();
    if (title && author) {
      displayBook(book.id, book.title, book.author);
    }
  });
});

const seeListsOfBooks = document.getElementById('list-of-books');
const addNewBook = document.getElementById('add-new-link');
const contactLink = document.getElementById('contact-link');

seeListsOfBooks.addEventListener('click', seeBooks);
addNewBook.addEventListener('click', addToBooks);
contactLink.addEventListener('click', linkToContacts);

const timer = () => {
  const today = DateTime.now();
  const date = document.getElementById('date');
  date.innerText = `${today.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS)}`;
};

timer();
setInterval(() => { timer(); }, 1000);