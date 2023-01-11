//////** modal-login - modal-register
//**reusable selectors */
const btnLoginForm = document.querySelector('#open-modal-login');
const modalLogin = document.querySelector('#modal-login');
const modalRegister = document.querySelector('#modal-register');
const closeModals = document.querySelectorAll('.close-modal');
const openModals = document.querySelectorAll('.open-modal');

//**show the modalLogin */
btnLoginForm.addEventListener('click', () => {
    modalLogin.showModal();
})
//**close the modalLogin */
closeModals[0].addEventListener('click', () => {
    modalLogin.close();
})
//**close the modalLogin and then show the modalRegister */
openModals[0].addEventListener('click', () => {
    modalLogin.close();
    modalRegister.showModal();
})
//**close the modalRegister */
closeModals[1].addEventListener('click', () => {
    modalRegister.close();
})
//**close the modalRegister and then show the modalLogin */
openModals[1].addEventListener('click', () => {
    modalRegister.close();
    modalLogin.showModal();
})

//////** modal-request
//**selector */
const modalRequest = document.querySelector('#modal-request');

openModals[2].addEventListener('click', () => {
    modalRequest.showModal();
})

closeModals[2].addEventListener('click', () => {
    modalRequest.close();
})