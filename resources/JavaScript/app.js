//** modal-login
const btnLoginForm = document.querySelector('#open-modal-login');
const modalLogin = document.querySelector('#modal-login');
const btnCloseLoginForm = document.querySelector('#close-modal-login');

btnLoginForm.addEventListener('click', () => {
    modalLogin.showModal();
})

btnCloseLoginForm.addEventListener('click', () => {
    modalLogin.close();
})