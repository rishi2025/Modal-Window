'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosedModal = document.querySelector('.closeModal');
const btnOpenModal = document.querySelectorAll('.showModal');

const close = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const open = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

for (let i = 0; i < 3; i++)
    btnOpenModal[i].addEventListener('click', open);

btnClosedModal.addEventListener('click', close)
overlay.addEventListener('click', close);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape')
    {
        if (!modal.classList.contains('hidden'))
            close();
    }
});