let modalMain = window.modal_main;
let modalSucc = window.modal_success;
modalMain.className = 'modal modal_active'; //Отображение PopUp окна

const content = document.getElementsByClassName('modal__content');
const closed  = content[0].children[0];
const clickBtn = content[0].children[1];

closed.onclick = function() {
    modalMain.className = 'modal';
}


clickBtn.onclick = function() {
    modalMain.className = 'modal';
    modalSucc.className = 'modal modal_active';
}











