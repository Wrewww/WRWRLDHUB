// ==================== ЗАГРУЗКА НАСТРОЕК ДЛЯ ВСЕХ СТРАНИЦ ====================

function loadSettings() {
    const defaultSettings = {
        theme: 'dark',
        fontSize: 'medium',
        accentColor: '#ff2a2a'
    };
    
    try {
        const saved = localStorage.getItem('siteSettings');
        return saved ? JSON.parse(saved) : defaultSettings;
    } catch (e) {
        console.error('Ошибка загрузки настроек:', e);
        return defaultSettings;
    }
}

function applySettings() {
    const settings = loadSettings();
    
    document.body.className = '';
    document.body.classList.add(`theme-${settings.theme}`);
    document.body.classList.add(`font-${settings.fontSize}`);
    
    document.documentElement.style.setProperty('--accent-color', settings.accentColor);
    
    const hoverColor = darkenColor(settings.accentColor, 20);
    document.documentElement.style.setProperty('--accent-hover', hoverColor);
    
    const rgb = hexToRgb(settings.accentColor);
    if (rgb) {
        document.documentElement.style.setProperty('--accent-rgb', `${rgb.r}, ${rgb.g}, ${rgb.b}`);
    }
}

function darkenColor(hex, percent) {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    
    r = Math.floor(r * (100 - percent) / 100);
    g = Math.floor(g * (100 - percent) / 100);
    b = Math.floor(b * (100 - percent) / 100);
    
    r = r.toString(16).padStart(2, '0');
    g = g.toString(16).padStart(2, '0');
    b = b.toString(16).padStart(2, '0');
    
    return `#${r}${g}${b}`;
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

document.addEventListener('DOMContentLoaded', applySettings);

// ==================== КОД ДЛЯ МОДАЛЬНЫХ ОКОН ====================
const modal = document.getElementById('modal');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const modalTitle = document.getElementById('modal-title');

if (modal && loginForm && registerForm && modalTitle) {
    const modalContent = document.querySelector('.modal-content');
    
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

    if (modalContent) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    window.openModal = openModal;
    window.closeModal = closeModal;
    window.switchForm = switchForm;
    window.handleSubmit = handleSubmit;
}

// ==================== КОД ДЛЯ СЛАЙДЕРА С ИНДИКАТОРАМИ ====================
const slides = document.querySelectorAll('.slide');

if (slides.length > 0) {
    let currentSlide = 0;
    const totalSlides = slides.length;
    let sliderInterval;

    function createIndicators() {
        const indicatorsContainer = document.getElementById('sliderIndicators');
        if (!indicatorsContainer) return;
        
        indicatorsContainer.innerHTML = '';
        
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'slider-indicator';
            if (i === currentSlide) {
                indicator.classList.add('active');
            }
            indicator.addEventListener('click', () => {
                goToSlide(i);
            });
            indicatorsContainer.appendChild(indicator);
        }
    }

    function updateIndicators() {
        const indicators = document.querySelectorAll('.slider-indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        currentSlide = index;
        updateIndicators();
    }

    function goToSlide(index) {
        clearInterval(sliderInterval);
        showSlide(index);
        startAutoSlide();
    }

    function nextSlide() {
        clearInterval(sliderInterval);
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
        startAutoSlide();
    }

    function prevSlide() {
        clearInterval(sliderInterval);
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
        startAutoSlide();
    }

    function startAutoSlide() {
        sliderInterval = setInterval(nextSlide, 5000);
    }

    window.prevSlide = prevSlide;
    window.nextSlide = nextSlide;
    window.goToSlide = goToSlide;

    function initSlider() {
        if (slides.length > 0) {
            createIndicators();
            showSlide(0);
            startAutoSlide();
            
            document.addEventListener('keydown', function(event) {
                if (event.key === 'ArrowLeft') {
                    prevSlide();
                } else if (event.key === 'ArrowRight') {
                    nextSlide();
                }
            });
            
            const sliderSection = document.querySelector('.slider-section');
            if (sliderSection) {
                sliderSection.addEventListener('mouseenter', () => {
                    clearInterval(sliderInterval);
                });
                
                sliderSection.addEventListener('mouseleave', () => {
                    startAutoSlide();
                });
            }
        }
    }

    window.addEventListener('load', initSlider);
    document.addEventListener('DOMContentLoaded', initSlider);
}