console.log('test')

let clickButton = document.querySelector('.sec1-h1');
let container = document.querySelector('.sec1-container');
let nameScroll = document.querySelector('.sec4-h1')

clickButton.addEventListener('click', function () {
    container.classList.toggle('open');
    console.log('Click!!')
});


