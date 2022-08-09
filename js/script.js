const openModalButton = document.querySelectorAll(
  '[data-modal-target]'
);
const overlay = document.getElementById('overlay');
const form = document.querySelector('.modal-body');
const cardBody = document.querySelector('.main-card-container');
const readCheckStyle = document.querySelector('.checkbox');

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

readCheckStyle.style.backgroundColor = '#fa8e8e';

function changeReadText(span) {
  if (span.textContent === 'Not read.') {
    span.textContent = 'Read.';
  } else if (span.textContent === 'Read.') {
    span.textContent = 'Not read.';
  }
}

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

function changeRead() {
  readChange.addEventListener('change', (e) => {
    let span = e.target.nextElementSibling;
    // changeReadText(span);
    console.log(span);
  });
}

function displayBooks(bookDiv, newBook) {
  let temp = bookDiv.children[3];
  let tempStyle = temp.children[0];
  let tempText = tempStyle.children[1];
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].isBookRead === false) {
      tempStyle.style.backgroundColor = '#fa8e8e';
      tempText.textContent = 'Not read.';
      cardBody.append(bookDiv);
    } else {
      tempStyle.style.backgroundColor = '#b5cbbb';
      tempText.textContent = 'Read.';
      cardBody.append(bookDiv);
    }
  }
}

function Book(title, author, pages, isBookRead) {
  this.title = title.value;
  this.author = author.value;
  this.pages = pages.value;
  this.isBookRead = isBookRead;
}

Book.prototype.bookReadStatus = function () {
  let readChange = document.querySelector('.check');
  changeRead(readChange);
};

Book.prototype.styling = function (bookDiv) {
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

  let bookReadDiv = document.createElement('div');
  bookReadDiv.classList.add('readStatus');
  let checkBoxDiv = document.createElement('div');
  checkBoxDiv.classList.add('checkbox');
  let checkInput = document.createElement('input');
  checkInput.setAttribute('type', 'checkbox');
  checkInput.classList.add('check');
  checkBoxDiv.appendChild(checkInput);
  let bookReadText = document.createElement('span');
  bookReadText.textContent = 'Not read.';
  checkBoxDiv.appendChild(bookReadText);
  bookReadDiv.appendChild(checkBoxDiv);
  bookDiv.appendChild(bookReadDiv);
};

function addBookToLibrary() {
  let title = document.querySelector('#bookTitle');
  let author = document.querySelector('#author');
  let pages = document.querySelector('#pages');
  let isBookRead = document.querySelector('#addReadStatus').checked;

  let bookDiv = document.createElement('div');
  bookDiv.classList.add('card-container');

  let newBook = new Book(title, author, pages, isBookRead);
  myLibrary.push(newBook);
  newBook.styling(bookDiv);
  displayBooks(bookDiv, newBook);

  console.log(newBook);
  console.log(bookDiv.children[3]);

  closeModal(modal);
}
