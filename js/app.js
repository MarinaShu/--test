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

// slider

let offset = 0;
const sliderLine = document.querySelector('.slider__body');

document.querySelector('#btn-next').addEventListener('click', function () {
    offset = offset + 425;
    if (offset > 850) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('#btn-prev').addEventListener('click', function () {
    offset = offset - 425;
    if (offset < 0) {
        offset = 850;
    }
    sliderLine.style.left = -offset + 'px';
});

const dots = document.querySelectorAll('.dot');

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}