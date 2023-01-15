////// **Home page
////** modal-login - modal-register
//**selectors */
const btnLoginForm = document.querySelector('#open-modal-login');
const modalLogin = document.querySelector('#modal-login');
const closeModalLogin = document.querySelector('#close-modal-login');

const openModalRegister = document.querySelector('#open-modal-register');
const modalRegister = document.querySelector('#modal-register');
const closeModalRegister = document.querySelector('#close-modal-register');

const backToModalLogin = document.querySelector('#back-to-modal-login');

//**show the modalLogin */
btnLoginForm.addEventListener('click', () => {
    modalLogin.showModal();
})
//**close the modalLogin */
closeModalLogin.addEventListener('click', () => {
    modalLogin.close();
})
//**close the modalLogin and then show the modalRegister */
openModalRegister.addEventListener('click', () => {
    modalLogin.close();
    modalRegister.showModal();
})
//**close the modalRegister */
closeModalRegister.addEventListener('click', () => {
    modalRegister.close();
})
//**close the modalRegister and then show the modalLogin */
backToModalLogin.addEventListener('click', () => {
    modalRegister.close();
    modalLogin.showModal();
})

////** menu-modal
//**selector */
const showBurgerMenu = document.querySelector('#menu');
const modalBurgerMenu = document.querySelector('#modal-burger-menu');
const closeModalBurgerMenu = document.querySelector('#close-modal-burger-menu');

//**open the burger menu modal */
showBurgerMenu.addEventListener('click', () => {
    modalBurgerMenu.showModal();
    document.body.classList.add('scroll-hidden');
})

//**close the burger menu modal */
closeModalBurgerMenu.addEventListener('click', () => {
    modalBurgerMenu.close();
    document.body.classList.remove('scroll-hidden');
})

