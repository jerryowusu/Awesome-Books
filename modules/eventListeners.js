const seeListsOfBooks = document.getElementById('list-of-books');
const addNewBook = document.getElementById('add-new-link');
const contactLink = document.getElementById('contact-link');

export default function seeBooks() {
  seeListsOfBooks.classList.add('active');
  addNewBook.classList.remove('active');
  contactLink.classList.remove('active');
  document.getElementById('awesome-books').classList.remove('hide');
  document.getElementById('add-book').classList.add('hide');
  document.getElementById('contact-us').classList.add('hide');
}

export function addToBooks() {
  seeListsOfBooks.classList.remove('active');
  addNewBook.classList.add('active');
  contactLink.classList.remove('active');
  document.getElementById('add-book').classList.remove('hide');
  document.getElementById('awesome-books').classList.add('hide');
  document.getElementById('contact-us').classList.add('hide');
}

export function linkToContacts() {
  seeListsOfBooks.classList.remove('active');
  addNewBook.classList.remove('active');
  contactLink.classList.add('active');
  document.getElementById('contact-us').classList.remove('hide');
  document.getElementById('awesome-books').classList.add('hide');
  document.getElementById('add-book').classList.add('hide');
}