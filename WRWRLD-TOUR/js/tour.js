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
                    yaw: 100,
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
// Глобальное состояние
let currentSceneId = 'entrance';
let viewer = null;

// Хранилище загруженных изображений в формате dataURL
const imageDataCache = new Map();

// Статус загрузки
let allScenesLoaded = false;
let loadedScenes = 0;
const totalScenes = Object.keys(tourConfig.scenes).length;

// Очередь загрузки
let activeLoads = 0;
const MAX_CONCURRENT_LOADS = 3;
const loadQueue = [];

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    showFullscreenLoader();
    
    // Начинаем загрузку всех панорам
    loadAllPanoramas();
    
    // Инициализируем первую сцену, когда она загрузится
    waitForFirstScene();
    
    initUI();
});

// Ожидание первой сцены
function waitForFirstScene() {
    const checkInterval = setInterval(() => {
        if (imageDataCache.has('entrance')) {
            clearInterval(checkInterval);
            initFirstScene();
        }
    }, 100);
}

// Загрузка всех панорам
function loadAllPanoramas() {
    const scenes = Object.values(tourConfig.scenes);
    
    scenes.forEach(scene => {
        loadQueue.push({
            sceneId: scene.id,
            imageSrc: scene.image,
            priority: scene.id === 'entrance' ? 1 : 2
        });
    });
    
    loadQueue.sort((a, b) => a.priority - b.priority);
    processLoadQueue();
}

// Обработка очереди
function processLoadQueue() {
    while (activeLoads < MAX_CONCURRENT_LOADS && loadQueue.length > 0) {
        const item = loadQueue.shift();
        activeLoads++;
        loadPanoramaAsDataURL(item.sceneId, item.imageSrc);
    }
}

// Загрузка панорамы как DataURL (чтобы полностью сохранить в памяти)
function loadPanoramaAsDataURL(sceneId, imageSrc) {
    console.log(`Загрузка ${sceneId}...`);
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', imageSrc, true);
    xhr.responseType = 'blob';
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            const reader = new FileReader();
            
            reader.onload = function() {
                // Сохраняем как dataURL (полные данные изображения)
                imageDataCache.set(sceneId, reader.result);
                
                console.log(`✅ Загружена ${sceneId} (${(reader.result.length / 1024 / 1024).toFixed(2)} MB)`);
                
                loadedScenes++;
                updateLoadingProgress();
                
                activeLoads--;
                processLoadQueue();
                
                if (loadedScenes === totalScenes) {
                    allScenesLoaded = true;
                    console.log('🎉 Все панорамы загружены!');
                    showNotification('Все панорамы готовы к просмотру!');
                }
            };
            
            reader.readAsDataURL(xhr.response);
        }
    };
    
    xhr.onerror = function() {
        console.error(`Ошибка загрузки ${sceneId}`);
        activeLoads--;
        processLoadQueue();
    };
    
    xhr.onprogress = function(event) {
        if (event.lengthComputable) {
            const percent = Math.round((event.loaded / event.total) * 100);
            updateSceneProgress(sceneId, percent);
        }
    };
    
    xhr.send();
}

// Обновление прогресса
function updateLoadingProgress() {
    const progress = Math.round((loadedScenes / totalScenes) * 100);
    const bar = document.getElementById('loading-progress-bar');
    const text = document.getElementById('loading-progress-text');
    
    if (bar) bar.style.width = progress + '%';
    if (text) text.textContent = `Загружено ${loadedScenes} из ${totalScenes} панорам (${progress}%)`;
}

function updateSceneProgress(sceneId, percent) {
    // Можно добавить детальный прогресс если нужно
}

// Инициализация первой сцены
function initFirstScene() {
    hideFullscreenLoader();
    showScene('entrance');
}

// Показать сцену (используя dataURL из кэша)
function showScene(sceneId) {
    const scene = tourConfig.scenes[sceneId];
    const imageData = imageDataCache.get(sceneId);
    
    if (!imageData) {
        console.log(`Сцена ${sceneId} еще не загружена, показываем загрузку...`);
        showMiniLoader(sceneId);
        
        // Ждем загрузку
        const checkInterval = setInterval(() => {
            if (imageDataCache.has(sceneId)) {
                clearInterval(checkInterval);
                hideMiniLoader();
                showScene(sceneId);
            }
        }, 100);
        return;
    }
    
    // Создаем временный blob URL из dataURL
    // Это ключевой момент - Pannellum будет использовать этот URL,
    // а данные уже есть в памяти
    let imageUrl;
    
    if (imageData.startsWith('data:')) {
        // Конвертируем dataURL в blob URL для лучшей производительности
        const byteString = atob(imageData.split(',')[1]);
        const mimeString = imageData.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        
        const blob = new Blob([ab], { type: mimeString });
        imageUrl = URL.createObjectURL(blob);
    } else {
        imageUrl = imageData;
    }
    
    // Конфигурация для Pannellum
    const config = {
        type: 'equirectangular',
        panorama: imageUrl, // Используем наш blob URL
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
        sceneFadeDuration: 300 // Плавный переход
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
                switchToScene(spot.sceneId);
            }
        });
    });
    
    // Обновляем просмотрщик
    if (viewer) {
        // Плавное затемнение
        document.getElementById('panorama').style.transition = 'opacity 0.3s';
        document.getElementById('panorama').style.opacity = '0';
        
        setTimeout(() => {
            try {
                viewer.destroy();
            } catch (e) {}
            
            // Очищаем старый blob URL
            if (viewer && viewer._config && viewer._config.panorama) {
                URL.revokeObjectURL(viewer._config.panorama);
            }
            
            viewer = pannellum.viewer('panorama', config);
            
            // Плавное появление
            setTimeout(() => {
                document.getElementById('panorama').style.opacity = '1';
            }, 100);
        }, 300);
    } else {
        viewer = pannellum.viewer('panorama', config);
    }
    
    currentSceneId = sceneId;
    updateUI();
}

// Переключение сцены
function switchToScene(sceneId) {
    if (!tourConfig.scenes[sceneId]) return;
    
    if (imageDataCache.has(sceneId)) {
        // Мгновенное переключение
        showScene(sceneId);
    } else {
        console.log(`Сцена ${sceneId} еще загружается...`);
        showMiniLoader(sceneId);
        
        // Форсируем загрузку
        loadPanoramaIfNeeded(sceneId);
        
        // Ждем загрузку
        const checkInterval = setInterval(() => {
            if (imageDataCache.has(sceneId)) {
                clearInterval(checkInterval);
                hideMiniLoader();
                showScene(sceneId);
            }
        }, 100);
    }
}

// Загрузить если нужно
function loadPanoramaIfNeeded(sceneId) {
    if (!imageDataCache.has(sceneId)) {
        const scene = tourConfig.scenes[sceneId];
        loadPanoramaAsDataURL(sceneId, scene.image);
    }
}

// Полноэкранный загрузчик
function showFullscreenLoader() {
    const loader = document.createElement('div');
    loader.id = 'fullscreen-loader';
    loader.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                    background: #000; z-index: 9999; display: flex;
                    flex-direction: column; justify-content: center;
                    align-items: center; color: white; font-family: Arial, sans-serif;">
            <h2 style="margin-bottom: 30px; font-weight: 300;">Загрузка виртуального тура</h2>
            <div style="width: 400px; height: 4px; background: #333;
                        border-radius: 2px; overflow: hidden;">
                <div id="loading-progress-bar" style="height: 100%; width: 0%;
                        background: linear-gradient(90deg, #4CAF50, #8BC34A);
                        transition: width 0.3s;"></div>
            </div>
            <p id="loading-progress-text" style="margin-top: 15px; color: #999; font-size: 14px;">
                Загружено 0 из ${totalScenes} панорам (0%)
            </p>
            <p style="margin-top: 40px; color: #666; font-size: 13px;">
                После загрузки переключение между панорамами будет мгновенным
            </p>
        </div>
    `;
    document.body.appendChild(loader);
}

function hideFullscreenLoader() {
    const loader = document.getElementById('fullscreen-loader');
    if (loader) {
        loader.style.transition = 'opacity 0.5s';
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }
}

// Мини-загрузчик
function showMiniLoader(sceneId) {
    let miniLoader = document.getElementById('mini-loader');
    if (!miniLoader) {
        miniLoader = document.createElement('div');
        miniLoader.id = 'mini-loader';
        miniLoader.innerHTML = `
            <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
                        background: rgba(0,0,0,0.9); color: white; padding: 20px 40px;
                        border-radius: 12px; z-index: 10000; text-align: center;
                        backdrop-filter: blur(10px); border: 1px solid #333;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                <div style="border: 3px solid #333; border-top: 3px solid #4CAF50;
                        width: 30px; height: 30px; border-radius: 50%;
                        animation: spin 1s linear infinite; margin: 0 auto 15px;"></div>
                <div id="mini-loader-text" style="font-size: 16px;">Загрузка панорамы...</div>
            </div>
            <style>
                @keyframes spin { 
                    0% { transform: rotate(0deg); } 
                    100% { transform: rotate(360deg); } 
                }
            </style>
        `;
        document.body.appendChild(miniLoader);
    }
    
    const sceneName = tourConfig.scenes[sceneId]?.title || 'панорамы';
    document.getElementById('mini-loader-text').textContent = `Загрузка ${sceneName}...`;
    miniLoader.style.display = 'block';
}

function hideMiniLoader() {
    const miniLoader = document.getElementById('mini-loader');
    if (miniLoader) {
        miniLoader.style.display = 'none';
    }
}

// Уведомление
function showNotification(message) {
    const notification = document.createElement('div');
    notification.innerHTML = `
        <div style="position: fixed; bottom: 20px; right: 20px;
                    background: #4CAF50; color: white; padding: 15px 25px;
                    border-radius: 8px; z-index: 10001; box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                    animation: slideIn 0.3s ease; font-size: 14px;">
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

// Обновление UI (без изменений)
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

// Очистка blob URL при перезагрузке страницы
window.addEventListener('beforeunload', function() {
    if (viewer && viewer._config && viewer._config.panorama) {
        URL.revokeObjectURL(viewer._config.panorama);
    }
});