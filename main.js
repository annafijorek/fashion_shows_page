// window.innerHeight
//document.documentElement.offsetHeight
//window.scrollY
const rectangle=document.querySelector('.scrollRectangle')
function scrollYStatus(){
    let scrollPosition=window.scrollY/(document.documentElement.offsetHeight-window.innerHeight)*100;

    rectangle.style.width = scrollPosition+"%";
}

window.addEventListener('scroll', scrollYStatus);




const slides = document.querySelectorAll('.slide');
let currentSlideIndex = 0;

document.getElementById('prevBtn').addEventListener('click', () => {
    showSlide(currentSlideIndex - 1);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    showSlide(currentSlideIndex + 1);
});

function showSlide(index) {
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (index + slides.length) % slides.length; 
    slides[currentSlideIndex].classList.add('active');
};


