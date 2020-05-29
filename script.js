const myLibrary = getLibrary('library');
const bookTable = document.querySelector('.book-list');
const addButton = document.querySelector('.submit-button');
const bookInfo = document.querySelectorAll('.book-info input');
const emptyList = bookTable.querySelector('.empty-list');
addButton.addEventListener('click', addBookToLibrary);

function addBookToLibrary() {
	const Book = new BookConstructor(bookInfo[0].value, bookInfo[1].value, parseInt(bookInfo[2].value),
		bookInfo[3].value === 'yes' ? true : false);
	for (let book of bookInfo) {
		book.value = '';
	}
	myLibrary.push(Book);
	buildLibrary();
}

let deleteBook = class {
	handleEvent(event) {
		myLibrary.splice(event.currentTarget.dataset.index, 1);
		buildLibrary();
	}
}
const removeBook = new deleteBook();

function BookConstructor(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function buildLibrary() {
	bookTable.querySelector('tbody').innerHTML = '';
	let index = 0;
	for (let book of myLibrary) {
		const newBookRow = document.createElement('tr');
		newBookRow.innerHTML = `
		<td>${book.title}</td>
		<td>${book.author}</td>
		<td>${book.pages}</td>
		<td>${book.read === false ? 'not read yet' : 'Read'}</td>
		<td><button type="button" data-index=${index} class="delete-book button-base">Delete book</button></td>

		`;
		bookTable.querySelector('tbody').append(newBookRow);
		document.querySelector(`.delete-book[data-index="${index}"]`).addEventListener('click', removeBook);
		++index;
	}
	saveBook(myLibrary);
	if (!bookTable.querySelector('tbody').innerHTML) {
		bookTable.querySelector('tbody').append(emptyList);
	}
}

function saveBook(library) {
	localStorage.setItem('library', JSON.stringify(library));
}

function getLibrary(key) {
	if (!localStorage.getItem(key)) {
		return [];
	}
	return JSON.parse(localStorage.getItem(key));
}
buildLibrary();