const openModalButton = document.querySelectorAll(
  '[data-modal-target]'
);
const overlay = document.getElementById('overlay');
const bookStatus = document.getElementById('check7');
const statusText = document.getElementById('statusText');
const form = document.querySelector('.modal-body');
const cardBody = document.querySelector('.main-card-container');

openModalButton.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

bookStatus.addEventListener('change', (e) => {
  if (e.target.checked === true) {
    statusText.textContent = 'Read.';
  }
  if (e.target.checked === false) {
    statusText.textContent = 'Not read.';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

let myLibrary = [];

let bookDiv = document.createElement('div');
bookDiv.classList.add('card-container');

function displayBooks() {
  for (let i = 0; i <= myLibrary.length; i++) {
    cardBody.append(bookDiv);
  }
}

function Book(title, author, pages) {
  this.title = title.value;
  this.author = author.value;
  this.pages = pages.value;

  let titleCreate = document.createElement('div');
  titleCreate.classList.add('bookTitle');
  let titleText = document.createElement('p');
  titleText.textContent = '"' + this.title + '"';
  titleCreate.appendChild(titleText);
  bookDiv.appendChild(titleCreate);

  let authorCreate = document.createElement('div');
  authorCreate.classList.add('bookAuthor');
  let authorText = document.createElement('p');
  authorText.textContent = this.author;
  authorCreate.appendChild(authorText);
  bookDiv.appendChild(authorCreate);

  let pagesCreate = document.createElement('div');
  pagesCreate.classList.add('bookPages');
  let pagesNum = document.createElement('p');
  pagesNum.textContent = this.pages + ' pages';
  pagesCreate.appendChild(pagesNum);
  bookDiv.appendChild(pagesCreate);
}

// let title = '';
// let author = '';
// let pages = '';
let isBookRead = false;

function addBookToLibrary() {
  let title = document.querySelector('#bookTitle');
  let author = document.querySelector('#author');
  let pages = document.querySelector('#pages');
  isBookRead = document.querySelector('#addReadStatus');

  // console.log(title.value);
  // console.log(author.value);
  // console.log(pages.value);
  // console.log(isBookRead.checked);

  let newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
  displayBooks();
  console.log(newBook);

  // closeModal(modal);
}
