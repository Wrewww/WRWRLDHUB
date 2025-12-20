const modal = document.getElementById('modal');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const modalTitle = document.getElementById('modal-title');

function openModal(formType) {
    modal.style.display = 'block';
    
    if (formType === 'login') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        modalTitle.textContent = 'Вход';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        modalTitle.textContent = 'Регистрация';
    }
}

function closeModal() {
    modal.style.display = 'none';
}

function switchForm(formType) {
    if (formType === 'login') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        modalTitle.textContent = 'Вход';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        modalTitle.textContent = 'Регистрация';
    }
}

function handleSubmit(event, formType) {
    event.preventDefault();
    
    if (formType === 'login') {
        alert('Вы вошли!');
    } else {
        alert('За альянс!');
    }
    
    setTimeout(closeModal, 500);
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;


function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    slides[index].classList.add('active');
    currentSlide = index;
}


function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}


function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

function startAutoSlide() {
    setInterval(() => {
        nextSlide();
    }, 5000); 
}


window.onload = function() {
    showSlide(0);
    

    startAutoSlide();
    

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            prevSlide();
        } else if (event.key === 'ArrowRight') {
            nextSlide();
        }
    });
};
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}