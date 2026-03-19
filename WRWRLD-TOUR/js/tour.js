// Конфигурация экскурсии
const tourConfig = {
    // ... ваш существующий конфиг остается без изменений ...
    scenes: {
        // Вход/вестибюль
        entrance: {
            id: 'entrance',
            title: 'Вход в школу',
            description: 'Главный вход и вестибюль школы. Здесь находится пост охраны и стенд с расписанием.',
            details: '1 этаж | Режим работы: 7:00 - 22:00',
            image: 'panoramas/entrance.JPG',
            // Точки перехода (стрелки)
            hotSpots: [
                {
                    pitch: -10,
                    yaw: 10,
                    sceneId: 'entrance2',
                    text: 'В коридор 1 этажа',
                    type: 'scene'
                },
            ]
        },
        
        // Коридор 1 этажа
        entrance2: {
            id: 'entrance2',
            title: 'Коридор 1 этажа',
            description: 'Главный коридор первого этажа. Здесь расположены кабинеты начальных классов.',
            details: '1 этаж | Кабинеты 101-108',
            image: 'panoramas/entrance2.JPG',
            hotSpots: [
                {
                    pitch: -10,
                    yaw: 110,
                    sceneId: 'entrance',
                    text: 'Назад к входу',
                    type: 'scene'
                },
                {
                    pitch: -5,
                    yaw: 240,
                    sceneId: 'secondfloorleft',
                    text: 'Подняться по лестнице',
                    type: 'scene'
                },
                {
                    pitch: -5,
                    yaw: -30,
                    sceneId: 'secondfloorright',
                    text: 'Подняться по лестнице',
                    type: 'scene'
                },
                {
                    pitch: -5,
                    yaw: -70,
                    sceneId: 'firstfloor1',
                    text: 'пройти дальше',
                    type: 'scene'
                }
            ]
        },

        firstfloor1: {
            id: 'firstfloor1',
            title: 'Развилка на первом этаже',
            description: 'Кабинет математики. Класс оборудован интерактивной доской и современными партами.',
            details: '',
            image: 'panoramas/firstfloor1.JPG',
            hotSpots: [
                {
                    pitch: -10,
                    yaw: 180,
                    sceneId: 'firstfloorleft1',
                    text: 'Пройти налево',
                    type: 'scene'
                },
                {
                    pitch: -10,
                    yaw: 0,
                    sceneId: 'firstfloorright1',
                    text: 'Пройти направо',
                    type: 'scene'
                },
                {
                    pitch: -10,
                    yaw: 90,
                    sceneId: 'entrance2',
                    text: 'Вернуться ко входу',
                    type: 'scene'
                }
            ]
        },

        firstfloorleft1: {
            id: 'firstfloorleft1',
            title: 'Развилка на первом этаже',
            description: 'Кабинет математики. Класс оборудован интерактивной доской и современными партами.',
            details: '',
            image: 'panoramas/firstfloorleft1.JPG',
            hotSpots: [
                {
                    pitch: -10,
                    yaw: 180,
                    sceneId: 'firstfloorleft2',
                    text: 'Пройти дальше',
                    type: 'scene'
                },
                {
                    pitch: -10,
                    yaw: 0,
                    sceneId: 'firstfloor1',
                    text: 'Вернуться назад',
                    type: 'scene'
                },
            ]
        },

        firstfloorleft2: {
            id: 'firstfloorleft2',
            title: 'Развилка на первом этаже',
            description: 'Кабинет математики. Класс оборудован интерактивной доской и современными партами.',
            details: '',
            image: 'panoramas/firstfloorleft2.JPG',
            hotSpots: [
                {
                    pitch: -10,
                    yaw: 0,
                    sceneId: 'firstfloorleft1',
                    text: 'Вернуться',
                    type: 'scene'
                }
            ]
        },

        firstfloorright1: {
            id: 'firstfloorright1',
            title: 'Развилка на первом этаже',
            description: 'Кабинет математики. Класс оборудован интерактивной доской и современными партами.',
            details: '',
            image: 'panoramas/firstfloorright1.JPG',
            hotSpots: [
                {
                    pitch: -10,
                    yaw: 90,
                    sceneId: 'firstfloorright2',
                    text: 'Пройти к столовой',
                    type: 'scene'
                },
                {
                    pitch: -10,
                    yaw: -90,
                    sceneId: 'firstfloor1',
                    text: 'Вернуться обратно',
                    type: 'scene'
                }
            ]
        },

        firstfloorright2: {
            id: 'firstfloorright1',
            title: 'Развилка на первом этаже',
            description: 'Кабинет математики. Класс оборудован интерактивной доской и современными партами.',
            details: '',
            image: 'panoramas/firstfloorright2.JPG',
            hotSpots: [
                {
                    pitch: -10,
                    yaw: 185,
                    sceneId: 'firstfloorright1',
                    text: 'Пройти к столовой',
                    type: 'scene'
                }
            ]
        },
        
        secondfloorleft: {
            id: '2floorleft',
            title: 'Кабинет 101 - Математика',
            description: 'Кабинет математики. Класс оборудован интерактивной доской и современными партами.',
            details: '1 этаж | Учитель: Петрова М.И. | Вместимость: 25 человек',
            image: 'panoramas/2floorleft.JPG',
            hotSpots: [
                {
                    pitch: -10,
                    yaw: -85,
                    sceneId: 'secondfloorleft1',
                    text: 'Пройти в коридор',
                    type: 'scene'
                },
                {
                    pitch: -40,
                    yaw: 185,
                    sceneId: 'entrance2',
                    text: 'Выйти ко входу',
                    type: 'scene'
                },
                {
                    pitch: -10,
                    yaw: 95,
                    sceneId: 'secondfloor1',
                    text: 'Пройти направо',
                    type: 'scene'
                }
            ]
        },
        
        secondfloorright: {
            id: 'secondfloorright',
            title: 'Школьная столовая',
            description: 'Просторная столовая с уютным дизайном. Есть горячее питание и буфет.',
            details: '1 этаж | Часы работы: 8:00 - 18:00',
            image: 'panoramas/2floorright.JPG',
            hotSpots: [
                {
                    pitch: -10,
                    yaw: 85,
                    sceneId: 'secondfloorright1',
                    text: 'Пройти в коридор',
                    type: 'scene'
                },
                {
                    pitch: -40,
                    yaw: 180,
                    sceneId: 'entrance2',
                    text: 'Выйти ко входу',
                    type: 'scene'
                }
            ]
        },
        
        joycab: {
            id: 'joycab',
            title: 'Спортивный зал',
            description: 'Большой спортивный зал для занятий физкультурой и спортивных секций.',
            details: '2 этаж | Площадь: 250 кв.м. | Оборудование: шведские стенки, маты, мячи',
            image: 'panoramas/joycab.JPG',
            hotSpots: [
                {
                    pitch: -10,
                    yaw: 105,
                    sceneId: 'secondfloorleft',
                    text: 'В коридор',
                    type: 'scene'
                }
            ]
        }
    },
    
    // Порядок для навигации (предыдущая/следующая)
    navigationOrder: ['entrance', 'entrance2', 'secondfloorleft', 'secondfloorright', 'joycab']
};

// Текущая сцена
let currentSceneId = 'entrance';
let viewer = null;

// Кэш предзагруженных изображений
const imageCache = new Map();

// Статус загрузки сцен
const loadingStatus = new Map();

// Очередь загрузки с приоритетами
const loadQueue = {
    high: [],    // текущая сцена и соседние
    medium: [],  // сцены из hotSpots
    low: []      // остальные сцены
};

// Настройки загрузки
const LOAD_CONFIG = {
    maxConcurrent: 2,           // максимум одновременных загрузок
    preloadRadius: 2,           // сколько сцен вперед/назад загружать
    retryAttempts: 3,           // попыток перезагрузки при ошибке
    retryDelay: 2000,           // задержка между попытками (мс)
    progressInterval: 100       // интервал обновления прогресса (мс)
};

// Таймеры для отслеживания времени просмотра
let viewingTimer = null;
let viewingStartTime = null;
const sceneViewingStats = new Map();

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    initTour();
    initUI();
    
    // Запускаем обработку очереди загрузки
    processLoadQueue();
    
    // Начинаем предзагрузку всех сцен
    preloadAllScenes();
});

// Инициализация тура
function initTour() {
    const scene = tourConfig.scenes[currentSceneId];
    
    // Начинаем отсчет времени просмотра
    startViewingTimer(currentSceneId);
    
    // Создаем конфигурацию для Pannellum с улучшенными настройками
    const config = {
        type: 'equirectangular',
        panorama: scene.image,
        autoLoad: true,
        autoRotate: -2,           // Медленное авто-вращение для красоты
        compass: true,
        showControls: true,
        hotSpots: [],
        showZoomCtrl: false,
        keyboardZoom: false,
        mouseZoom: true,
        draggable: true,
        disableKeyboardCtrl: false,
        showFullscreenCtrl: true,
        showChat: false,
        showCopyright: false,
        preview: null,            // Можно добавить preview для быстрой загрузки
        strings: {
            loadButtonLabel: 'Нажмите для загрузки',
            loadingLabel: 'Загрузка...',
            bylineLabel: 'Виртуальный тур'
        }
    };
    
    // Добавляем хотспоты из конфига
    scene.hotSpots.forEach(spot => {
        config.hotSpots.push({
            pitch: spot.pitch,
            yaw: spot.yaw,
            text: spot.text,
            type: spot.type,
            sceneId: spot.sceneId,
            clickHandlerFunc: function() {
                loadScene(spot.sceneId);
            }
        });
    });
    
    // Создаем просмотрщик
    viewer = pannellum.viewer('panorama', config);
    
    // Отслеживаем полную загрузку сцены
    viewer.on('load', function() {
        console.log(`Сцена ${currentSceneId} полностью загружена`);
        updateLoadingStatus(currentSceneId, 'loaded');
        
        // После загрузки текущей сцены начинаем предзагрузку остальных
        prioritizeSceneLoads(currentSceneId);
    });
    
    // Отслеживаем прогресс загрузки
    viewer.on('scenechange-progress', function(progress) {
        updateLoadingProgress(currentSceneId, progress);
    });
    
    // Обновляем интерфейс
    updateUI();
}

// Загрузка другой сцены
function loadScene(sceneId) {
    if (!tourConfig.scenes[sceneId]) {
        console.error('Сцена не найдена:', sceneId);
        return;
    }
    
    // Сохраняем статистику просмотра предыдущей сцены
    stopViewingTimer();
    
    // Мгновенное переключение, если сцена уже загружена
    if (imageCache.has(sceneId)) {
        console.log(`Сцена ${sceneId} уже загружена, переключаем мгновенно`);
        switchToScene(sceneId);
        return;
    }
    
    // Показываем индикатор загрузки
    showLoadingIndicator(sceneId);
    
    // Загружаем и переключаемся
    preloadScene(sceneId, 'high').then(() => {
        switchToScene(sceneId);
        hideLoadingIndicator();
    }).catch(error => {
        console.error(`Ошибка загрузки сцены ${sceneId}:`, error);
        hideLoadingIndicator();
        alert('Не удалось загрузить панораму. Попробуйте еще раз.');
    });
}

// Переключение на уже загруженную сцену
function switchToScene(sceneId) {
    const scene = tourConfig.scenes[sceneId];
    if (!scene) return;
    
    currentSceneId = sceneId;
    
    // Сохраняем текущее положение камеры
    const currentView = viewer.getView();
    
    // Создаем новую конфигурацию
    const config = {
        type: 'equirectangular',
        panorama: scene.image,
        autoLoad: true,
        autoRotate: -2,
        compass: true,
        showControls: true,
        hotSpots: [],
        showZoomCtrl: false,
        keyboardZoom: false,
        mouseZoom: true,
        draggable: true,
        disableKeyboardCtrl: false,
        showFullscreenCtrl: true,
        yaw: currentView.yaw,  // Сохраняем направление взгляда
        pitch: currentView.pitch
    };
    
    // Добавляем хотспоты
    scene.hotSpots.forEach(spot => {
        config.hotSpots.push({
            pitch: spot.pitch,
            yaw: spot.yaw,
            text: spot.text,
            type: spot.type,
            sceneId: spot.sceneId,
            clickHandlerFunc: function() {
                loadScene(spot.sceneId);
            }
        });
    });
    
    // Обновляем просмотрщик
    viewer.destroy();
    viewer = pannellum.viewer('panorama', config);
    
    // Обновляем интерфейс
    updateUI();
    
    // Начинаем отсчет времени просмотра новой сцены
    startViewingTimer(sceneId);
    
    // Обновляем приоритеты загрузки
    prioritizeSceneLoads(sceneId);
}

// Предзагрузка сцены
function preloadScene(sceneId, priority = 'medium') {
    return new Promise((resolve, reject) => {
        // Проверяем, не загружается ли уже
        if (loadingStatus.has(sceneId)) {
            const status = loadingStatus.get(sceneId);
            if (status.status === 'loading') {
                // Добавляем в очередь ожидания
                status.promises.push({ resolve, reject });
                return;
            }
            if (status.status === 'loaded') {
                resolve();
                return;
            }
        }
        
        // Создаем запись о загрузке
        loadingStatus.set(sceneId, {
            status: 'loading',
            progress: 0,
            retries: 0,
            promises: [{ resolve, reject }]
        });
        
        // Добавляем в очередь
        addToQueue(sceneId, priority);
    });
}

// Добавление в очередь с приоритетом
function addToQueue(sceneId, priority) {
    const scene = tourConfig.scenes[sceneId];
    if (!scene) return;
    
    // Проверяем, нет ли уже в очереди
    const queueItem = { sceneId, image: scene.image };
    
    switch(priority) {
        case 'high':
            loadQueue.high.push(queueItem);
            break;
        case 'medium':
            loadQueue.medium.push(queueItem);
            break;
        case 'low':
            loadQueue.low.push(queueItem);
            break;
    }
    
    console.log(`Добавлено в очередь (${priority}): ${sceneId}`);
}

// Обработка очереди загрузки
async function processLoadQueue() {
    let activeLoads = 0;
    
    while (true) {
        // Проверяем, есть ли свободные слоты
        if (activeLoads < LOAD_CONFIG.maxConcurrent) {
            // Берем следующее задание по приоритету
            let nextItem = null;
            
            if (loadQueue.high.length > 0) {
                nextItem = loadQueue.high.shift();
            } else if (loadQueue.medium.length > 0) {
                nextItem = loadQueue.medium.shift();
            } else if (loadQueue.low.length > 0) {
                nextItem = loadQueue.low.shift();
            }
            
            if (nextItem) {
                activeLoads++;
                loadImageWithRetry(nextItem.sceneId, nextItem.image)
                    .then(() => {
                        activeLoads--;
                    })
                    .catch(() => {
                        activeLoads--;
                    });
            }
        }
        
        // Ждем немного перед следующей проверкой
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}

// Загрузка изображения с повторными попытками
function loadImageWithRetry(sceneId, imageSrc, attempt = 1) {
    return new Promise((resolve, reject) => {
        console.log(`Загрузка сцены ${sceneId} (попытка ${attempt})...`);
        
        const img = new Image();
        
        img.onload = () => {
            console.log(`Сцена ${sceneId} успешно загружена`);
            
            // Сохраняем в кэш
            imageCache.set(sceneId, img);
            
            // Обновляем статус
            const status = loadingStatus.get(sceneId);
            if (status) {
                status.status = 'loaded';
                status.progress = 100;
                
                // Уведомляем все ожидающие промисы
                status.promises.forEach(p => p.resolve());
            }
            
            resolve();
        };
        
        img.onerror = (error) => {
            console.error(`Ошибка загрузки ${sceneId} (попытка ${attempt}):`, error);
            
            if (attempt < LOAD_CONFIG.retryAttempts) {
                // Пробуем снова через задержку
                setTimeout(() => {
                    loadImageWithRetry(sceneId, imageSrc, attempt + 1)
                        .then(resolve)
                        .catch(reject);
                }, LOAD_CONFIG.retryDelay);
            } else {
                // Все попытки исчерпаны
                const status = loadingStatus.get(sceneId);
                if (status) {
                    status.promises.forEach(p => p.reject(new Error(`Failed to load ${sceneId}`)));
                }
                reject(error);
            }
        };
        
        img.src = imageSrc;
    });
}

// Приоритизация загрузки на основе текущей сцены
function prioritizeSceneLoads(currentSceneId) {
    console.log('Пересчет приоритетов для сцены:', currentSceneId);
    
    // Очищаем очереди
    loadQueue.high = [];
    loadQueue.medium = [];
    loadQueue.low = [];
    
    const currentIndex = tourConfig.navigationOrder.indexOf(currentSceneId);
    const currentScene = tourConfig.scenes[currentSceneId];
    
    // 1. Высокий приоритет: соседние сцены (вперед/назад)
    for (let i = 1; i <= LOAD_CONFIG.preloadRadius; i++) {
        if (currentIndex - i >= 0) {
            const prevSceneId = tourConfig.navigationOrder[currentIndex - i];
            if (!imageCache.has(prevSceneId) && !isLoading(prevSceneId)) {
                addToQueue(prevSceneId, 'high');
            }
        }
        if (currentIndex + i < tourConfig.navigationOrder.length) {
            const nextSceneId = tourConfig.navigationOrder[currentIndex + i];
            if (!imageCache.has(nextSceneId) && !isLoading(nextSceneId)) {
                addToQueue(nextSceneId, 'high');
            }
        }
    }
    
    // 2. Средний приоритет: все сцены из hotSpots текущей сцены
    const visitedScenes = new Set();
    const scenesToCheck = [currentScene];
    
    while (scenesToCheck.length > 0) {
        const scene = scenesToCheck.shift();
        if (visitedScenes.has(scene.id)) continue;
        visitedScenes.add(scene.id);
        
        scene.hotSpots.forEach(spot => {
            if (spot.sceneId && !imageCache.has(spot.sceneId) && !isLoading(spot.sceneId)) {
                addToQueue(spot.sceneId, 'medium');
                
                // Добавляем в проверку для следующего уровня
                const nextScene = tourConfig.scenes[spot.sceneId];
                if (nextScene && !visitedScenes.has(spot.sceneId)) {
                    scenesToCheck.push(nextScene);
                }
            }
        });
    }
    
    // 3. Низкий приоритет: все остальные сцены
    tourConfig.navigationOrder.forEach(sceneId => {
        if (!imageCache.has(sceneId) && !isLoading(sceneId)) {
            // Проверяем, не добавлена ли уже в высокий или средний
            const inHigh = loadQueue.high.some(item => item.sceneId === sceneId);
            const inMedium = loadQueue.medium.some(item => item.sceneId === sceneId);
            
            if (!inHigh && !inMedium) {
                addToQueue(sceneId, 'low');
            }
        }
    });
    
    console.log('Очередь загрузки:', {
        high: loadQueue.high.length,
        medium: loadQueue.medium.length,
        low: loadQueue.low.length,
        cached: imageCache.size
    });
}

// Предзагрузка всех сцен в фоне
function preloadAllScenes() {
    // Начинаем с приоритетной загрузки на основе первой сцены
    prioritizeSceneLoads(currentSceneId);
    
    // Анализируем частоту переходов для умной предзагрузки
    analyzeNavigationPatterns();
}

// Анализ паттернов навигации
function analyzeNavigationPatterns() {
    // Загружаем статистику из localStorage если есть
    const savedStats = localStorage.getItem('tourViewingStats');
    if (savedStats) {
        const stats = JSON.parse(savedStats);
        stats.forEach((value, key) => {
            sceneViewingStats.set(key, value);
        });
    }
}

// Старт таймера просмотра
function startViewingTimer(sceneId) {
    viewingStartTime = Date.now();
    
    if (viewingTimer) {
        clearInterval(viewingTimer);
    }
    
    // Обновляем статистику каждые 5 секунд
    viewingTimer = setInterval(() => {
        if (viewingStartTime) {
            const viewingTime = Date.now() - viewingStartTime;
            const currentStats = sceneViewingStats.get(sceneId) || { totalTime: 0, visits: 0 };
            currentStats.totalTime += 5000; // Добавляем 5 секунд
            sceneViewingStats.set(sceneId, currentStats);
            
            // Сохраняем в localStorage
            saveViewingStats();
            
            console.log(`Просмотр сцены ${sceneId}: ${currentStats.totalTime/1000} сек`);
        }
    }, 5000);
}

// Остановка таймера просмотра
function stopViewingTimer() {
    if (viewingTimer) {
        clearInterval(viewingTimer);
        viewingTimer = null;
    }
    
    if (viewingStartTime && currentSceneId) {
        const viewingTime = Date.now() - viewingStartTime;
        const currentStats = sceneViewingStats.get(currentSceneId) || { totalTime: 0, visits: 0 };
        currentStats.totalTime += viewingTime;
        currentStats.visits += 1;
        sceneViewingStats.set(currentSceneId, currentStats);
        
        saveViewingStats();
        
        console.log(`Сцена ${currentSceneId} просмотрена ${viewingTime/1000} сек`);
    }
}

// Сохранение статистики
function saveViewingStats() {
    const statsObj = {};
    sceneViewingStats.forEach((value, key) => {
        statsObj[key] = value;
    });
    localStorage.setItem('tourViewingStats', JSON.stringify(statsObj));
}

// Проверка, загружается ли сцена
function isLoading(sceneId) {
    const status = loadingStatus.get(sceneId);
    return status && status.status === 'loading';
}

// Обновление статуса загрузки
function updateLoadingStatus(sceneId, status) {
    if (loadingStatus.has(sceneId)) {
        loadingStatus.get(sceneId).status = status;
    }
}

// Обновление прогресса загрузки
function updateLoadingProgress(sceneId, progress) {
    if (loadingStatus.has(sceneId)) {
        loadingStatus.get(sceneId).progress = progress;
    }
}

// Показать индикатор загрузки
function showLoadingIndicator(sceneId) {
    const scene = tourConfig.scenes[sceneId];
    let loader = document.getElementById('loading-indicator');
    
    if (!loader) {
        loader = document.createElement('div');
        loader.id = 'loading-indicator';
        loader.innerHTML = `
            <div class="loading-spinner"></div>
            <div id="loading-text">Загрузка панорамы...</div>
            <div class="loading-progress">
                <div class="loading-progress-bar"></div>
            </div>
        `;
        
        // Добавляем стили
        const style = document.createElement('style');
        style.textContent = `
            #loading-indicator {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(0,0,0,0.9);
                color: white;
                padding: 30px;
                border-radius: 15px;
                z-index: 1000;
                text-align: center;
                min-width: 250px;
                backdrop-filter: blur(5px);
                box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            }
            
            .loading-spinner {
                border: 4px solid rgba(255,255,255,0.2);
                border-top: 4px solid white;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                animation: spin 1s linear infinite;
                margin: 0 auto 20px;
            }
            
            .loading-progress {
                width: 100%;
                height: 6px;
                background: rgba(255,255,255,0.2);
                border-radius: 3px;
                margin-top: 15px;
                overflow: hidden;
            }
            
            .loading-progress-bar {
                height: 100%;
                background: #4CAF50;
                width: 0%;
                transition: width 0.3s;
            }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            #loading-text {
                font-size: 16px;
                margin: 10px 0;
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(loader);
    }
    
    document.getElementById('loading-text').textContent = 
        `Загрузка: ${scene.title}...`;
    
    loader.style.display = 'block';
    
    // Анимируем прогресс
    let progress = 0;
    const interval = setInterval(() => {
        if (loadingStatus.has(sceneId)) {
            const status = loadingStatus.get(sceneId);
            if (status.progress > progress) {
                progress = status.progress;
                const bar = document.querySelector('.loading-progress-bar');
                if (bar) bar.style.width = progress + '%';
            }
        }
    }, 100);
    
    // Сохраняем interval для очистки
    loader.dataset.interval = interval;
}

// Скрыть индикатор загрузки
function hideLoadingIndicator() {
    const loader = document.getElementById('loading-indicator');
    if (loader) {
        // Очищаем interval
        if (loader.dataset.interval) {
            clearInterval(parseInt(loader.dataset.interval));
        }
        loader.style.display = 'none';
    }
}

// Обновление интерфейса
function updateUI() {
    const scene = tourConfig.scenes[currentSceneId];
    
    document.getElementById('location-name').textContent = scene.title;
    document.getElementById('room-description').textContent = scene.description;
    document.getElementById('room-details').textContent = scene.details;
    
    const currentIndex = tourConfig.navigationOrder.indexOf(currentSceneId);
    
    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');
    
    if (currentIndex > 0) {
        prevBtn.disabled = false;
        prevBtn.onclick = () => loadScene(tourConfig.navigationOrder[currentIndex - 1]);
    } else {
        prevBtn.disabled = true;
    }
    
    if (currentIndex < tourConfig.navigationOrder.length - 1) {
        nextBtn.disabled = false;
        nextBtn.onclick = () => loadScene(tourConfig.navigationOrder[currentIndex + 1]);
    } else {
        nextBtn.disabled = true;
    }
    
    document.getElementById('btn-home').onclick = () => loadScene('entrance');
    
    // Показываем статус загрузки в консоли
    showLoadingStatus();
}

// Показать статус загрузки всех сцен
function showLoadingStatus() {
    console.log('=== СТАТУС ЗАГРУЗКИ ===');
    console.log(`Загружено сцен: ${imageCache.size} из ${Object.keys(tourConfig.scenes).length}`);
    console.log('В очереди:', {
        high: loadQueue.high.length,
        medium: loadQueue.medium.length,
        low: loadQueue.low.length
    });
    
    // Показываем статистику просмотров
    console.log('Статистика просмотров:');
    sceneViewingStats.forEach((stats, sceneId) => {
        console.log(`${sceneId}: ${stats.visits} посещений, ${Math.round(stats.totalTime/1000)} сек`);
    });
}

// Инициализация UI
function initUI() {
    document.getElementById('toggle-map').addEventListener('click', function() {
        document.getElementById('map-container').classList.toggle('collapsed');
    });
    
    document.getElementById('info-toggle').addEventListener('click', function() {
        document.getElementById('info-content').classList.toggle('hidden');
    });
    
    createMapHotspots();
}

// Создание хотспотов на карте
function createMapHotspots() {
    const mapElement = document.getElementById('map-hotspots');
    
    const hotspots = [
        { sceneId: 'entrance', shape: 'circle', coords: '150,100,10' },
        { sceneId: 'entrance2', shape: 'rect', coords: '120,150,180,170' },
        { sceneId: 'secondfloorleft', shape: 'rect', coords: '90,200,130,220' },
        { sceneId: 'secondfloorright', shape: 'rect', coords: '200,200,240,220' },
        { sceneId: 'joycab', shape: 'rect', coords: '150,250,190,270' }
    ];
    
    hotspots.forEach(spot => {
        const area = document.createElement('area');
        area.shape = spot.shape;
        area.coords = spot.coords;
        area.alt = tourConfig.scenes[spot.sceneId]?.title || '';
        area.title = tourConfig.scenes[spot.sceneId]?.title || '';
        area.onclick = (e) => {
            e.preventDefault();
            loadScene(spot.sceneId);
        };
        mapElement.appendChild(area);
    });
}

// Обновление позиции на карте
function updateMapCurrentPosition(sceneId) {
    console.log('Текущая позиция:', sceneId);
}

// Очистка кэша при необходимости
function clearCache() {
    imageCache.clear();
    loadingStatus.clear();
    loadQueue.high = [];
    loadQueue.medium = [];
    loadQueue.low = [];
    console.log('Кэш очищен');
}

// Предзагрузка следующей вероятной сцены на основе статистики
function preloadNextProbableScene() {
    if (!currentSceneId) return;
    
    const stats = sceneViewingStats.get(currentSceneId);
    if (!stats || !stats.transitions) return;
    
    // Находим самый частый переход из текущей сцены
    const sortedTransitions = Object.entries(stats.transitions)
        .sort((a, b) => b[1] - a[1]);
    
    if (sortedTransitions.length > 0) {
        const nextSceneId = sortedTransitions[0][0];
        if (!imageCache.has(nextSceneId) && !isLoading(nextSceneId)) {
            addToQueue(nextSceneId, 'high');
        }
    }
}

// Обработка ошибок загрузки
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        console.error('Ошибка загрузки изображения:', e.target.src);
        // Можно попробовать перезагрузить
    }
});