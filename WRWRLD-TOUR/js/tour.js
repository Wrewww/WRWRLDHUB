// Конфигурация экскурсии
const tourConfig = {
    // Список всех панорам
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

// Настройки качества
const QUALITY_SETTINGS = {
    lowResWidth: 1024,  // Для предпросмотра
    maxConcurrentLoads: 3, // Максимум одновременных загрузок
    preloadRadius: 2 // Сколько сцен вперед загружать
};

// Очередь загрузки
let loadQueue = [];
let activeLoads = 0;

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    initTour();
    initUI();
    startBackgroundPreload();
});

// Предзагрузка изображений
function preloadImage(sceneId) {
    if (imageCache.has(sceneId)) return Promise.resolve(imageCache.get(sceneId));
    
    return new Promise((resolve, reject) => {
        const scene = tourConfig.scenes[sceneId];
        if (!scene) {
            reject(new Error(`Scene ${sceneId} not found`));
            return;
        }
        
        const img = new Image();
        img.onload = () => {
            imageCache.set(sceneId, img);
            resolve(img);
        };
        img.onerror = reject;
        img.src = scene.image;
    });
}

// Загрузка с контролем очереди
function queueLoad(sceneId) {
    return new Promise((resolve, reject) => {
        loadQueue.push({ sceneId, resolve, reject });
        processLoadQueue();
    });
}

function processLoadQueue() {
    if (activeLoads >= QUALITY_SETTINGS.maxConcurrentLoads || loadQueue.length === 0) return;
    
    activeLoads++;
    const { sceneId, resolve, reject } = loadQueue.shift();
    
    preloadImage(sceneId)
        .then(result => {
            activeLoads--;
            resolve(result);
            processLoadQueue();
        })
        .catch(error => {
            activeLoads--;
            reject(error);
            processLoadQueue();
        });
}

// Фоновая предзагрузка связанных сцен
function startBackgroundPreload() {
    // Предзагружаем текущую сцену
    queueLoad(currentSceneId);
    
    // Предзагружаем соседние сцены
    const currentIndex = tourConfig.navigationOrder.indexOf(currentSceneId);
    
    for (let i = 1; i <= QUALITY_SETTINGS.preloadRadius; i++) {
        if (currentIndex - i >= 0) {
            queueLoad(tourConfig.navigationOrder[currentIndex - i]);
        }
        if (currentIndex + i < tourConfig.navigationOrder.length) {
            queueLoad(tourConfig.navigationOrder[currentIndex + i]);
        }
    }
    
    // Предзагружаем все сцены из hotSpots текущей сцены
    const currentScene = tourConfig.scenes[currentSceneId];
    currentScene.hotSpots.forEach(spot => {
        if (spot.sceneId && !imageCache.has(spot.sceneId)) {
            queueLoad(spot.sceneId);
        }
    });
}

// Инициализация тура с улучшенной загрузкой
function initTour() {
    const scene = tourConfig.scenes[currentSceneId];
    
    // Показываем индикатор загрузки
    showLoadingIndicator();
    
    // Сначала показываем низкокачественную версию, если есть
    if (imageCache.has(currentSceneId)) {
        loadSceneWithCache(currentSceneId);
    } else {
        // Загружаем сцену
        preloadImage(currentSceneId).then(() => {
            loadSceneWithCache(currentSceneId);
        }).catch(error => {
            console.error('Error loading scene:', error);
            hideLoadingIndicator();
        });
    }
}

// Загрузка сцены из кэша
function loadSceneWithCache(sceneId) {
    const scene = tourConfig.scenes[sceneId];
    
    if (viewer) {
        viewer.destroy();
    }
    
    const config = {
        type: 'equirectangular',
        panorama: scene.image,
        autoLoad: true,
        compass: true,
        showControls: true,
        hotSpots: []
    };
    
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
    
    viewer = pannellum.viewer('panorama', config);
    
    // Скрываем индикатор загрузки после полной загрузки
    viewer.on('load', function() {
        hideLoadingIndicator();
        // После загрузки текущей сцены предзагружаем связанные
        startBackgroundPreload();
    });
    
    updateUI();
}

// Загрузка другой сцены
function loadScene(sceneId) {
    if (!tourConfig.scenes[sceneId]) {
        console.error('Сцена не найдена:', sceneId);
        return;
    }
    
    showLoadingIndicator();
    currentSceneId = sceneId;
    
    if (imageCache.has(sceneId)) {
        // Если уже загружено, показываем сразу
        loadSceneWithCache(sceneId);
    } else {
        // Если нет, загружаем
        preloadImage(sceneId).then(() => {
            loadSceneWithCache(sceneId);
        }).catch(error => {
            console.error('Error loading scene:', error);
            hideLoadingIndicator();
        });
    }
}

// Показать индикатор загрузки
function showLoadingIndicator() {
    let loader = document.getElementById('loading-indicator');
    if (!loader) {
        loader = document.createElement('div');
        loader.id = 'loading-indicator';
        loader.innerHTML = `
            <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
                        background: rgba(0,0,0,0.8); color: white; padding: 20px 40px;
                        border-radius: 10px; z-index: 1000; font-size: 18px;">
                Загрузка панорамы...
            </div>
        `;
        document.body.appendChild(loader);
    }
    loader.style.display = 'block';
}

// Скрыть индикатор загрузки
function hideLoadingIndicator() {
    const loader = document.getElementById('loading-indicator');
    if (loader) {
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
}

// Инициализация пользовательского интерфейса
function initUI() {
    document.getElementById('toggle-map').addEventListener('click', function() {
        document.getElementById('map-container').classList.toggle('collapsed');
    });
    
    document.getElementById('info-toggle').addEventListener('click', function() {
        document.getElementById('info-content').classList.toggle('hidden');
    });
    
    createMapHotspots();
}

// Создание кликабельных областей на карте
function createMapHotspots() {
    const mapElement = document.getElementById('map-hotspots');
    
    const hotspots = [
        { sceneId: 'entrance', shape: 'circle', coords: '150,100,10' },
        { sceneId: 'corridor1', shape: 'rect', coords: '120,150,180,170' },
        { sceneId: 'classroom101', shape: 'rect', coords: '90,200,130,220' },
        { sceneId: 'canteen', shape: 'rect', coords: '200,200,240,220' },
        { sceneId: 'gym', shape: 'rect', coords: '150,250,190,270' }
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

function updateMapCurrentPosition(sceneId) {
    console.log('Текущая позиция:', sceneId);
}