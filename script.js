console.log('test')

let clickButton = document.querySelector('.h1');
let container = document.querySelector('.container');

clickButton.addEventListener('click', function () {
    container.classList.toggle('open');
    console.log('Click!!')
});

