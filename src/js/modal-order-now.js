const openModalBtn = document.getElementById('openModalOrderNowBtn');
const openModalBtnSecond = document.getElementById('openModalOrderNowBtnSecond');
const closeModalBtn = document.getElementById('closeModalOrderNowBtn');
const modal = document.getElementById('modalordernow');
const backdropmodal = document.getElementById('backdropmodalordernow');
const form = document.getElementById('formordernow');

function openModalOrderNow() {
  modal.classList.add('open');
  backdropmodal.classList.add('open');

  document.body.style.overflow = 'hidden'; // Заборонити прокручування фону

  window.addEventListener('keydown', escPress);
}

function clearFormFields() {
  const inputElements = form.querySelectorAll('input');
  const textareaElements = form.querySelectorAll('textarea');
  inputElements.forEach(input => (input.value = ''));
  textareaElements.forEach(textarea => (textarea.value = ''));
}

function closeModalOrderNow() {
  modal.classList.remove('open');
  backdropmodal.classList.remove('open');

  document.body.style.overflow = ''; // Скасувати обмеження прокручування фону
  
  window.removeEventListener('keydown', escPress);
  clearFormFields();
}

window.addEventListener('click', event => {
  if (event.target === backdropmodal) {
    closeModalOrderNow();
  }
});

function escPress(key) {
  if (key.code === 'Escape') {
    closeModalOrderNow();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  clearFormFields(); 
});

openModalBtn.addEventListener('click', openModalOrderNow);
openModalBtnSecond.addEventListener('click', openModalOrderNow);
closeModalBtn.addEventListener('click', closeModalOrderNow);

const feedbackForm = document.querySelector('.ordernow-form');
const nameInput = feedbackForm.querySelector('input[name="name"]');
const phoneInput = feedbackForm.querySelector('input[name="phone"]');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

feedbackForm.addEventListener('input', () => {
  const formData = {
    name: nameInput.value,
    phone: phoneInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

const savedFormData = localStorage.getItem('feedback-form-state');
if (savedFormData) {
  const formData = JSON.parse(savedFormData);
  nameInput.value = formData.name;
  phoneInput.value = formData.phone;
  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    name: nameInput.value,
    phone: phoneInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.removeItem('feedback-form-state'); 

  nameInput.value = '';
  phoneInput.value = '';
  emailInput.value = '';
  messageInput.value = '';

  console.log(formData);
});
