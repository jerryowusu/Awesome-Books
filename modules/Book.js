import printErrorMsg from './errorMsg.js';

let books = JSON.parse(localStorage.getItem('books'));

export default class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  addBook() {
    const { id, title, author } = this;
    const bookObj = { id, title, author };
    books = JSON.parse(localStorage.getItem('books'));
    if (title === '' || author === '') {
      printErrorMsg('Please fill in all the fields');
    } else if (books !== null) {
      books.push(bookObj);
      localStorage.setItem('books', JSON.stringify(books));
      books = JSON.parse(localStorage.getItem('books'));
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
    } else {
      books = [];
      books.push(bookObj);
      localStorage.setItem('books', JSON.stringify(books));
      books = JSON.parse(localStorage.getItem('books'));
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
    }
  }

  removeBook() {
    const { id } = this;
    books = books.filter((book) => {
      if (book.id !== id) {
        return true;
      }
      return false;
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

export function displayBook(id, title, author) {
  const bookList = document.querySelector('#book-list');
  bookList.classList.add('border');
  const li = document.createElement('li');
  li.innerHTML = `<div class="d-flex-only">
    <h2><q>${title}</q></h2>
    <span>by</span>
    <h2>${author}</h2>
    </div>`;
  const removeBookBtn = document.createElement('button');
  removeBookBtn.textContent = 'Remove';
  li.appendChild(removeBookBtn);
  bookList.appendChild(li);
  removeBookBtn.addEventListener('click', () => {
    const book = new Book(id, title, author);
    id = removeBookBtn.id;
    book.removeBook();
    if (li.previousElementSibling === null && li.nextElementSibling === null) {
      bookList.classList.remove('border');
      li.remove();
    } else {
      li.remove();
    }
  });
}
