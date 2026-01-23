// Настройки по умолчанию
const defaultSettings = {
    theme: 'dark',
    fontSize: 'medium',
    accentColor: '#ff2a2a'
};

// Загрузка настроек
function loadSettings() {
    const saved = localStorage.getItem('siteSettings');
    return saved ? JSON.parse(saved) : defaultSettings;
}

// Сохранение настроек
function saveSettings() {
    const theme = document.querySelector('.theme-btn.active')?.dataset.theme || 'dark';
    const fontSize = document.querySelector('.size-btn.active')?.dataset.size || 'medium';
    const accentColor = document.getElementById('colorCode')?.textContent || '#ff2a2a';
    
    const settings = { theme, fontSize, accentColor };
    localStorage.setItem('siteSettings', JSON.stringify(settings));
    
    // Обновляем текущую страницу
    updateCurrentPage(settings);
    
    showMessage('Настройки сохранены!', 'success');
}

// Обновление текущей страницы
function updateCurrentPage(settings) {
    // Обновляем тему
    document.body.className = '';
    document.body.classList.add(`theme-${settings.theme}`);
    document.body.classList.add(`font-${settings.fontSize}`);
    
    // Обновляем акцентный цвет
    document.documentElement.style.setProperty('--accent-color', settings.accentColor);
    
    // Вычисляем и обновляем hover-цвет
    const hoverColor = calculateHoverColor(settings.accentColor);
    document.documentElement.style.setProperty('--accent-hover', hoverColor);
    
    // Обновляем активные кнопки
    updateActiveButtons(settings);
    updateColorPreview(settings.accentColor);
}

// Вычисление hover-цвета
function calculateHoverColor(hexColor) {
    let color = hexColor.replace('#', '');
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);
    
    const darkenAmount = 0.8;
    const newR = Math.floor(r * darkenAmount);
    const newG = Math.floor(g * darkenAmount);
    const newB = Math.floor(b * darkenAmount);
    
    return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
}

// Обновление активных кнопок
function updateActiveButtons(settings) {
    // Тема
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === settings.theme);
    });
    
    // Размер шрифта
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.size === settings.fontSize);
    });
    
    // Цвет
    document.querySelectorAll('.color-preset').forEach(preset => {
        preset.classList.toggle('active', preset.dataset.color === settings.accentColor);
    });
}

// Обновление предпросмотра цвета
function updateColorPreview(color) {
    const preview = document.getElementById('colorPreview');
    const code = document.getElementById('colorCode');
    
    if (preview) preview.style.backgroundColor = color;
    if (code) code.textContent = color;
}

// Применение кастомного цвета
function applyCustomColor() {
    const r = document.getElementById('red').value;
    const g = document.getElementById('green').value;
    const b = document.getElementById('blue').value;
    
    const color = rgbToHex(r, g, b);
    updateColorPreview(color);
    
    // Временно применяем цвет
    document.documentElement.style.setProperty('--accent-color', color);
    const hoverColor = calculateHoverColor(color);
    document.documentElement.style.setProperty('--accent-hover', hoverColor);
    
    // Снимаем выделение с пресетов
    document.querySelectorAll('.color-preset').forEach(p => p.classList.remove('active'));
}

// Конвертация RGB в HEX
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (parseInt(r) << 16) + (parseInt(g) << 8) + parseInt(b)).toString(16).slice(1);
}

// Сброс настроек
function resetSettings() {
    localStorage.removeItem('siteSettings');
    updateCurrentPage(defaultSettings);
    showMessage('Настройки сброшены!', 'success');
    
    // Сброс слайдеров
    document.getElementById('red').value = 255;
    document.getElementById('green').value = 42;
    document.getElementById('blue').value = 42;
}

// Показать сообщение
function showMessage(text, type) {
    const status = document.getElementById('saveStatus');
    if (!status) return;
    
    status.textContent = text;
    status.className = `save-status show ${type}`;
    
    setTimeout(() => {
        status.classList.remove('show');
    }, 2000);
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    const settings = loadSettings();
    updateCurrentPage(settings);
    
    // Устанавливаем слайдеры
    if (settings.accentColor.startsWith('#')) {
        const color = settings.accentColor.replace('#', '');
        document.getElementById('red').value = parseInt(color.substring(0, 2), 16);
        document.getElementById('green').value = parseInt(color.substring(2, 4), 16);
        document.getElementById('blue').value = parseInt(color.substring(4, 6), 16);
    }
    
    // Обработчики событий
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    document.querySelectorAll('.color-preset').forEach(preset => {
        preset.addEventListener('click', () => {
            const color = preset.dataset.color;
            updateColorPreview(color);
            document.documentElement.style.setProperty('--accent-color', color);
            const hoverColor = calculateHoverColor(color);
            document.documentElement.style.setProperty('--accent-hover', hoverColor);
            
            document.querySelectorAll('.color-preset').forEach(p => p.classList.remove('active'));
            preset.classList.add('active');
            
            // Обновляем слайдеры
            const hex = color.replace('#', '');
            document.getElementById('red').value = parseInt(hex.substring(0, 2), 16);
            document.getElementById('green').value = parseInt(hex.substring(2, 4), 16);
            document.getElementById('blue').value = parseInt(hex.substring(4, 6), 16);
        });
    });
    
    document.querySelectorAll('.color-slider').forEach(slider => {
        slider.addEventListener('input', applyCustomColor);
    });
    
    // Кнопки действий
    document.getElementById('saveBtn')?.addEventListener('click', saveSettings);
    document.getElementById('resetBtn')?.addEventListener('click', resetSettings);
});