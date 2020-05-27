let myLibrary = [];

const myLibrary = findLibrary('library');
const bookTable = document.querySelector('.book-list');
const addButton = document.querySelector('.submit-button');
const BOOK_INPUT = document.querySelectorAll('.book-info input');
const EMPTY_INSTANCE = bookTable.querySelector('.empty-list');
addButton.addEventListener('click', addBook);

function Book(title, author, pages, read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    // do stuff here

}