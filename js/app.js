// плавная прокрутка

const smoothLinks = document.querySelectorAll('.js-menu-item');
smoothLinks.forEach(smoothLink => {
    smoothLink.addEventListener('click', (Event) => {
        Event.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    })
})

var input = document.querySelector('.questions__form_phone');
var placeholder = input.placeholder;

input.addEventListener('mouseover', () => {
    input.placeholder = '+7-800-500-25-25'
})

input.addEventListener('mouseout', () => {
    input.placeholder = placeholder;
})
