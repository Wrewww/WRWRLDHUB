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

// Глобальное состояние
let currentSceneId = 'entrance';
let viewer = null;

// Кэш ВСЕХ панорам (ключ - sceneId, значение - Image)
const panoramaCache = new Map();

// Статус загрузки каждой панорамы
const loadingStatus = new Map();

// Прогресс общей загрузки
let totalScenes = Object.keys(tourConfig.scenes).length;
let loadedScenes = 0;

// Флаг, что все панорамы загружены
let allScenesLoaded = false;

// Очередь загрузки (максимум 2 одновременных загрузки)
let activeLoads = 0;
const MAX_CONCURRENT_LOADS = 2;
const loadQueue = [];

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Показываем экран загрузки
    showFullscreenLoader();
    
    // Начинаем загрузку ВСЕХ панорам сразу
    loadAllPanoramas();
    
    // Инициализируем первую панораму после небольшой задержки
    setTimeout(() => {
        initFirstScene();
    }, 500);
    
    initUI();
});

// Загрузка ВСЕХ панорам в фоне
function loadAllPanoramas() {
    console.log('Начинаем загрузку всех панорам...');
    
    // Получаем список всех изображений
    const scenes = Object.values(tourConfig.scenes);
    
    // Создаем очередь загрузки
    scenes.forEach(scene => {
        loadQueue.push({
            sceneId: scene.id,
            imageSrc: scene.image,
            priority: scene.id === 'entrance' ? 1 : 2 // Приоритет для первой сцены
        });
    });
    
    // Сортируем по приоритету
    loadQueue.sort((a, b) => a.priority - b.priority);
    
    // Запускаем загрузку
    processLoadQueue();
}

// Обработка очереди загрузки
function processLoadQueue() {
    while (activeLoads < MAX_CONCURRENT_LOADS && loadQueue.length > 0) {
        const nextItem = loadQueue.shift();
        activeLoads++;
        loadPanorama(nextItem.sceneId, nextItem.imageSrc);
    }
}

// Загрузка одной панорамы
function loadPanorama(sceneId, imageSrc) {
    console.log(`Загрузка: ${sceneId}...`);
    
    loadingStatus.set(sceneId, { status: 'loading', progress: 0 });
    
    const img = new Image();
    
    img.onload = () => {
        console.log(`✅ Загружена: ${sceneId}`);
        
        // Сохраняем в кэш
        panoramaCache.set(sceneId, img);
        loadingStatus.set(sceneId, { status: 'loaded', progress: 100 });
        
        loadedScenes++;
        updateLoadingProgress();
        
        activeLoads--;
        processLoadQueue();
        
        // Если это первая сцена, скрываем загрузку
        if (sceneId === 'entrance') {
            setTimeout(() => {
                hideFullscreenLoader();
            }, 1000);
        }
        
        // Если все загружено
        if (loadedScenes === totalScenes) {
            allScenesLoaded = true;
            console.log('🎉 Все панорамы загружены!');
            showNotification('Все панорамы загружены, можно гулять!');
        }
    };
    
    img.onerror = (error) => {
        console.error(`❌ Ошибка загрузки ${sceneId}:`, error);
        
        // Пробуем снова через 2 секунды
        setTimeout(() => {
            console.log(`Повторная попытка загрузки ${sceneId}...`);
            loadQueue.unshift({ sceneId, imageSrc, priority: 1 });
            processLoadQueue();
        }, 2000);
        
        activeLoads--;
        processLoadQueue();
    };
    
    // Добавляем поддержку прогресса
    img.onprogress = (event) => {
        if (event.lengthComputable) {
            const progress = Math.round((event.loaded / event.total) * 100);
            loadingStatus.set(sceneId, { status: 'loading', progress });
            updateLoadingProgress();
        }
    };
    
    img.src = imageSrc;
}

// Обновление прогресса загрузки
function updateLoadingProgress() {
    const totalProgress = Math.round((loadedScenes / totalScenes) * 100);
    
    // Обновляем прогресс-бар
    const progressBar = document.getElementById('loading-progress-bar');
    const progressText = document.getElementById('loading-progress-text');
    
    if (progressBar) {
        progressBar.style.width = totalProgress + '%';
    }
    
    if (progressText) {
        progressText.textContent = `Загружено ${loadedScenes} из ${totalScenes} панорам (${totalProgress}%)`;
    }
}

// Инициализация первой сцены
function initFirstScene() {
    const scene = tourConfig.scenes['entrance'];
    
    // Проверяем, загружена ли уже панорама
    if (panoramaCache.has('entrance')) {
        showScene('entrance');
    } else {
        // Ждем загрузки первой сцены
        const checkInterval = setInterval(() => {
            if (panoramaCache.has('entrance')) {
                clearInterval(checkInterval);
                showScene('entrance');
            }
        }, 100);
    }
}

// Показать сцену (мгновенно из кэша)
function showScene(sceneId) {
    console.log(`Показываем сцену: ${sceneId}`);
    
    const scene = tourConfig.scenes[sceneId];
    const cachedImage = panoramaCache.get(sceneId);
    
    if (!cachedImage && !allScenesLoaded) {
        console.log(`Сцена ${sceneId} еще не загружена, показываем загрузку...`);
        showMiniLoader(sceneId);
        
        // Ждем загрузку
        const checkInterval = setInterval(() => {
            if (panoramaCache.has(sceneId)) {
                clearInterval(checkInterval);
                hideMiniLoader();
                showScene(sceneId);
            }
        }, 100);
        return;
    }
    
    // Создаем конфигурацию
    const config = {
        type: 'equirectangular',
        panorama: scene.image, // Pannellum сам использует кэш браузера
        autoLoad: true,
        autoRotate: -2,
        compass: true,
        showControls: true,
        hotSpots: [],
        showZoomCtrl: false,
        keyboardZoom: false,
        mouseZoom: true,
        draggable: true,
        showFullscreenCtrl: true,
        // Плавный переход
        sceneFadeDuration: 500
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
                // Мгновенное переключение
                switchToScene(spot.sceneId);
            }
        });
    });
    
    // Если уже есть viewer, уничтожаем
    if (viewer) {
        // Плавно затемняем
        const panoramaDiv = document.getElementById('panorama');
        panoramaDiv.style.transition = 'opacity 0.3s';
        panoramaDiv.style.opacity = '0';
        
        setTimeout(() => {
            try {
                viewer.destroy();
            } catch (e) {}
            
            viewer = pannellum.viewer('panorama', config);
            
            // Плавно появляемся
            setTimeout(() => {
                panoramaDiv.style.opacity = '1';
            }, 100);
        }, 300);
    } else {
        viewer = pannellum.viewer('panorama', config);
    }
    
    currentSceneId = sceneId;
    updateUI();
    
    // Предзагружаем связанные сцены, если они еще не загружены
    scene.hotSpots.forEach(spot => {
        if (!panoramaCache.has(spot.sceneId)) {
            loadPanoramaIfNeeded(spot.sceneId);
        }
    });
}

// Переключение на другую сцену (мгновенное)
function switchToScene(sceneId) {
    if (!tourConfig.scenes[sceneId]) return;
    
    // Проверяем, загружена ли сцена
    if (panoramaCache.has(sceneId)) {
        // Мгновенное переключение
        showScene(sceneId);
    } else {
        // Если не загружена, показываем мини-загрузку
        console.log(`Сцена ${sceneId} еще загружается...`);
        showMiniLoader(sceneId);
        
        // Ждем загрузку
        const checkInterval = setInterval(() => {
            if (panoramaCache.has(sceneId)) {
                clearInterval(checkInterval);
                hideMiniLoader();
                showScene(sceneId);
            }
        }, 100);
        
        // Форсируем загрузку
        loadPanoramaIfNeeded(sceneId);
    }
}

// Загрузить панораму, если еще не загружена
function loadPanoramaIfNeeded(sceneId) {
    if (!panoramaCache.has(sceneId) && loadingStatus.get(sceneId)?.status !== 'loading') {
        const scene = tourConfig.scenes[sceneId];
        loadingStatus.set(sceneId, { status: 'loading', progress: 0 });
        
        const img = new Image();
        img.onload = () => {
            panoramaCache.set(sceneId, img);
            loadingStatus.set(sceneId, { status: 'loaded', progress: 100 });
            loadedScenes++;
            updateLoadingProgress();
        };
        img.src = scene.image;
    }
}

// Показать полноэкранный загрузчик
function showFullscreenLoader() {
    const loader = document.createElement('div');
    loader.id = 'fullscreen-loader';
    loader.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                    background: #000; z-index: 9999; display: flex;
                    flex-direction: column; justify-content: center;
                    align-items: center; color: white; font-family: Arial;">
            <h2 style="margin-bottom: 30px;">Загрузка виртуального тура...</h2>
            <div style="width: 400px; height: 20px; background: #333;
                        border-radius: 10px; overflow: hidden;">
                <div id="loading-progress-bar" style="height: 100%; width: 0%;
                        background: linear-gradient(90deg, #4CAF50, #8BC34A);
                        transition: width 0.3s;"></div>
            </div>
            <p id="loading-progress-text" style="margin-top: 15px; color: #ccc;">
                Загружено 0 из ${totalScenes} панорам (0%)
            </p>
            <p style="margin-top: 30px; color: #666; font-size: 14px;">
                Панорамы загружаются в фоне, это займет около минуты...
            </p>
        </div>
    `;
    document.body.appendChild(loader);
}

// Скрыть полноэкранный загрузчик
function hideFullscreenLoader() {
    const loader = document.getElementById('fullscreen-loader');
    if (loader) {
        loader.style.transition = 'opacity 0.5s';
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }
}

// Показать мини-загрузчик при переключении
function showMiniLoader(sceneId) {
    let miniLoader = document.getElementById('mini-loader');
    if (!miniLoader) {
        miniLoader = document.createElement('div');
        miniLoader.id = 'mini-loader';
        miniLoader.innerHTML = `
            <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
                        background: rgba(0,0,0,0.9); color: white; padding: 20px 40px;
                        border-radius: 10px; z-index: 1000; text-align: center;
                        backdrop-filter: blur(5px); border: 1px solid #333;">
                <div class="spinner" style="border: 3px solid #333; border-top: 3px solid #4CAF50;
                        width: 30px; height: 30px; border-radius: 50%;
                        animation: spin 1s linear infinite; margin: 0 auto 10px;"></div>
                <div id="mini-loader-text">Загрузка панорамы...</div>
            </div>
            <style>
                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            </style>
        `;
        document.body.appendChild(miniLoader);
    }
    
    const sceneName = tourConfig.scenes[sceneId]?.title || 'панорамы';
    document.getElementById('mini-loader-text').textContent = `Загрузка ${sceneName}...`;
    miniLoader.style.display = 'block';
}

// Скрыть мини-загрузчик
function hideMiniLoader() {
    const miniLoader = document.getElementById('mini-loader');
    if (miniLoader) {
        miniLoader.style.display = 'none';
    }
}

// Показать уведомление
function showNotification(message) {
    const notification = document.createElement('div');
    notification.innerHTML = `
        <div style="position: fixed; bottom: 20px; right: 20px;
                    background: #4CAF50; color: white; padding: 15px 25px;
                    border-radius: 8px; z-index: 10000; box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                    animation: slideIn 0.3s ease;">
            ✅ ${message}
        </div>
        <style>
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        </style>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transition = 'opacity 0.3s';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
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
        prevBtn.onclick = () => switchToScene(tourConfig.navigationOrder[currentIndex - 1]);
    } else {
        prevBtn.disabled = true;
    }
    
    if (currentIndex < tourConfig.navigationOrder.length - 1) {
        nextBtn.disabled = false;
        nextBtn.onclick = () => switchToScene(tourConfig.navigationOrder[currentIndex + 1]);
    } else {
        nextBtn.disabled = true;
    }
    
    document.getElementById('btn-home').onclick = () => switchToScene('entrance');
}

// Остальные функции (initUI, createMapHotspots и т.д.) остаются без изменений
function initUI() {
    document.getElementById('toggle-map').addEventListener('click', function() {
        document.getElementById('map-container').classList.toggle('collapsed');
    });
    
    document.getElementById('info-toggle').addEventListener('click', function() {
        document.getElementById('info-content').classList.toggle('hidden');
    });
    
    createMapHotspots();
}

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
            switchToScene(spot.sceneId);
        };
        mapElement.appendChild(area);
    });
}