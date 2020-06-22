let popUP = document.querySelector('.modal');
let backgroundForClose = document.querySelector('.backdrop');

document.querySelector(".button").addEventListener('click', () => {
    backgroundForClose.classList.add('open');
    popUP.classList.add('open');
    document.body.classList.add('forNoScroll');
});

backgroundForClose.addEventListener('click', () => {
    popUP.classList.remove('open');
    backgroundForClose.classList.remove('open');
    document.body.classList.remove('forNoScroll');
});

document.querySelector('.modal__action').addEventListener('click', () => {
    popUP.classList.remove('open');
    backgroundForClose.classList.remove('open');
    document.body.classList.remove('forNoScroll');
})




