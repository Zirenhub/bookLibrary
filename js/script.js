const openModalButton = document.querySelectorAll(
  '[data-modal-target]'
);
const overlay = document.getElementById('overlay');
const bookStatus = document.getElementById('check7');
const statusText = document.getElementById('statusText');

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

function Book() {
  // the constructor...
}

function addBookToLibrary() {}
