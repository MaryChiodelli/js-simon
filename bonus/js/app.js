const slides = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg'
];

const slideElements = [];
let startIndex = 0;

const slidesWrapperEl = document.querySelector('.slides-wrapper');
const arrowRightEL = document.querySelector('.arrow-right');
const arrowLeftEL = document.querySelector('.arrow-left');

// creare il contenuto dello slider
for (let i = 0; i < slides.length; i++) {
    // creare l'elemento li
    const li = document.createElement('li');
    li.classList.add('slide');

    // aggiungo la classe active al primo list item
    if (i === startIndex) {
        li.classList.add('active');
    }

    // crare l'elemento img
    const img = document.createElement('img');
    img.src = slides[i];
    
    // inserire il contenuto dello slider nella pagina
    li.append(img);
    slidesWrapperEl.append(li);
    slideElements.push(li);
}

arrowRightEL.addEventListener('click', function () {
    const currentSlide = slideElements[startIndex];
    let nextSlide;
    
    // SE list item corrente è l'ultima
    if (startIndex === slideElements.length - 1) {
        // aggiungere la classe active al primo list item
        nextSlide = slideElements[0];
        startIndex = 0;
    } else {
        nextSlide = slideElements[startIndex + 1];
        startIndex++;
    }
    
    // togliere la classe active dal list item corrente
    currentSlide.classList.remove('active');
    // aggiungere la classe active al list item successivo
    nextSlide.classList.add('active');
});

arrowLeftEL.addEventListener('click', function () {
    const currentSlide = slideElements[startIndex];
    let prevSlide;
    
    // SE list item corrente è il primo
    if (startIndex === 0) {
        // aggiungere la classe active all'ultimo list item
        prevSlide = slideElements[slideElements.length - 1];
        startIndex = slideElements.length - 1;
    } else {
        prevSlide = slideElements[startIndex - 1];
        startIndex--;
    }
    
    // togliere la classe active dal list item corrente
    currentSlide.classList.remove('active');
    // aggiungere la classe active al list item precedente
    prevSlide.classList.add('active');
});