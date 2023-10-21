import throttle from 'lodash.throttle';

const formElement = document.querySelector('form.feedback-form');
const STORAGE_FORM_DATA_KEY = 'feedback-form-state';
const formData = getFormDataFromStorrage();

if (formData) {
  updateFormWithData(formData);
}

formElement.addEventListener('input', throttle(updateFormDataInStorage, 500));
formElement.addEventListener('submit', submitForm);

function updateFormDataInStorage() {
  localStorage.setItem(
    STORAGE_FORM_DATA_KEY,
    JSON.stringify({
      email: formElement.elements.email.value,
      message: formElement.elements.message.value,
    })
  );
}

function submitForm(e) {
  e.preventDefault();
  e.target.reset();

  console.log(getFormDataFromStorrage());

  localStorage.removeItem(STORAGE_FORM_DATA_KEY);
}

function getFormDataFromStorrage() {
  return JSON.parse(localStorage.getItem(STORAGE_FORM_DATA_KEY));
}

function updateFormWithData({ email, message }) {
  formElement.elements.email.value = email;
  formElement.elements.message.value = message;
}
